"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

function ManualMvpForm({ productId }: { productId: string }) {
  const [summary, setSummary] = useState("");
  const [features, setFeatures] = useState([
    { name: "", description: "", tasks: [""], expanded: true },
  ]);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleFeatureChange = (
    i: number,
    field: "name" | "description",
    value: string
  ) => {
    const updated = [...features];
    updated[i][field] = value;
    setFeatures(updated);
  };

  const handleTaskChange = (fi: number, ti: number, value: string) => {
    const updated = [...features];
    updated[fi].tasks[ti] = value;
    setFeatures(updated);
  };

  const addTask = (fi: number) => {
    const updated = [...features];
    updated[fi].tasks.push("");
    setFeatures(updated);
  };

  const removeTask = (fi: number, ti: number) => {
    const updated = [...features];
    updated[fi].tasks = updated[fi].tasks.filter((_, idx) => idx !== ti);
    setFeatures(updated);
  };

  const toggleExpand = (index: number) => {
    setFeatures((prev) =>
      prev.map((f, i) => ({
        ...f,
        expanded: i === index ? !f.expanded : false,
      }))
    );
  };

  const addFeature = () => {
    const collapsed = features.map((f) => ({ ...f, expanded: false }));
    setFeatures([
      ...collapsed,
      { name: "", description: "", tasks: [""], expanded: true },
    ]);
  };

  const removeFeature = (i: number) => {
    setFeatures(features.filter((_, idx) => idx !== i));
  };

  const mutation = useMutation({
    mutationFn: async (payload: { summary: string; features: object[] }) => {
      const res = await axios.post(`/api/products/${productId}/manual/mvp`, {
        productId,
        mvp_summary: payload.summary,
        features: payload.features,
      });
      if (!res.data.success) throw new Error("Failed to save MVP");
      return res.data;
    },
    onSuccess: () => {
      toast.success("✅ Manual MVP created!");
      setOpen(false);
      setSummary("");
      setFeatures([{ name: "", description: "", tasks: [""], expanded: true }]);
      queryClient.invalidateQueries();
    },
    onError: (err: Error) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const onSubmit = () => {
    const cleaned = features
      .map((f) => ({
        name: f.name,
        description: f.description,
        tasks: f.tasks.filter((t) => t.trim() !== ""),
      }))
      .filter((f) => f.name.trim() !== "");
    mutation.mutate({ summary, features: cleaned });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "cursor-pointer",
            buttonVariants({ variant: "secondary" })
          )}
        >
          ➕ Manual MVP
        </div>
      </DialogTrigger>

      <DialogContent className="bg-[#0f0f11] text-white max-h-[85vh] overflow-y-scroll border border-purple-800">
        <DialogHeader>
          <DialogTitle className="text-purple-400 text-lg font-bold">
            Manual MVP
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* MVP Summary */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              🧠 MVP Summary
            </label>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="One-line summary of this MVP..."
              className="bg-[#181A20] border-[#2D2F3A] text-white"
            />
          </div>

          {/* Features */}
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#181A20] border border-[#2D2F3A] rounded-xl"
            >
              <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => toggleExpand(i)}
              >
                <div className="font-semibold text-white">
                  {f.name || `Feature ${i + 1}`}
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFeature(i);
                    }}
                  >
                    ❌
                  </Button>
                  {f.expanded ? (
                    <ChevronUp className="text-zinc-400 w-4 h-4" />
                  ) : (
                    <ChevronDown className="text-zinc-400 w-4 h-4" />
                  )}
                </div>
              </div>

              {f.expanded && (
                <div className="p-4 space-y-4">
                  <Input
                    placeholder="Feature Name"
                    value={f.name}
                    onChange={(e) =>
                      handleFeatureChange(i, "name", e.target.value)
                    }
                    className="bg-[#0f0f11] border-[#2D2F3A] text-white"
                  />
                  <Textarea
                    placeholder="Feature description..."
                    value={f.description}
                    onChange={(e) =>
                      handleFeatureChange(i, "description", e.target.value)
                    }
                    className="bg-[#0f0f11] border-[#2D2F3A] text-white"
                  />
                  {f.tasks.map((t, ti) => (
                    <div key={ti} className="flex gap-2 items-center">
                      <Input
                        placeholder={`Task ${ti + 1}`}
                        value={t}
                        onChange={(e) =>
                          handleTaskChange(i, ti, e.target.value)
                        }
                        className="bg-[#0f0f11] border-[#2D2F3A] text-white"
                      />
                      {f.tasks.length > 1 && (
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => removeTask(i, ti)}
                          className="text-red-400"
                        >
                          🗑️
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    className="text-sm text-black"
                    onClick={() => addTask(i)}
                  >
                    + Add Task
                  </Button>
                </div>
              )}
            </div>
          ))}

          <Button onClick={addFeature} variant="secondary" className="w-full">
            + Add Another Feature
          </Button>

          <Button
            onClick={onSubmit}
            className="bg-purple-600 hover:bg-purple-500 text-white w-full mt-4"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Saving..." : "Save MVP"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ManualMvpForm;
