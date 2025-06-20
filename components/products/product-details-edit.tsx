"use client";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
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

import { Product } from "@prisma/client";

export function EditProductDetails({
  product,
  onSave,
}: {
  product: Product;
  onSave: (data: Partial<Product>) => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    description: product.description || "",
    problemStatement: product.problemStatement || "",
    targetAudience: product.targetAudience || "",
    userGoals: product.userGoals || "",
    techStack: product.techStack || "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const updateProduct = async (form: Partial<Product>) => {
    const res = await axios.patch(`/api/products/${product.id}`, form);
    const result = res.data;
    if (!result.success) {
      throw new Error(result.error || "Failed to update product.");
    }
    return result.product;
  };

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      onSave(updatedProduct);
      setOpen(false);
    },
    onError: (error: Error) => {
      alert(error.message || "Failed to update product.");
    },
  });

  function handleSave() {
    mutation.mutate(form);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-md  w-fit">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#181A20]">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Project Info</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description..."
            className="text-white"
          />
          <Textarea
            name="problemStatement"
            value={form.problemStatement}
            onChange={handleChange}
            placeholder="Problem Statement..."
            className="text-white"
          />
          <Textarea
            name="targetAudience"
            value={form.targetAudience}
            onChange={handleChange}
            placeholder="Target Audience..."
            className="text-white"
          />
          <Textarea
            name="userGoals"
            value={form.userGoals}
            onChange={handleChange}
            placeholder="User Goals (comma-separated)..."
            className="text-white"
          />
          <Input
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            placeholder="Tech Stack (comma-separated)..."
            className="text-white"
          />
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
