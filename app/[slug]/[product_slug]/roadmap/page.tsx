import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
// Link import removed as it's no longer used
import { RoadmapFlow } from "@/components/roadmaps/public-roadmap";
import { Prisma } from "@prisma/client";

interface PageProps {
  params: Promise<{ product_slug: string }>; // slug removed as it's not used
}

// Interface for what RoadmapFlow's task expects
interface TaskForRoadmapFlow {
  id: string; // This will be DayTask.id
  title: string;
  description: string;
  completed?: boolean;
}

// Interface for what RoadmapFlow's day expects
interface DayForRoadmapFlow {
  dayIndex: number;
  dueDate: string; // ISO string format
  tasks: TaskForRoadmapFlow[];
}

// Type for the dayTask part of the fetched data
type FetchedPrismaDayTask = NonNullable<Prisma.TaskGetPayload<{
  select: { dayTask: true }
}>['dayTask']>;


export default async function ProductRoadmapPage({ params }: PageProps) {
  const { product_slug } = await params; // slug removed
  console.log("Fetching product with slug:", product_slug);

  const product = await prisma.product.findFirst({
    where: {
      slug: product_slug,
      settings: {
        roadmapPublic: true,
      },
    },
    select: { // Select only necessary fields
      name: true,
      features: {
        select: {
          id: true, // Feature ID
          name: true, // Feature name
          tasks: {
            select: {
              id: true, // Task ID
              title: true, // Task title
              completed: true, // Task's own completed status
              dayTask: { // Include the full DayTask details needed
                select: {
                  id: true,
                  dayIndex: true,
                  dueDate: true,
                  // category: true, // Uncomment if needed by TaskForRoadmapFlow
                  description: true,
                  status: true,
                  completedAt: true,
                }
              }
            }
          }
        }
      }
    }
  });

  if (!product || !product.name) {
    console.log(`Product not found, name missing, or roadmap not public for product_slug: ${product_slug}`);
    return notFound();
  }

  const dayDataMap: Record<number, { dueDate: Date | null, tasks: TaskForRoadmapFlow[] }> = {};
  let hasAnyDayTasks = false;

  if (product.features) {
    product.features.forEach((feature) => {
      feature.tasks.forEach((task) => {
        const dayTaskData = task.dayTask as FetchedPrismaDayTask | null; // Cast for type safety
        if (dayTaskData) {
          hasAnyDayTasks = true;
          const dayIdx = dayTaskData.dayIndex;

          if (!dayDataMap[dayIdx]) {
            dayDataMap[dayIdx] = { dueDate: dayTaskData.dueDate, tasks: [] };
          }
          // Ensure dueDate is set if it was null from a previous task on the same day (shouldn't happen if data is consistent)
          if (dayDataMap[dayIdx].dueDate === null) {
             dayDataMap[dayIdx].dueDate = dayTaskData.dueDate;
          }

          dayDataMap[dayIdx].tasks.push({
            id: dayTaskData.id,
            title: task.title || dayTaskData.description || "Untitled Task",
            description: dayTaskData.description || task.title || "No description",
            completed: task.completed || dayTaskData.status.toLowerCase() === "done" || dayTaskData.status.toLowerCase() === "completed" || !!dayTaskData.completedAt,
          });
        }
      });
    });
  }

  const roadmapDays: DayForRoadmapFlow[] = [];
  if (hasAnyDayTasks) {
    Object.keys(dayDataMap)
      .map(dayIdxStr => Number(dayIdxStr))
      .sort((a, b) => a - b)
      .forEach(dayIdx => {
        const dayDataEntry = dayDataMap[dayIdx];
        if (dayDataEntry.dueDate) { // Only add day if dueDate is valid
          roadmapDays.push({
            dayIndex: dayIdx,
            dueDate: dayDataEntry.dueDate.toISOString(),
            tasks: dayDataEntry.tasks,
          });
        }
      });
  }

  return (
    <div className="px-4 py-12 text-white bg-black min-h-screen  mx-auto">
      <h1 className="text-3xl font-bold mb-2">Roadmap for {product.name}</h1>
      {/* "Owned by" section removed as per user's previous edits */}
      
      {roadmapDays.length > 0 ? (
        <div className="space-y-4">
          <RoadmapFlow days={roadmapDays} />
        </div>
      ) : (
        <div className="bg-[#111111] border border-gray-800 p-8 rounded-lg text-center">
            <p className="text-gray-400">No roadmap tasks available for this product yet, or it&apos;s still being generated.</p>
        </div>
      )}
    </div>
  );
}