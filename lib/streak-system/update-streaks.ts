import { startOfDay, subDays, isSameDay } from "date-fns";
import prisma from "@/lib/prisma";

interface UpdateStreakParams {
  userId: string;
  productId: string;
  date: Date;
}

export async function updateStreak({
  userId,
  productId,
  date,
}: UpdateStreakParams): Promise<void> {
  const today = startOfDay(date);

  // Create today's streak entry if it doesn't exist
  await prisma.dailyStreak.upsert({
    where: {
      userId_productId_date: {
        userId,
        productId,
        date: today,
      },
    },
    update: {}, // No fields to update
    create: {
      userId,
      productId,
      date: today,
    },
  });

  // Check last 2 days for continuity
  const lastTwoStreaks = await prisma.dailyStreak.findMany({
    where: {
      userId,
      productId,
      date: {
        gte: subDays(today, 2),
        lt: today,
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  const yesterday = subDays(today, 1);
  const hadYesterday = lastTwoStreaks.some((s) => isSameDay(s.date, yesterday));

  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: {
      currentStreak: true,
      AllTimeBestStreak: true,
    },
  });

  if (!product) throw new Error(`Product with ID ${productId} not found`);

  const newStreak = hadYesterday ? product.currentStreak + 1 : 1;
  const newBest = Math.max(product.AllTimeBestStreak, newStreak);

  await prisma.product.update({
    where: { id: productId },
    data: {
      currentStreak: newStreak,
      AllTimeBestStreak: newBest,
      losingStreak: false,
    },
  });
}

export async function checkAndResetStreaks(
  userId: string,
  productId: string
): Promise<void> {
  const today = startOfDay(new Date());
  const yesterday = subDays(today, 1);
  const dayBeforeYesterday = subDays(today, 2);

  const [yesterdayStreak, twoDaysAgoStreak, product] = await Promise.all([
    prisma.dailyStreak.findFirst({
      where: { userId, productId, date: yesterday },
    }),
    prisma.dailyStreak.findFirst({
      where: { userId, productId, date: dayBeforeYesterday },
    }),
    prisma.product.findUnique({
      where: { id: productId },
      select: { currentStreak: true, AllTimeBestStreak: true },
    }),
  ]);

  if (!product) throw new Error("Product not found");

  const best = Math.max(product.currentStreak, product.AllTimeBestStreak);

  // Missed 2 days in a row: full reset
  if (!yesterdayStreak && !twoDaysAgoStreak) {
    await Promise.all([
      prisma.product.update({
        where: { id: productId },
        data: {
          currentStreak: 0,
          AllTimeBestStreak: best,
          losingStreak: false,
        },
      }),
      prisma.dailyStreak.deleteMany({
        where: {
          userId,
          productId,
        },
      }),
    ]);
    return;
  }

  // Missed only yesterday: mark as losing
  if (!yesterdayStreak) {
    await prisma.product.update({
      where: { id: productId },
      data: {
        losingStreak: true,
      },
    });
  }
}
