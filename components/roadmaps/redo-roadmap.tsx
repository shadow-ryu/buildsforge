"use client";
import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { DayTask } from "@prisma/client";

// Task type for each roadmap item
export interface Task {
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

// Day type for grouping tasks
export interface Day {
  dayIndex: number;
  dueDate: string;
  tasks: Task[];
}

// Used for backend update, must match DayTask shape

interface ReorderRoadmapProps {
  initialDays: Day[];
  onSave: (tasks: Partial<DayTask>[]) => void;
}

export default function ReorderRoadmap({
  initialDays,
  onSave,
}: ReorderRoadmapProps) {
  const [days, setDays] = React.useState<Day[]>(initialDays);
  const [activeTask, setActiveTask] = React.useState<Task | null>(null);
  const [hasChanges, setHasChanges] = React.useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const findTaskDay = (taskId: string) =>
    days.find((d) => d.tasks.some((t) => t.id === taskId));

  const onDragStart = (event: DragStartEvent) => {
    const taskId = event.active.id.toString();
    const day = findTaskDay(taskId);
    const task = day?.tasks.find((t) => t.id === taskId);
    if (task?.status === "complete") {
      setActiveTask(null); // do not allow dragging completed tasks
      return;
    }
    setActiveTask(task || null);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over || active.id === over.id) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeDay = findTaskDay(activeId);
    let overDay: Day | undefined;

    if (overId.startsWith("empty-day-")) {
      const dayIndex = parseInt(overId.replace("empty-day-", ""), 10);
      overDay = days.find((d) => d.dayIndex === dayIndex);
    } else {
      overDay = findTaskDay(overId);
    }

    if (!activeDay || !overDay) return;

    const activeTask = activeDay.tasks.find((t) => t.id === activeId);
    if (!activeTask || activeTask.status === "complete") return;

    // Remove the task from the original day
    const updatedSourceTasks = activeDay.tasks.filter((t) => t.id !== activeId);

    // Create a new task object with updated dayIndex and dueDate
    const updatedTask: Task = {
      ...activeTask,
      dayIndex: overDay.dayIndex,
      dueDate: overDay.dueDate,
    };

    let updatedTargetTasks: Task[];

    if (overId.startsWith("empty-day-")) {
      updatedTargetTasks = [updatedTask];
    } else {
      const targetIdx = overDay.tasks.findIndex((t) => t.id === overId);
      updatedTargetTasks = [...overDay.tasks];
      updatedTargetTasks.splice(targetIdx, 0, updatedTask);
    }

    // Reconstruct the days array with updated task lists
    const updatedDays = days.map((day) => {
      if (day.dayIndex === activeDay.dayIndex) {
        return { ...day, tasks: updatedSourceTasks };
      }
      if (day.dayIndex === overDay.dayIndex) {
        return { ...day, tasks: updatedTargetTasks };
      }
      return day;
    });

    setDays(updatedDays);
    setHasChanges(true);
  };

  // --- EmptyDropZone component ---
  function EmptyDropZone({ dayIndex }: { dayIndex: number }) {
    // Make the empty drop zone a sortable item so DnD-kit recognizes it
    const { setNodeRef, attributes, listeners, isOver } = useSortable({
      id: `empty-day-${dayIndex}`,
    });

    return (
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        id={`empty-day-${dayIndex}`}
        className={`flex items-center justify-center h-12 md:h-42 border-2 border-dashed border-purple-700 rounded bg-[#23262F] text-purple-400 text-xs opacity-80 transition ${
          isOver ? "bg-purple-900/40 border-purple-400" : ""
        }`}
        style={{ minHeight: 48 }}
      >
        Drop task here
      </div>
    );
  }

  // Flatten all tasks for backend update (flat DayTask[])
  const saveReorder = () => {
    const payload = days.flatMap((day) =>
      day.tasks.map((task) => ({
        id: task.id,
        taskId: task.id, // Required by DayTask
        dayIndex: day.dayIndex,
        dueDate: new Date(day.dueDate), // Convert string to Date
        category: task.category || "general", // Provide default category
        status: task.status || "backlog", // Provide default status
        description: task.description || "", // Ensure description exists
        completedAt: task.completed ? new Date() : null,
        milestoneGoal: null, // These fields are required by DayTask
        shipCheck: null,
        buildLogId: null,
      }))
    );
    onSave(payload);
    setHasChanges(false);
  };

  return (
    <div className="p-6 bg-[#0f0f11]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Reorder Day Tasks</h2>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={saveReorder}
          disabled={!hasChanges}
        >
          Save Changes
        </Button>
      </div>

      <DndContext
        collisionDetection={closestCenter}
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {days.map((day) => (
            <SortableContext
              key={day.dayIndex}
              items={
                day.tasks.length > 0
                  ? day.tasks.map((task) => task.id)
                  : [`empty-day-${day.dayIndex}`]
              }
              strategy={verticalListSortingStrategy}
            >
              <div className="bg-[#181A20] border border-purple-900 rounded-xl p-4 min-h-[120px]">
                <h3 className="text-white font-semibold mb-3">
                  Day {day.dayIndex} – {new Date(day.dueDate).toDateString()}
                </h3>
                <div className="space-y-3 min-h-[40px]">
                  {day.tasks.length === 0 ? (
                    <EmptyDropZone dayIndex={day.dayIndex} />
                  ) : (
                    day.tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))
                  )}
                </div>
              </div>
            </SortableContext>
          ))}
        </div>

        <DragOverlay>
          {activeTask && <TaskCard task={activeTask} isOverlay />}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

function TaskCard({
  task,
  isOverlay = false,
}: {
  task: Task;
  isOverlay?: boolean;
}) {
  // Prevent dragging completed tasks
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, disabled: task.completed });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: task.status === "complete" ? 0.5 : 1,
    cursor: task.status === "complete" ? "not-allowed" : "grab",
    zIndex: isDragging ? 1000 : undefined,
  };

  return (
    <div
      ref={!isOverlay ? setNodeRef : undefined}
      {...(!isOverlay ? attributes : {})}
      {...(!isOverlay ? listeners : {})}
      style={style}
      className="bg-[#1f1f22] border border-[#2a2d36] rounded-xl p-3"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-2">
          <CheckCircle
            size={20}
            className={
              task.status === "complete" ? "text-purple-500" : "text-gray-500"
            }
          />
          <div>
            <p className="text-sm text-white font-medium">
              {task.title || task.description}
            </p>
            <p className="text-xs text-gray-400 mt-1">{task.description}</p>
            <Badge className="mt-2 bg-purple-900 text-purple-300 border border-purple-700 text-xs">
              {task.category}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
