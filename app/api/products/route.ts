import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // For now, use hardcoded user
    const user = await prisma.user.findFirst({ where: { clerkId: "user_clerk_123456" } });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }
    // Fetch all products for the user
    const products = await prisma.product.findMany({
      where: { userId: user.id },
      include: {
        features: {
          include: {
            tasks: true,
          },
        },
      },
    });
    // Calculate completion ratio for each product
    const productSummaries = products.map(product => {
      const allTasks = product.features.flatMap(f => f.tasks);
      const totalTasks = allTasks.length;
      const completedTasks = allTasks.filter(t => t.completed).length;
      const percent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        percent,
      };
    });
    return NextResponse.json({ success: true, products: productSummaries });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json({ success: false, error: err?.toString() }, { status: 500 });
  }
}
