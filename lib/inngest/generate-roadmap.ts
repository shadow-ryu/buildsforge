// /inngest/generate-roadmap.ts
import { inngest } from "@/lib/inngest";
import prisma from "@/lib/prisma";
import { generateRoadmapPromptUpgraded } from "@/lib/ai_helpers/solo-prompt";
import { generateWithModel } from "@/lib/ai_helpers/model-selector";

export const generateRoadmap = inngest.createFunction(
  { id: "generate-roadmap" },
  { event: "generate/roadmap" },
  async ({ event, step }) => {
    await step.run("generate-roadmap-steps", async () => {
      const { productId } = event.data;

      const product = await prisma.product.findUnique({
        where: { id: productId },
        include: {
          features: {
            orderBy: { rank: "asc" },
            include: { tasks: true },
          },
          user: true,
        },
      });

      if (!product || !product.user)
        throw new Error("Product or user not found");

      const flatTasks = product.features.flatMap((feature) =>
        feature.tasks.map((task) => ({
          title: task.title,
          description: feature.description,
          category: feature.name,
          id: task.id,
        }))
      );

      const prompt = generateRoadmapPromptUpgraded({
        tasks: flatTasks,
        startDate: product.startDate!.toISOString(),
        dailyHours: product.dailyCommitmentHrs!,
        product: {
          name: product.name,
          description: product.description ?? "",
          deadline: product.deadline.toISOString(),
          techStack: product.techStack ?? "",
          uniqueValueProp: product.uniqueValueProp ?? "",
          inspirationApps: Array.isArray(product.inspirationApps)
            ? product.inspirationApps.join(", ")
            : product.inspirationApps ?? "",
        },
      });

      const roadmap = await generateWithModel({
        prompt,
        userId: product.user.id,
        productId: product.id,
        type: "roadmap",
      });

      const featureMap = new Map(
        product.features.map((f) => [f.name.toLowerCase(), f])
      );

      for (const day of roadmap) {
        const dueDate = new Date(day.date);

        for (const task of day.tasks) {
          let taskId = flatTasks.find((t) => t.id === task.parent_task_id)?.id;

          if (!taskId) {
            const categoryKey = task.category.trim().toLowerCase();
            let feature = featureMap.get(categoryKey);

            if (!feature) {
              const createdFeature = await prisma.feature.create({
                data: {
                  name: task.category,
                  description: `${task.category} tasks`,
                  rank: product.features.length + 1,
                  productId: product.id,
                },
                include: { tasks: true },
              });
              featureMap.set(categoryKey, createdFeature);
              feature = createdFeature;
            }

            const newTask = await prisma.task.create({
              data: {
                title: task.title,
                completed: false,
                feature: { connect: { id: feature.id } },
              },
            });

            taskId = newTask.id;
          }

          await prisma.dayTask.upsert({
            where: { taskId },
            create: {
              taskId,
              dayIndex: day.day,
              dueDate,
              category: task.category,
              description: task.description,
              status: "backlog",
            },
            update: {},
          });
        }
      }

      await prisma.product.update({
        where: { id: productId },
        data: { isRoadmapGenerated: true, active: true },
      });
    });
  }
);
