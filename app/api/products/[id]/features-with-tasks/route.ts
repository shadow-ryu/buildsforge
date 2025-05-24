import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const features = await prisma.feature.findMany({
      where: { productId: id },
      include: {
        tasks: true,
      },
    });

    return NextResponse.json({ success: true, features });
  } catch (err) {
    console.error("Failed to fetch features and tasks", err);
    return NextResponse.json(
      { success: false, error: "Could not fetch data" },
      { status: 500 }
    );
  }
}
