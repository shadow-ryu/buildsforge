"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const productSchema = z.object({
  app_name: z.string().min(1, "Product name is required"),
  problem_statement: z.string().min(1, "Description is required"),
  target_audience: z.string().optional(),
  user_goals: z.string().min(1, "User goals are required"),
  unique_value_proposition: z.string().optional(),
  inspiration_apps: z
    .array(z.string())
    .min(1, "At least one inspiration app required"),
  tech_stack: z.string().optional(),
  initial_features: z.array(z.string()).min(1, "At least one feature required"),
  launchDeadline: z.date().optional(), // keep for internal use if needed
  dailyTimeCommitment: z.number().min(15, "Minimum 15 minutes").optional(), // keep for internal use if needed
});

export default function ProductForm() {
  const router = useRouter();
  const [features, setFeatures] = useState<string[]>([]);
  const [inspirationApps, setInspirationApps] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [newInspirationApp, setNewInspirationApp] = useState("");

  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      app_name: "",
      problem_statement: "",
      target_audience: "",
      user_goals: "",
      unique_value_proposition: "",
      inspiration_apps: [],
      tech_stack: "",
      initial_features: [],
    },
  });

  const projectMutation = useMutation({
    mutationFn: async (data) => axios.post("/api/products/create", data),
    onSuccess: (result) => {
      toast.success("Product created!");
      router.push(`/dashboard/products/${result.data.productId}`);
    },
    onError: () => toast.error("Something went wrong!"),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const values = form.getValues();
    const payload = {
      ...values,
      initial_features: features,
      inspiration_apps: inspirationApps,
    };
    // @ts-expect-error rfce
    projectMutation.mutate(payload);
  };

  return (
    <main className="min-h-screen w-full bg-[#0f0f11] px-4 py-10 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-[#1c1c21] border border-purple-900">
          <CardHeader className="pb-4 border-b border-purple-800 flex items-center justify-start gap-2">
            <Link href="/dashboard/products">
              <Button
                variant="ghost"
                className=" hover:bg-purple-700 text-white"
              >
                <ArrowLeft className=" h-4 w-4" />
              </Button>
            </Link>
            <CardTitle className="text-2xl text-white">
              Create a New Project
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 space-y-6">
            <form
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Prevent Enter key from submitting the form
                  e.preventDefault();
                }
              }}
              className="space-y-6"
            >
              <Field label="Product Name">
                <Input
                  {...form.register("app_name")}
                  className="text-white"
                  placeholder="My Awesome App"
                />
              </Field>

              <Field label="Problem Statement">
                <Textarea
                  {...form.register("problem_statement")}
                  className="text-white"
                  placeholder="Describe the core problem your product solves"
                />
              </Field>

              <Field label="Target Audience (optional)">
                <Input
                  {...form.register("target_audience")}
                  className="text-white"
                  placeholder="Who is this for?"
                />
              </Field>

              <Field label="User Goals (optional)">
                <Textarea
                  className="text-white"
                  {...form.register("user_goals")}
                  placeholder="What are the main things your users want to accomplish?"
                />
              </Field>

              <Field label="Unique Value Proposition (optional)">
                <Textarea
                  className="text-white"

                  {...form.register("unique_value_proposition")}
                  placeholder="What makes your product unique?"
                />
              </Field>

              <TagInput
                label="Inspiration Apps"
                placeholder="e.g. Notion, Gusto"
                
                tags={inspirationApps}
                setTags={setInspirationApps}
                inputValue={newInspirationApp}
                setInputValue={setNewInspirationApp}
              />

              <Field label="Tech Stack (optional)">
                <Input
                  {...form.register("tech_stack")}
                  className="text-white"

                  placeholder="e.g. Next.js, Supabase, GPT-4"
                />
              </Field>

              <TagInput
                label="Core Features"
                placeholder="e.g. AI policy editor"
                tags={features}
                setTags={setFeatures}
                inputValue={newFeature}
                setInputValue={setNewFeature}
              />

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={projectMutation.isPending}
              >
                {projectMutation.isPending ? "Creating..." : "Create Product"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-purple-300">{label}</label>
      {children}
    </div>
  );
}

function TagInput({
  label,
  tags,
  setTags,
  inputValue,
  setInputValue,
  placeholder,
}: {
  label: string;
  tags: string[];
  setTags: (t: string[]) => void;
  inputValue: string;
  setInputValue: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-purple-300">{label}</label>
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}

          className="flex-1 text-white"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            if (inputValue.trim()) {
              setTags([...tags, inputValue.trim()]);
              setInputValue("");
            }
          }}
          className="border-purple-700"
        >
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-purple-800 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            {tag}
            <button
              onClick={() => setTags(tags.filter((_, i) => i !== idx))}
              className="text-white text-sm hover:text-red-300"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
