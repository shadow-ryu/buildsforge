"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Flame, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BuildLogForm from "@/components/build-log-form";
import { cn } from "@/lib/utils";
import ReorderRoadmap from "@/components/roadmaps/redo-roadmap";
import { toast } from "sonner";
import DayTaskCreateForm from "@/components/products/daytask-create-form";
import { useUsage } from "@/hooks/use-usage";

// Backend DayTask type (minimal, for type conversion)
type DayTask = {
  id: string;
  status: string;
  taskId: string;
  dayIndex: number;
  dueDate: Date;
  completedAt: Date | null;
  category: string;
  description: string;
  milestoneGoal: string | null;
  shipCheck: string | null;
  buildLogId: string | null;
  // Optionally, you can add frontend fields here if needed
};
interface Task {
  id: string;
  title: string;
  status: string;
  description: string;
  category: string;
  completed?: boolean;
  dayIndex?: number;
  dayIdx?: number;
  dueDate?: string;
}

interface Day {
  dayIndex: number;
  dueDate: string;
  tasks: Task[];
}

interface RoadmapDisplayProps {
  days: Day[];
  onTaskComplete: (taskId: string) => void;
  id: string;
  onShowBuildLog: (dayIndex: number) => void;
  handleRevise: () => void;
  blocked: { buildlog: boolean };
}
export function useDeleteTask(productId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: string) => {
      const res = await axios.delete("/api/products/delete-task", {
        data: {
          productId,
          taskId,
        },
      });
      if (!res.data.success) {
        throw new Error(res.data.error || "Delete failed");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roadmap", productId] });
    },
    onError: (error) => {
      console.error("Delete failed", error);
      alert("Failed to delete task");
    },
  });
}
function RoadmapDisplay({
  days,
  onTaskComplete,
  id,
  handleRevise,
  blocked,
}: RoadmapDisplayProps) {
  const totalCompleted = days.reduce(
    (acc, day) => acc + day.tasks.filter((task) => task.completed).length,
    0
  );

  const today = new Date();
  const todayStr = today.toDateString();

  const todaysTasks = days
    .flatMap((day) =>
      day.tasks.map((task) => ({
        ...task,
        dayIndex: day.dayIndex,
        dueDate: day.dueDate,
      }))
    )
    .filter((task) => new Date(task.dueDate).toDateString() === todayStr);

  const restOfRoadmap = days.filter(
    (day) => new Date(day.dueDate).toDateString() !== todayStr
  );

  const deleteTask = useDeleteTask(id);

  const getDayStatus = (day: Day, index: number): string => {
    const dayDate = new Date(day.dueDate);
    const allCompleted = day.tasks.every((t: Task) => t.completed);
    const anyCompleted = day.tasks.some((t: Task) => t.completed);

    if (dayDate.toDateString() === todayStr) {
      return anyCompleted && !allCompleted
        ? "In Progress"
        : allCompleted
        ? "Completed"
        : "In Progress";
    }

    if (dayDate < today) {
      return allCompleted ? "Completed" : "Missed Backlog";
    }

    const nextDay = days[index - 1]?.dueDate
      ? new Date(days[index - 1].dueDate)
      : null;

    if (nextDay && nextDay > today && !allCompleted) {
      return "Upcoming Backlog";
    }

    return allCompleted ? "Completed" : "Upcoming";
  };

  return (
    <div className="mx-auto py-10 sm:p-6 w-full bg-[#0f0f11]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link href={`/dashboard/products/${id}`}>
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-white">Your Roadmap</h2>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm justify-end w-full">
        <Badge className="flex items-center gap-2 text-sm">
          <Flame className="w-4 h-4 text-purple-800" />
          <p className="text-white">
            <span className="text-purple-400">{totalCompleted}</span>
          </p>
        </Badge>
        <Dialog>
          <DialogTrigger disabled={blocked.buildlog}>
            <div
              className={cn(
                buttonVariants({ variant: "default" }),
                "text-white hover:text-purple-400 bg-purple-600 hover:bg-purple-700"
              )}
            >
              Generate Build Log
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#181A20] border border-purple-800/40 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl text-white">
                Generate Build Log
              </DialogTitle>
            </DialogHeader>
            <BuildLogForm projectId={id} />
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          className="text-xs text-purple-400 hover:text-purple-700 border-purple-700 hover:border-purple-500"
          onClick={handleRevise}
        >
          Revise Roadmap
        </Button>
        <DayTaskCreateForm productId={id} />
      </div>

      {todaysTasks.length > 0 && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Today&apos;s Focus
          </h3>
          <div className="space-y-4">
            {todaysTasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-xl bg-[#181A20] border border-[#2A2D36] hover:border-purple-600 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className={
                        task.completed ? "text-purple-500" : "text-gray-500"
                      }
                    />
                    <div>
                      <p className="text-white font-medium text-sm">
                        {task.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {task.description}
                      </p>
                      <Badge className="mt-2 bg-purple-900 text-purple-300 border border-purple-700 text-xs">
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button
                      size="sm"
                      className="text-xs font-semibold bg-purple-600 hover:bg-purple-700"
                      disabled={task.completed || deleteTask.isPending}
                      onClick={() => onTaskComplete(task.id)}
                    >
                      {task.completed ? "Done" : "Mark Done"}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        deleteTask.mutate(task.id);
                      }}
                      disabled={deleteTask.isPending || task.completed}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {restOfRoadmap.map((day, index) => (
          <div
            key={day.dayIndex}
            className="rounded-2xl border border-purple-900 bg-gradient-to-br from-[#1f1f22] to-[#151516] p-5"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-white font-semibold">
                Day {day.dayIndex} – {new Date(day.dueDate).toDateString()}
              </h4>
              <Badge
                variant="outline"
                className="text-purple-300 border-purple-700 text-xs"
              >
                {getDayStatus(day, index)}
              </Badge>
            </div>
            <div className="space-y-4">
              {day.tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-[#181A20] rounded-xl border border-[#2D2F36] hover:border-purple-600 transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-3">
                      <CheckCircle
                        size={20}
                        className={
                          task.completed ? "text-purple-500" : "text-gray-500"
                        }
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {task.description}
                        </p>
                        <Badge className="mt-2 bg-purple-900 text-purple-300 border border-purple-700 text-xs">
                          {task.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button
                        size="sm"
                        className="text-xs font-semibold bg-purple-600 hover:bg-purple-700"
                        disabled={task.completed}
                        onClick={() => onTaskComplete(task.id)}
                      >
                        {task.completed ? "Done" : "Mark Done"}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          deleteTask.mutate(task.id);
                        }}
                        disabled={deleteTask.isPending || task.completed}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const queryClient = useQueryClient();
  const [isRevising, setIsRevising] = React.useState(false);
  const { blocked, isLoading: usageLoading } = useUsage();

  const handleRevise = () => {
    setIsRevising((prev) => !prev);
  };

  const handleSaveUpdatedRoadmap = async (
    updatedDays: Partial<DayTask>[] = []
  ) => {
    if (!updatedDays.length) return toast("No changes detected");
    try {
      const res = await axios.post(`/api/products/${id}/update_tasks`, {
        productId: id,
        updatedDays,
      });
      if (!res.data.success) {
        throw new Error(res.data.error || "Failed to update tasks");
      }
      queryClient.invalidateQueries({ queryKey: ["roadmap", id] });
      toast("Roadmap saved successfully");
      setIsRevising(false);
    } catch (error) {
      console.error("Error updating tasks:", error);
      toast("Failed to save roadmap updates");
    }
  };

  // Build Log Modal State
  const [buildLog, setBuildLog] = React.useState<{
    summary: string;
    tweet: string;
  } | null>(null);
  const [buildLogLoading, setBuildLogLoading] = React.useState(false);
  const [buildLogError, setBuildLogError] = React.useState<string | null>(null);

  // Fetch tasks with React Query
  const { data: days = [], isLoading } = useQuery<Day[]>({
    queryKey: ["roadmap", id],
    queryFn: async () => {
      const res = await axios.get(`/api/products/${id}/daily_task`);
      if (!res.data.success)
        throw new Error(res.data.error || "Failed to fetch roadmap");
      return res.data.days;
    },
  });

  // Task completion mutation
  const completeMutation = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await axios.post(
        `/api/products/${id}/daily_task/mark_complete`,
        {
          dayTaskId: taskId,
          productId: id,
        }
      );
      if (!res.data.success)
        throw new Error(res.data.error || "Failed to complete task");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roadmap", id] });
    },
    onError: (error) => {
      console.error("Error completing task:", error);
      alert("Failed to complete task: " + error);
    },
  });

  if (isLoading || usageLoading)
    return (
      <LoadingScreen isLoading={true} message="Loading roadmap..." header="" />
    );

  // Handler for task completion using React Query mutation
  const handleTaskComplete = (taskId: string) => {
    completeMutation.mutate(taskId);
  };
  return (
    <div className="">
      {isRevising ? (
        <ReorderRoadmap
          initialDays={days}
          onSave={(updatedDayTasks) => {
            console.log(updatedDayTasks, days);
            handleSaveUpdatedRoadmap(updatedDayTasks);
          }}
        />
      ) : (
        <RoadmapDisplay
          id={id}
          blocked={blocked}
          days={days}
          onTaskComplete={handleTaskComplete}
          handleRevise={handleRevise}
          onShowBuildLog={async (dayIndex: number) => {
            setBuildLogLoading(true);
            setBuildLogError(null);
            try {
              const res = await axios.post(`/api/products/${id}/build-log`, {
                dayIndex,
                productId: id,
              });
              const data = res.data;
              if (data.success) {
                setBuildLog({
                  summary: data.buildLog.summary,
                  tweet: data.tweet,
                });
              } else {
                setBuildLogError(data.error || "Unknown error");
              }
            } catch (err) {
              setBuildLogError((err as Error).toString());
            } finally {
              setBuildLogLoading(false);
            }
          }}
        />
      )}
      {/* Build Log Modal */}
      {buildLogLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#23262F] p-6 rounded-lg text-[#F4F4F5]">
            Generating build log...
          </div>
        </div>
      )}
      {buildLog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#23262F] p-6 rounded-lg max-w-lg w-full text-[#F4F4F5] relative">
            <button
              className="absolute top-2 right-2 text-[#FBBF24] text-xl"
              onClick={() => setBuildLog(null)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">Build Log</h3>
            <pre className="whitespace-pre-wrap mb-4 text-sm bg-[#181A20] p-3 rounded">
              {buildLog.summary}
            </pre>
            <h4 className="font-semibold mb-1">Tweet suggestion:</h4>
            <pre className="whitespace-pre-wrap text-xs bg-[#181A20] p-2 rounded">
              {buildLog.tweet}
            </pre>
          </div>
        </div>
      )}
      {buildLogError && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#23262F] p-6 rounded-lg max-w-md w-full text-[#F4F4F5] relative">
            <button
              className="absolute top-2 right-2 text-[#FBBF24] text-xl"
              onClick={() => setBuildLogError(null)}
            >
              &times;
            </button>
            <div className="text-red-400 font-semibold mb-2">Error</div>
            <div className="text-sm">{buildLogError}</div>
          </div>
        </div>
      )}
    </div>
  );
}
