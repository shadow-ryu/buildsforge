import prisma from "@/lib/prisma";
import { generateWithChatGPT } from "./gpt-generator";
import { generateWithGemini } from "./gemini-generator";
import plans from "../plans";

export async function generateWithModel({
  prompt,
  userId,
  productId,
  type,
}: {
  prompt: string;
  userId: string;
  productId: string;
  type: "mvp_generation" | "roadmap" | "build_log";
}) {
  // Fetch active subscription for user
  const activeSubscription = await prisma.subscription.findFirst({
    where: {
      userId,
      status: "active",
    },
    select: {
      lemonSqueezyProductId: true,
    },
  });

  const model = plans.find(
    (plan) => plan.productId === activeSubscription?.lemonSqueezyProductId
  )?.model;

  if (model === "gpt") {
    return await generateWithChatGPT({ prompt, userId, productId, type });
  } else {
    return await generateWithGemini({ prompt, userId, productId, type });
  }
}
