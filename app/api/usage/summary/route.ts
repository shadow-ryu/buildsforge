// app/api/user/usage/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import plans from "@/lib/plans";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: {
      subscriptions: true,
      aiLogs: true,
    },
  });

  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const activeSubscription = dbUser.subscriptions.find(
    (sub) => sub.status === "active"
  );
  const aiLogs = dbUser.aiLogs ?? [];
  const usage = {
    roadmap: aiLogs.filter((log) => log.type === "roadmap").length,
    mvp: aiLogs.filter((log) => log.type === "mvp_generation").length,
    buildlog: aiLogs.filter((log) => log.type === "build_log").length,
    project: aiLogs.filter((log) => log.type === "project").length,
  };

  const matchedPlan = plans.find(
    (plan) => plan.productId === activeSubscription?.lemonSqueezyProductId
  );

  const limits = matchedPlan?.limits ?? {
    project: 0,
    roadmap: 0,
    mvp: 0,
    buildlog: 0,
  };

  const canUse = {
    // @ts-expect-error string comparison
    roadmap: limits.roadmap === "unlimited" || usage.roadmap < limits.roadmap,
    // @ts-expect-error string comparison
    mvp: limits.mvp === "unlimited" || usage.mvp < limits.mvp,
    buildlog:
      // @ts-expect-error string comparison
      limits.buildlog === "unlimited" || usage.buildlog < limits.buildlog,
    project:
      // @ts-expect-error string comparison
      limits.project === "unlimited" || usage.project < limits.project,
  };

  return NextResponse.json({
    plan: matchedPlan?.name ?? "free",
    usage,
    limits,
    canUse,
  });
}
