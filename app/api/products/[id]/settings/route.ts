import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Product } from "@prisma/client";

type ProductWithSettings = {
  id: string;
  name: string;
  // Add other product fields as needed
  settings: {
    roadmapPublic: boolean;
    buildLogsPublic: boolean;
    detailsPublic: boolean;
  } | null;
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Get the product with its settings
    const product = await prisma.product.findUnique({
      where: {
        id: params.id,
        user: {
          clerkId: userId,
        },
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    // Get the product settings separately
    const settings = await prisma.productSettings.findFirst({
      where: { productId: params.id },
    });

    return NextResponse.json({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      settings: settings || {
        roadmapPublic: false,
        buildLogsPublic: false,
        detailsPublic: false,
      },
    } as ProductWithSettings);
  } catch (error) {
    console.error("[PRODUCT_SETTINGS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { name, settings, slug, description } = body;

    const data: Partial<Product> | null = {};

    if (name) data.name = name;
    if (slug) data.slug = slug;
    if (description) data.description = description;
    // Update product name if provided

    await prisma.product.update({
      where: { id: params.id, user: { clerkId: userId } },
      data: data,
    });

    // Update or create settings
    if (settings) {
      await prisma.productSettings.upsert({
        where: { productId: params.id },
        update: settings,
        create: {
          ...settings,
          productId: params.id,
        },
      });
    }

    return new NextResponse("Settings updated", { status: 200 });
  } catch (error) {
    console.error("[PRODUCT_SETTINGS_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // First, verify the product exists and belongs to the user
    const product = await prisma.product.findUnique({
      where: {
        id: params.id,
        user: { clerkId: userId },
      },
      select: {
        id: true,
        features: true,
        buildLogs: true,
        DailyStreak: true,
        aiLogs: true,
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    // Delete related records in the correct order to avoid foreign key constraints
    await prisma.$transaction([
      // Delete build logs and their related day tasks
      prisma.buildLog.deleteMany({
        where: { productId: params.id },
      }),

      prisma.productSettings.deleteMany({
        where: { productId: params.id },
      }),
      // Delete day tasks that might be related to features
      prisma.dayTask.deleteMany({
        where: {
          task: {
            feature: {
              productId: params.id,
            },
          },
        },
      }),

      // Delete tasks related to features
      prisma.task.deleteMany({
        where: {
          feature: {
            productId: params.id,
          },
        },
      }),

      // Delete features
      prisma.feature.deleteMany({
        where: { productId: params.id },
      }),

      // Delete daily streaks
      prisma.dailyStreak.deleteMany({
        where: { productId: params.id },
      }),

      // Delete AI logs
      prisma.aiLog.deleteMany({
        where: { productId: params.id },
      }),

      // Finally, delete the product
      prisma.product.delete({
        where: { id: params.id },
      }),
    ]);

    return new NextResponse("Product and all related data deleted", {
      status: 200,
    });
  } catch (error) {
    console.error("[PRODUCT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
