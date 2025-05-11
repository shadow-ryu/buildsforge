"use client";
import React, { useEffect, useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  return (
    <div className=" mx-auto py-8 px-2 md:px-0">
      <div className="flex items-center justify-start gap-2 text-center">
        <Link href={`/dashboard/products/${id}`}>
          <Button variant="ghost" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold text-[#F4F4F5]"> Roadmap</h2>
      </div>
      <div className="space-y-6">
        {days.map((day, dayIdx) => (
          <Card
            key={day.dayIndex}
            className="bg-[#181A20] border-0 rounded-2xl shadow-sm"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#F4F4F5] flex items-center justify-between">
                <span>
                  Day {day.dayIndex}{" "}
                  <span className="text-sm text-[#A1A1AA] ml-2">
                    ({new Date(day.dueDate).toDateString()})
                  </span>
                </span>
                <Badge
                  variant="outline"
                  className="text-xs text-[#A1F59F] border-[#A1F59F]"
                >
                  Focus
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 mt-2">
                {day.tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col gap-1 p-3 rounded-lg bg-[#23262F] border border-[#2A2D36]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[#F4F4F5] font-medium text-sm flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#A1F59F]" />{" "}
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className="text-xs bg-[#181A20] text-[#A1A1AA] border-[#2A2D36]">
                          {task.category}
                        </Badge>
                        <button
                          className={`ml-2 px-3 py-1 rounded bg-[#A1F59F] text-[#181A20] font-semibold text-xs hover:bg-[#8be58c] transition ${
                            task.status === "completed"
                              ? "opacity-60 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={task.status === "completed"}
                          onClick={() => onTaskComplete(dayIdx, task?.id)}
                        >
                          {task.status === "completed"
                            ? "Completed"
                            : "Complete"}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-[#A1A1AA] mt-1 ml-6">
                      {task.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 rounded bg-[#23262F] border border-[#FBBF24] text-[#FBBF24] font-semibold text-sm hover:bg-[#FBBF24]/10 transition"
                  onClick={() => onShowBuildLog(day.dayIndex)}
                >
                  Build Log
                </button>
              </div>
            </CardContent>
          </Card>
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
    // Get the task object using dayIdx and taskIdx from your state/data structure
    const task = days[dayIdx].tasks[taskIdx];
    if (!task || task.completed) return;

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
