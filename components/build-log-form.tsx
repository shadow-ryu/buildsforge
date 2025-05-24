/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Task {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  completed?: boolean;
}

interface BuildLogFormProps {
  projectId: string;
}

export default function BuildLogForm({ projectId }: BuildLogFormProps) {
  const [notes, setNotes] = useState("");
  const [dayIndex, setDayIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const { data: completedTasks = [], isLoading: tasksLoading } = useQuery<
    Task[]
  >({
    queryKey: ["completedTasks", projectId],
    queryFn: async () => {
      const res = await axios.get(`/api/products/${projectId}/tasks_completed`);
      if (!res.data.success)
        throw new Error(res.data.error || "Failed to fetch completed tasks");
      return res.data.tasks || [];
    },
  });

  const { data: searchResults = [], isLoading: searchLoading } = useQuery<
    Task[]
  >({
    queryKey: ["searchTasks", projectId, search],
    enabled: search.length > 2 ,
    queryFn: async () => {
      const res = await axios.get(
        `/api/products/${projectId}/daily_task/search?query=${search}`
      );
      if (!res.data.success) throw new Error(res.data.error || "Search failed");
      return res.data.dayTasks || [];
    },
  });

  const buildLogMutation = useMutation({
    mutationFn: async (notes: string) => {
      console.log(
        "Selected task IDs:",
        selectedTasks,
        completedTasks,
        dayIndex,
        projectId
      );
      const res = await axios.post(`/api/products/generate/build-log`, {
        projectId,
        dayIndex,
        notes,
        selectedTaskIds: [
          ...selectedTasks,
          ...completedTasks.map((task) => task.id),
        ],
      });
      if (!res.data.success)
        throw new Error(res.data.error || "Failed to generate build log");
      return res.data.buildLog;
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["buildLogs", projectId] });
      // setNotes("");
      // setSelectedTasks([]);
    },
  });

  const canSubmit =
    completedTasks.length > 0 ||
    (selectedTasks.length > 0 && notes.trim().length >= 50);

  return (
    <div className="bg-[#181A20] border border-[#333] p-4 rounded-lg mt-6 space-y-4">
      <div>
        <label className="text-sm text-white font-medium block">
          Build log Day
        </label>
        <Input
          value={dayIndex}
          type="number"
          onChange={(e) => setDayIndex(Number(e.target.value))}
          placeholder="Day Index"
          className="text-white bg-[#121316] border border-[#2A2D36]"
        />
      </div>
      <div>
        {tasksLoading && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="w-5 h-5 text-purple-500 animate-spin" />
            <span className="ml-2 text-sm text-gray-400">Loading tasks...</span>
          </div>
        )}
        <ScrollArea className="max-h-40 h-12">
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {completedTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-start gap-2 bg-[#121316] p-2 rounded-md border border-[#2A2D36]"
              >
                <CheckCircle className="text-purple-500 w-4 h-4 mt-1" />
                <div>
                  <p className="text-sm text-white font-medium">{task.title}</p>
                  <p className="text-xs text-gray-400">{task.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search missed tasks..."
              className="bg-[#121316] border border-[#2A2D36] text-white"
            />
          </div>
          {searchLoading ? (
            <div className="text-sm text-gray-500 py-2">Searching...</div>
          ) : (
            <ScrollArea className="h-40">
              <ul className="max-h-48 overflow-y-auto space-y-2">
                {searchResults.map((task) => (
                  <li
                    key={task.id}
                    className={`p-2 rounded-md border flex justify-between items-start text-sm bg-[#121316] border-[#2A2D36] cursor-pointer ${
                      selectedTasks.includes(task.id)
                        ? "border-purple-500"
                        : "hover:border-purple-700"
                    }`}
                    onClick={() => {
                      setSelectedTasks((prev) =>
                        prev.includes(task.id)
                          ? prev.filter((id) => id !== task.id)
                          : [...prev, task.id]
                      );
                    }}
                  >
                    <div>
                      <p className="text-white font-medium">
                        {task.task?.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {task.description}
                      </p>
                      <Badge className="text-xs bg-purple-900 border border-purple-700 text-purple-400 mt-1">
                        {task.category}
                      </Badge>
                    </div>
                    {selectedTasks.includes(task.id) && (
                      <CheckCircle className="text-purple-500 w-4 h-4" />
                    )}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm text-white font-medium block">
          Add Notes
        </label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What did you build today? Any blockers or insights?"
          className="text-white bg-[#121316] border border-[#2A2D36]"
        />
        {completedTasks.length === 0 && notes.length < 50 && (
          <p className="text-xs text-red-500 mt-1">
            Please write road blocks or insights at least 50 characters to
            submit.
          </p>
        )}
      </div>

      <Button
        className="bg-purple-600 hover:bg-purple-700 text-white w-full"
        disabled={buildLogMutation.isPending || !canSubmit}
        onClick={() => buildLogMutation.mutate(notes)}
      >
        {buildLogMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
          </>
        ) : (
          "Generate Build Log"
        )}
      </Button>
    </div>
  );
}
