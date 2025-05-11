import { NextRequest, NextResponse } from "next/server";
import { generateMvpWithChatGPT } from "@/lib/ai_helpers/chatgptMvpGenerator";
import prisma from "@/lib/prisma"; // adjust path as needed
// import { getServerSession } from "next-auth"; // if you're using next-auth
// import { authOptions } from "@/lib/auth"; // adjust as needed

export async function POST(req: NextRequest) {
  try {
 
   const user = await prisma.user.findFirst({
    where: {
      clerkId: "user_clerk_123456"
    }
   })
   if (!user) {
    return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
   }
    const input = await req.json();
    console.log("Received data for MVP generation:", input);

    const gptResult = await generateMvpWithChatGPT(input);
    console.log("Result from generateMvpWithChatGPT:", gptResult);

    // Create Product
    const product = await prisma.product.create({
      data: {
        name: gptResult.product_name,
        description: gptResult.one_liner,
        problemStatement: input.problem_statement,
        targetAudience: input.target_audience,
        userGoals: input.user_goals,
        uniqueValueProp: input.unique_value_proposition,
        techStack: input.tech_stack,
        inspirationApps: JSON.stringify(input.inspiration_apps),
        initialFeatures: JSON.stringify(input.initial_features),
        userId: user.id,
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        dailyCommitmentHrs: 2.0,
      }
    });

    // Create Features and Tasks
    for (const f of gptResult.key_features) {
      const feature = await prisma.feature.create({
        data: {
          name: f.feature,
          description: f.description,
          rank: f.rank,
          productId: product.id
        }
      });

      for (let i = 0; i < f.tasks.length; i++) {
        await prisma.task.create({
          data: {
            title: f.tasks[i],
            dayNumber: null, // roadmap scheduling comes later
            completed: false,
            featureId: feature.id
          }
        });
      }
    }

    return NextResponse.json({ success: true, productId: product.id });
  } catch (error) {
    console.error("Error in /api/products/create:", error);
    return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
  }
}
