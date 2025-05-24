import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash } from "lucide-react";

type Task = { title: string };
type Feature = {
  title: string;
  id: string;
  name: string;
  description: string;
  rank?: number;
  tasks: Task[];
};

export function EditFeatureModal({
  feature,
  productId,
}: {
  feature: Feature;
  productId: string;
}) {
    const [form, setForm] = useState<Feature & { rank: number }>({ ...feature, name: feature.name ?? feature.title ?? "", rank: feature.rank ?? 1, tasks: (feature.tasks || []).map(t => typeof t === 'string' ? { title: t } : t) });
    console.log(form.tasks,form,"feature")

  function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const { name, value, type } = e.target;
  setForm({
    ...form,
    [name]: type === "number" ? Number(value) : value,
  });
}

  function handleTaskChange(index: number, value: string) {
    const updatedTasks = [...form.tasks];
    updatedTasks[index] = { ...updatedTasks[index], title: value };
    setForm({ ...form, tasks: updatedTasks });
  }

  function handleAddTask() {
    setForm({ ...form, tasks: [...form.tasks, { title: "" }] });
  }

  function handleRemoveTask(index: number) {
    const updatedTasks = form.tasks.filter((_, i) => i !== index);
    setForm({ ...form, tasks: updatedTasks });
  }

  async function handleSave() {
  try {
    const response = await fetch(`/api/products/${productId}/feature_updates`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features: [{ ...form, rank: form.rank ?? 1 }], productId: productId }),
    });
    const data = await response.json();
    if (data.success) {
      // Optionally notify parent or update UI here
    } else {
      alert(data.error || "Failed to update feature.");
    }
  } catch (error) {
    alert("Error updating feature: " + error);
  }
}

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
        >
          <Pencil size={16} /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#181A20] text-[#F4F4F5]">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Feature</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Feature name"
            className="text-white"
          />
          <Input
            name="rank"
            type="number"
            min={1}
            value={form.rank}
            onChange={handleChange}
            placeholder="Rank"
            className="text-white"
          />
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Feature description"
            className="text-white"
          />
          <div className="space-y-2">
            {form.tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  value={task.title||""}
                  onChange={(e) => handleTaskChange(i, e.target.value)}
                  placeholder={`Task ${i + 1}`}
                  className="text-white"
                />
                <Button
                  variant="ghost"
                  className="text-red-500 hover:bg-red-500/10"
                  onClick={() => handleRemoveTask(i)}
                >
                  <Trash size={16} />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="ghost"
              className="text-green-500 hover:bg-green-500/10 mt-2"
              onClick={handleAddTask}
            >
              <PlusCircle size={16} className="mr-1" /> Add Task
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="bg-[#2563eb] text-white">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
