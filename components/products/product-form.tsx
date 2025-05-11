"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { generateRoadmap, RoadmapTask } from "@/lib/roadmap-generator";

const productSchema = z.object({
  app_name: z.string().min(1, "Product name is required"),
  problem_statement: z.string().min(1, "Description is required"),
  target_audience: z.string().min(1, "Target audience is required"),
  user_goals: z.string().min(1, "User goals are required"),
  unique_value_proposition: z
    .string()
    .min(1, "Unique value proposition is required"),
  inspiration_apps: z
    .array(z.string())
    .min(1, "At least one inspiration app required"),
  tech_stack: z.string().min(1, "Tech stack is required"),
  initial_features: z.array(z.string()).min(1, "At least one feature required"),
  launchDeadline: z.date().optional(), // keep for internal use if needed
  dailyTimeCommitment: z.number().min(15, "Minimum 15 minutes").optional(), // keep for internal use if needed
});

export default function ProductForm() {
  // State for multi-input fields
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [inspirationApps, setInspirationApps] = useState<string[]>([]);
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
      launchDeadline: undefined,
      dailyTimeCommitment: undefined,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Gather all values
    const values = form.getValues();
    const data = {
      app_name: values.app_name,
      problem_statement: values.problem_statement,
      target_audience: values.target_audience,
      user_goals: values.user_goals,
      unique_value_proposition: values.unique_value_proposition,
      inspiration_apps: inspirationApps,
      tech_stack: values.tech_stack,
      initial_features: features,
      // Optionally add launchDeadline and dailyTimeCommitment if needed
    };
    console.log("SaaSInput data:", data);


    const response = await fetch("/api/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Result from /api/products/create:", result);
    if (result.success) {
      console.log("MVP generated successfully!");
    } else {
      console.error("Failed to generate MVP:", result.error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#181A20] px-2 py-6">
      <Card className="w-full max-w-full  bg-[#181A20] text-white shadow-xl border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl md:text-2xl lg:text-3xl">
            Start Your Product Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Test Data Loader Button */}
            <div className="w-full flex justify-end">
              <Button
                type="button"
                variant="outline"
                className="mb-2 text-black border-blue-600 hover:bg-blue-100"
                onClick={() => {
                  // Example test data
                  const testData = {
                    app_name: "BuildsForge",
                    problem_statement:
                      "Solo founders struggle to stay accountable and track their daily progress when building products alone.",
                    target_audience:
                      "Indie hackers and solo startup founders working on side projects or MVPs.",
                    user_goals:
                      "Track progress, generate build logs, stay accountable, and maintain consistency.",
                    unique_value_proposition:
                      "Combines AI task generation with habit tracking and visual progress for product builders.",
                    initial_features: [
                      "Daily task log",
                      "AI-generated MVP roadmap",
                      "Streak tracker",
                      "Project dashboard",
                    ],
                    inspiration_apps: [
                      "WIP.co",
                      "Trello",
                      "Product Hunt",
                      "BuildStreak",
                    ],
                    tech_stack: "Next.js, Supabase, OpenAI API,Gemini",
                  };
                  form.setValue("app_name", testData.app_name);
                  form.setValue(
                    "problem_statement",
                    testData.problem_statement
                  );
                  form.setValue("target_audience", testData.target_audience);
                  form.setValue("user_goals", testData.user_goals);
                  form.setValue(
                    "unique_value_proposition",
                    testData.unique_value_proposition
                  );
                  form.setValue("tech_stack", testData.tech_stack);
                  // Set state for multi-inputs
                  setInspirationApps(testData.inspiration_apps);
                  setFeatures(testData.initial_features);
                }}
              >
                Load Test Data
              </Button>
            </div>
            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">Product Name</label>
              <Input
                {...form.register("app_name")}
                placeholder="My Awesome Product"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">
                Description / Problem Statement
              </label>
              <Textarea
                {...form.register("problem_statement")}
                placeholder="What problem does your product solve?"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">Target Audience</label>
              <Input
                {...form.register("target_audience")}
                placeholder="Who is this product for?"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">User Goals</label>
              <Textarea
                {...form.register("user_goals")}
                placeholder="What are the main goals users want to achieve?"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">
                Unique Value Proposition
              </label>
              <Textarea
                {...form.register("unique_value_proposition")}
                placeholder="What sets your product apart?"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">Inspiration Apps</label>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  value={newInspirationApp}
                  onChange={(e) => setNewInspirationApp(e.target.value)}
                  placeholder="Add an inspiration app"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => {
                    if (newInspirationApp) {
                      setInspirationApps([
                        ...inspirationApps,
                        newInspirationApp,
                      ]);
                      setNewInspirationApp("");
                    }
                  }}
                  className="w-full sm:w-auto text-black"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 w-full">
                {inspirationApps.map((app, index) => (
                  <div
                    key={index}
                    className="bg-secondary px-3 py-1 text-black rounded-full text-sm flex items-center gap-2"
                  >
                    {app}
                    <button
                      type="button"
                      onClick={() =>
                        setInspirationApps(
                          inspirationApps.filter((_, i) => i !== index)
                        )
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">Tech Stack</label>
              <Input
                {...form.register("tech_stack")}
                placeholder="e.g. Next.js, Supabase, OpenAI API"
                className="w-full"
              />
            </div>

            <div className="space-y-2 flex flex-col items-start gap-2 w-full">
              <label className="text-sm md:text-base">Core Features</label>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a feature"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => {
                    if (newFeature) {
                      setFeatures([...features, newFeature]);
                      setNewFeature("");
                    }
                  }}
                  className="w-full sm:w-auto text-black"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-secondary px-3 py-1 text-black rounded-full text-sm flex items-center gap-2"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() =>
                        setFeatures(features.filter((_, i) => i !== index))
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Optionally keep launchDeadline and dailyTimeCommitment inputs for internal use */}
            {/*
  <div className="space-y-2 flex flex-col items-start gap-2 text-black">
    <label className="text-white">Launch Deadline</label>
    <DatePicker
      selected={form.watch("launchDeadline")}
      onSelect={(date) => form.setValue("launchDeadline", date)}
    />
  </div>

  <div className="space-y-2 flex flex-col items-start gap-2">
    <label>Daily Time Commitment (minutes)</label>
    <Input
      type="number"
      {...form.register("dailyTimeCommitment", {
        valueAsNumber: true,
      })}
      min={15}
    />
  </div>
  */}

            <div className="w-[200]">
              <Button
                className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold text-base hover:bg-blue-700 flex items-center gap-2 mb-4 w-full"
                type="submit"
              >
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
