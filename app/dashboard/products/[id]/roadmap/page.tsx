"use client";
import React, { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Flame, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
function RoadmapDisplay({
  days,
  onTaskComplete,
  id,
  onShowBuildLog,
}: {
  days: {
    dayIndex: number;
    dueDate: string;
    tasks: {
      id: string;
      title: string;
      status: string;
      description: string;
      category: string;
      completed?: boolean;
    }[];
  }[];
  onTaskComplete: (dayIdx: number, taskId: string) => void;
  id: string;
  onShowBuildLog: (dayIndex: number) => void;
}) {
  const totalCompleted = days.reduce(
    (acc, day) => acc + day.tasks.filter((task) => task.completed).length,
    0
  );

  const today = new Date().toDateString();
  const todaysTasks = days
    .flatMap((day, dayIdx) =>
      day.tasks.map((task) => ({ ...task, dayIndex: day.dayIndex, dayIdx }))
    )
    .filter((task) => {
      const taskDate = days.find((d) => d.dayIndex === task.dayIndex)?.dueDate;
      return new Date(taskDate || today).toDateString() === today;
    });

  const restOfRoadmap = days.filter(
    (day) => new Date(day.dueDate).toDateString() !== today
  );

  return (
    <div className="mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between text-center mb-6">
        <div className="flex items-center gap-2">
          <Link href={`/dashboard/products/${id}`}>
            <Button variant="ghost" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold text-[#F4F4F5]">Project Roadmap</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#FBBF24] font-medium">
          <Flame className="w-4 h-4" />
          <span>{totalCompleted} Tasks Completed</span>
        </div>
      </div>

      {/* Today’s Tasks Section */}
      {todaysTasks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#A1F59F] mb-4">
            Today&apos;s Focus
          </h3>
          <ul className="space-y-4">
            {todaysTasks.map((task, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-[#1C1C1F] border border-[#2D2F36] hover:border-[#A1F59F] transition"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className={
                        task.completed ? "text-[#A1F59F]" : "text-gray-500"
                      }
                    />
                    <div>
                      <p className="text-sm font-medium text-[#F4F4F5]">
                        {task.title}
                      </p>
                      <p className="text-xs text-[#A1A1AA] mt-1">
                        {task.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="text-xs bg-[#23262F] text-[#A1A1AA] border border-[#333]">
                      {task.category}
                    </Badge>
                    <Button
                      size="sm"
                      className="text-xs font-semibold px-3 py-1 bg-[#A1F59F] text-[#181A20] hover:bg-[#8be58c]"
                      disabled={task.completed}
                      onClick={() => {
                        console.log(task.id);
                        onTaskComplete(task.dayIdx, task.id);
                      }}
                    >
                      {task.completed ? "Done" : "Mark Done"}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rest of Roadmap */}
      <div className="grid md:grid-cols-2 gap-6">
        {restOfRoadmap.map((day, dayIdx) => (
          <div
            key={day.dayIndex}
            className="bg-gradient-to-br from-[#1F1F22] to-[#121316] p-4 rounded-2xl border border-[#2A2D36] shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-[#F4F4F5]">
                Day {day.dayIndex} – {new Date(day.dueDate).toDateString()}
              </h3>
              <Badge
                variant="outline"
                className="text-xs text-[#A1F59F] border-[#A1F59F]"
              >
                {day.tasks.some((task) => task.completed)
                  ? "In Progress"
                  : "Upcoming"}
              </Badge>
            </div>
            <ul className="space-y-4">
              {day.tasks.map((task, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-xl bg-[#1C1C1F] border border-[#2D2F36] hover:border-[#A1F59F] transition"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        className={
                          task.completed ? "text-[#A1F59F]" : "text-gray-500"
                        }
                      />
                      <div>
                        <p className="text-sm font-medium text-[#F4F4F5]">
                          {task.title}
                        </p>
                        <p className="text-xs text-[#A1A1AA] mt-1">
                          {task.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="text-xs bg-[#23262F] text-[#A1A1AA] border border-[#333]">
                        {task.category}
                      </Badge>
                      <Button
                        size="sm"
                        className="text-xs font-semibold px-3 py-1 bg-[#A1F59F] text-[#181A20] hover:bg-[#8be58c]"
                        disabled={task.completed}
                        onClick={() => onTaskComplete(dayIdx, task.id)}
                      >
                        {task.completed ? "Done" : "Mark Done"}
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="ghost"
                className="text-xs  flex items-center gap-1"
                onClick={() => onShowBuildLog(day.dayIndex)}
              >
                Generate Build Log
              </Button>
              <Button
                variant="ghost"
                className="text-xs  flex items-center gap-1"
              >
                <RefreshCcw size={14} /> Revise Roadmap
              </Button>
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
  // TODO: Replace this with real user ID from auth/session
  const { id } = React.use(params);
  const [days, setDays] = useState<
    {
      dayIndex: number;
      dueDate: string;
      tasks: {
        id: string;
        title: string;
        status: string;
        description: string;
        category: string;
        completed?: boolean;
      }[];
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Build Log Modal State
  const [buildLog, setBuildLog] = useState<{
    summary: string;
    tweet: string;
  } | null>(null);
  const [buildLogLoading, setBuildLogLoading] = useState(false);
  const [buildLogError, setBuildLogError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/products/${id}/daily_task`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setDays(data.days);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading tasks...</div>;

  // Local handler for marking a task as complete (UI only)
  async function onTaskComplete(dayIdx: number, taskIdx: number) {
    console.log(dayIdx, taskIdx, "onTaskComplete", id);
    // Get the task object using dayIdx and taskIdx from your state/data structure
    const task = days[dayIdx].tasks[taskIdx];
    // if (!task || task.completed) return;

    // Replace these with actual values from your app's context/state // e.g. from session or props
    const projectId = id; // e.g. from route or props

    try {
      const res = await fetch(`/api/products/${projectId}/task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId,
          completedTasks: [task.id], // single task completion
          notes: "", // or any notes you want to send
        }),
      });

      const data = await res.json();
      if (data.success) {
        // Update your local state/UI to mark the task as completed
        setDays((prevDays) => {
          const newDays = [...prevDays];
          newDays[dayIdx].tasks[taskIdx].completed = true;
          return newDays;
        });
      } else {
        alert("Failed to complete task: " + data.error);
      }
    } catch (err) {
      alert("Error completing task: " + err);
    }
  }

  return (
    <div className="">
      <RoadmapDisplay
        id={id}
        userId={id}
        days={days}
        // @ts-expect-error unknown type
        onTaskComplete={onTaskComplete}
        onShowBuildLog={async (dayIndex: number) => {
          setBuildLogLoading(true);
          setBuildLogError(null);
          try {
            const res = await fetch(`/api/products/${id}/build-log`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ dayIndex, projectId: id }),
            });
            const data = await res.json();
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
