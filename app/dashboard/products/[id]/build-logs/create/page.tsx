"use client";

import MarkdownEditor from "@/components/build-logs/manual-build-logs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Search } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  completed?: boolean;
}
export default function ManualBuildLogs({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const queryClient = useQueryClient();
  const { id: projectId } = React.use(params);
  const [buildLog, setBuildLog] = useState("");
  const [dayIndex, setDayIndex] = useState(null);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  const { data: searchResults = [], isLoading: searchLoading } = useQuery<
    Task[]
  >({
    queryKey: ["searchTasks", projectId, search],
    enabled: search.length > 2,
    queryFn: async () => {
      const res = await axios.get(
        `/api/products/${projectId}/daily_task/search?query=${search}`
      );
      if (!res.data.success) throw new Error(res.data.error || "Search failed");
      return res.data.dayTasks || [];
    },
  });

  const { mutate: saveBuildLog, isPending } = useMutation({
    mutationFn: async (buildLogData: {
      projectId: string;
      dayIndex: number | null;
      content: string;
      selectedTasks: string[];
    }) => {
      const response = await axios.post(
        `/api/products/${buildLogData.projectId}/manual/build-log`,
        buildLogData
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Build log saved successfully");
      queryClient.invalidateQueries({ queryKey: ["buildLogs"] });
      // Optionally reset form
      setBuildLog("");
      setSelectedTasks([]);
      setDayIndex(null);
      router.push(`/api/products/${projectId}/manual/build-log`);
    },
    onError: (error: Error) => {
      console.error("Error saving build log:", error);
      toast("Failed to save build log");
    },
  });

  const handleSave = () => {
    if (!dayIndex && dayIndex !== 0) {
      toast.error("Please enter a day index");
      return;
    }

    saveBuildLog({
      projectId,
      dayIndex,
      content: buildLog,
      selectedTasks: selectedTasks.map((task) => task.id),
    });
  };

  return (
    <div className=" w-5xl my-auto  text-white bg-[#0f0f11] flex flex-col gap-4 p-6">
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Create Build Log</h1>
        <p className="text-gray-400 mb-4">
          Write your build log here and save it.
        </p>
      </div>
      <div className="">
        <Label className="text-sm font-medium mb-2">Build Log</Label>
      </div>

      <div>
        <Input
          value={dayIndex || ""}
          //   @ts-expect-error ts(2345)
          onChange={(e) => setDayIndex(Number(e.target.value))}
          type="number"
          className="w-full"
        />
      </div>

      <div className="space-y-2 border border-[#2A2D36] p-4 rounded-lg">
        <Label className="text-sm font-medium mb-2">Selected Tasks</Label>

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
          <div className="text-sm text-gray-500 py-2 h-40">Searching...</div>
        ) : (
          <ScrollArea className="h-40">
            <ul className="max-h-48 overflow-y-auto space-y-2">
              {searchResults.map((task) => (
                <li
                  key={task.id}
                  className={`p-2 rounded-md border flex justify-between items-start text-sm bg-[#121316] border-[#2A2D36] cursor-pointer ${
                    selectedTasks.includes(task)
                      ? "border-purple-500"
                      : "hover:border-purple-700"
                  }`}
                  onClick={() => {
                    setSelectedTasks((prev) =>
                      prev.find((t) => t.id === task.id)
                        ? prev.filter((t) => t.id !== task.id)
                        : [...prev, task]
                    );
                  }}
                >
                  <div>
                    <p className="text-white font-medium">{task?.title}</p>
                    <p className="text-xs text-gray-400">{task.description}</p>
                    <Badge className="text-xs bg-purple-900 border border-purple-700 text-purple-400 mt-1">
                      {task.category}
                    </Badge>
                  </div>
                  {selectedTasks.find((t) => t.id === task.id) && (
                    <CheckCircle className="text-purple-500 w-4 h-4" />
                  )}
                </li>
              ))}
            </ul>
          </ScrollArea>
        )}
        {selectedTasks.length > 0 && (
          <div className="text-sm text-gray-400 py-2">
            Selected Tasks:
            {selectedTasks.map((task) => (
              <div key={task.id} className="flex items-center gap-2">
                <p className="text-white font-medium">{task?.title}</p>
                <p className="text-xs text-gray-400">{task.description}</p>
                <Badge className="text-xs bg-purple-900 border border-purple-700 text-purple-400 mt-1">
                  {task.category}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>
      <MarkdownEditor
        content={buildLog}
        onChange={setBuildLog}
        className="w-full "
      />
      <div className="flex justify-end">
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white mt-4"
          onClick={handleSave}
        >
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
}
