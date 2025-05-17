import { startOfDay, subDays, isSameDay } from "date-fns";
import prisma from "@/lib/prisma";

/**
 * Input parameters for updating a user's streak
 */
interface UpdateStreakParams {
  userId: string;
  productId: string;
  date: Date;
}

/**
 * Updates a user's streak for a specific product
 * Creates a new streak entry if one doesn't exist for today
 * Updates the product's current streak and all-time best streak
 */
async function updateStreak({ userId, productId, date }: UpdateStreakParams): Promise<void> {
  const today = startOfDay(date);

  // Create or update today's streak entry
  await prisma.dailyStreak.upsert({
    where: {
      date: today,
    },
    update: {
      completedTaskCount: { increment: 1 },
    },
    create: {
      userId,
      productId,
      date: today,
      completedTaskCount: 1,
    },
  });

  // Get last 2 streak entries to check for continuity
  const lastTwoDays = await prisma.dailyStreak.findMany({
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
  const hasYesterday = lastTwoDays.some((s: { date: Date }) => isSameDay(s.date, yesterday));

  // Handle streak count
  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: {
      currentStreak: true,
      AllTimeBestStreak: true,
    },
  });

  if (!product) {
    throw new Error(`Product with ID ${productId} not found`);
  }

  // Calculate new streak values
  const newStreak: number = hasYesterday ? product.currentStreak + 1 : 1;
  const newBest: number = Math.max(product.AllTimeBestStreak, newStreak);

  // Update product with new streak values
  await prisma.product.update({
    where: { id: productId },
    data: {
      currentStreak: newStreak,
      AllTimeBestStreak: newBest,
    },
  });
}

export default updateStreak;
