"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

import { useEffect, useState } from "react";
import { EditProductDetails } from "@/components/products/product-details-edit";
import { EditFeatureModal } from "@/components/products/product-feature-task-edit";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Task = { id?: string; title: string };
type Feature = {
  id?: string;
  name: string;
  description: string;
  tasks: Task[];
};
type Product = {
  id: string;
  name: string;
  description: string;
  problemStatement: string;
  targetAudience: string;
  userGoals: string;
  uniqueValueProp?: string;
  techStack: string;
  inspirationApps?: string;
  initialFeatures?: string;
  deadline: string;
  dailyCommitmentHrs: number;
  features: Feature[];
};
async function generateRoadmap(productId: string, startDate: string) {
  const res = await fetch(`/api/products/${productId}/roadmap/schedule`, {
    method: "POST",
    body: JSON.stringify({ productId, startDate }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to generate roadmap");

  return data;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newDeadline, setNewDeadline] = useState<string | null>(null);
  const [newDailyCommitmentHrs, setNewDailyCommitmentHrs] = useState<
    number | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/products/${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!data.success)
          throw new Error(data.error || "Failed to fetch product");
        setProduct(data.product);
        setNewDeadline(data.product.deadline);
        setNewDailyCommitmentHrs(data.product.dailyCommitmentHrs);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-2 md:px-0 text-center text-[#A1A1AA]">
        Loading product...
      </div>
    );
  }
  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-2 md:px-0 text-center text-red-400">
        {error || "Product not found."}
      </div>
    );
  }

  // Adapt backend fields to UI fields
  const features =
    product.features?.map((f) => ({
      title: f.name,
      id: f.id,
      description: f.description,
      tasks: f.tasks,
    })) || [];

  const goalsArray = Array.isArray(product.userGoals)
    ? product.userGoals
    : typeof product.userGoals === "string"
    ? product.userGoals
        .split(",")
        .map((g: string) => g.trim())
        .filter(Boolean)
    : [];

  const techStackArray = Array.isArray(product.techStack)
    ? product.techStack
    : typeof product.techStack === "string"
    ? product.techStack
        .split(",")
        .map((t: string) => t.trim())
        .filter(Boolean)
    : [];

  const handleSubmit = async () => {
    try {
      await generateRoadmap(id, newDeadline || "");
      router.push(`/dashboard/products/${id}/roadmap`);
    } catch (err) {
      console.error("Error generating roadmap:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-2 md:px-0">
      {/* Product Overview */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] tracking-tight flex items-center gap-2">
            {product.name}
          </h1>
          <div className="flex flex-row gap-2 mt-2 md:mt-0">
            {/* <Button
              variant="secondary"
              className="bg-[#23262F] border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 font-semibold px-4 py-2 rounded-md"
              onClick={() => router.push(`/dashboard/products/${id}/roadmap`)}
            >
              View Roadmap
            </Button>
            <Button
              variant="secondary"
              className="bg-[#23262F] border border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24]/10 font-semibold px-4 py-2 rounded-md"
              onClick={() => alert("Build Logs (coming soon)")}
            >
              Build Logs
            </Button> */}
          </div>
        </div>
        <p className="text-lg text-[#A1A1AA] mb-2">{product.description}</p>
      </div>
      {/* Project Info */}
      <Card className="mb-8 rounded-2xl shadow-sm bg-[#23262F] border-0">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg text-[#F4F4F5]">
              Project Info
            </CardTitle>
          </div>
          <EditProductDetails
            product={product}
            onSave={(data) => console.log("Saved data:", data)}
          />
        </CardHeader>
        <CardContent className="pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-2">
              <span className="font-semibold text-[#F4F4F5]">Problem</span>
              <p className="text-[#A1A1AA] text-sm mt-1">
                {product.problemStatement}
              </p>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-[#F4F4F5]">Goals</span>
              <ul className="mt-1 space-y-1">
                {goalsArray.map((goal: string) => (
                  <li
                    key={goal}
                    className="flex items-center gap-2 text-[#A1F59F] text-sm"
                  >
                    <CheckCircle size={16} className="text-[#A1F59F]" /> {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-[#F4F4F5]">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {techStackArray.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-[#181A20] px-3 py-1 rounded-full text-xs text-[#F4F4F5] border border-[#23262F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="font-semibold text-[#F4F4F5]">Audience</span>
            <p className="text-[#A1A1AA] text-sm mb-4 mt-1">
              {product.targetAudience}
            </p>
          </div>
        </CardContent>
      </Card>
      {/* MVP Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#F4F4F5] mb-4">MVP Features</h2>
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="rounded-2xl shadow-sm bg-[#181A20] border-0"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg text-[#FBBF24] flex items-center gap-2">
                  {idx + 1}. {feature.title}
                </CardTitle>
                {/* @ts-expect-error unknown type */}
                <EditFeatureModal feature={feature} productId={id} />
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <p className="text-[#A1A1AA] mb-2 text-sm">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex items-center gap-2 text-[#A1F59F] text-sm"
                    >
                      <CheckCircle size={16} className="text-[#A1F59F]" />{" "}
                      {task.title}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Dialog>
        <DialogTrigger>Continue to Roadmap Setup</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Plan Your Launch Timeline</DialogTitle>
            <DialogDescription>
              Pick your launch date and daily commitment. We’ll craft your
              step-by-step build roadmap.
            </DialogDescription>
            <DialogContent>
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-1">
                    Launch deadline
                  </label>
                  <Input
                    type="date"
                    value={newDeadline || ""}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="w-full bg-[#23262F] border border-[#3F3F46] text-white px-3 py-2 rounded-lg outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-1">
                    Daily focus hours
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={newDailyCommitmentHrs || ""}
                    onChange={(e) =>
                      setNewDailyCommitmentHrs(Number(e.target.value))
                    }
                    className="w-full bg-[#23262F] border border-[#3F3F46] text-white px-3 py-2 rounded-lg outline-none"
                    placeholder="e.g. 2"
                  />
                </div>

                <DialogFooter>
                  <DialogClose>Close</DialogClose>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 w-full"
                  >
                    🚀 Generate Roadmap
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      aƒ
    </div>
  );
}
