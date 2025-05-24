"use client";

import * as React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Feature, Task } from "@prisma/client";
import { cn } from "@/lib/utils";

export default function DayTaskCreateForm({
  productId,
}: {
  productId: string;
}) {
  const [selectedFeature, setSelectedFeature] = React.useState<string>("");
  const [selectedTask, setSelectedTask] = React.useState<string>("");

  const [form, setForm] = React.useState({
    dayIndex: "",
    dueDate: "",
    description: "",
    category: "",
    milestoneGoal: "",
    estimatedHours: 1,
    parentTaskId: "",
    shipCheck: "",
  });

  const [newFeatureName, setNewFeatureName] = React.useState("");
  const [newTaskTitle, setNewTaskTitle] = React.useState("");

  const queryClient = useQueryClient();

  const { data: features, isLoading } = useQuery({
    queryKey: ["features-tasks", productId],
    queryFn: async () => {
      const res = await axios.get(
        `/api/products/${productId}/features-with-tasks`
      );
      return res.data.features;
    },
  });

  const selectedFeatureObj = features?.find(
    (f: Feature) => f.id === selectedFeature
  );
  const tasks = selectedFeatureObj?.tasks || [];

  const createFeatureMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `/api/products/${productId}/features/create`,
        {
          name: newFeatureName,
          description: "",
          rank: 0,
        }
      );
      return res.data.feature;
    },
    onSuccess: (feature) => {
      setSelectedFeature(feature.id);
      queryClient.invalidateQueries({
        queryKey: ["features-tasks", productId],
      });
    },
  });

  const createTaskMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(`/api/products/tasks/create`, {
        title: newTaskTitle,
        featureId: selectedFeature,
        estimatedHours: 1,
        selectedTask: selectedTask,
        productId,
      });
      return res.data.task;
    },
    onSuccess: (task) => {
      setSelectedTask(task.id);
      queryClient.invalidateQueries({
        queryKey: ["features-tasks", productId],
      });
    },
  });

  const createDayTaskMutation = useMutation({
    mutationFn: async () => {
      return axios.post("/api/products/daytask/create", {
        taskId: selectedTask,
        ...form,
        dayIndex: Number(form.dayIndex),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roadmap", productId] });
      alert("DayTask created!");
    },
  });

  return (
    <Dialog>
      <DialogTrigger>
        <div className={cn(buttonVariants({ variant: "secondary" }))}>
          Add Day Task
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#181A20] overflow-y-auto h-[60vh] text-white max-w-lg space-y-4">
        <DialogHeader>
          <DialogTitle className="text-xl">Create Day Task</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <p>Loading features...</p>
        ) : (
          <>
            {/* Feature Dropdown */}
            <div className="space-y-2">
              <Label>Select Feature</Label>
              <Select
                onValueChange={(val) => setSelectedFeature(val)}
                value={selectedFeature}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Feature" />
                </SelectTrigger>
                <SelectContent>
                  {features?.map((feature: Feature) => (
                    <SelectItem key={feature.id} value={feature.id}>
                      {feature.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2 mt-1">
                <Input
                  placeholder="New feature name"
                  value={newFeatureName}
                  onChange={(e) => setNewFeatureName(e.target.value)}
                />
                <Button
                  size="sm"
                  onClick={() => createFeatureMutation.mutate()}
                  disabled={!newFeatureName}
                >
                  Add Feature
                </Button>
              </div>
            </div>

            {/* Task Dropdown */}
            {selectedFeature && (
              <div className="space-y-2">
                <Label>Select Task</Label>
                <Select
                  onValueChange={(val) => setSelectedTask(val)}
                  value={selectedTask}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Task" />
                  </SelectTrigger>
                  <SelectContent>
                    {tasks.map((task: Task) => (
                      <SelectItem key={task.id} value={task.id}>
                        {task.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2 mt-1">
                  <Input
                    placeholder="New task title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                  />
                  <Button
                    size="sm"
                    onClick={() => createTaskMutation.mutate()}
                    disabled={!newTaskTitle || !selectedFeature}
                  >
                    Add Task
                  </Button>
                </div>
              </div>
            )}

            {/* DayTask Fields */}
            <div className="space-y-2">
              <Label>Day Index</Label>
              <Input
                type="number"
                placeholder="Day number (e.g., 1)"
                value={form.dayIndex}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dayIndex: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Due Date</Label>
              <Input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dueDate: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="What will you do this day?"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Milestone Goal</Label>
              <Input
                placeholder="Milestone you're targeting"
                value={form.milestoneGoal}
                onChange={(e) =>
                  setForm((f) => ({ ...f, milestoneGoal: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Ship Check</Label>
              <Input
                placeholder="What proves real progress?"
                value={form.shipCheck}
                onChange={(e) =>
                  setForm((f) => ({ ...f, shipCheck: e.target.value }))
                }
              />
            </div>

            <Button
              className="bg-purple-600 hover:bg-purple-700 w-full mt-4"
              onClick={() => createDayTaskMutation.mutate()}
              //   disabled={!selectedTask || !form.dayIndex || !form.dueDate}
            >
              Create Day Task
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
