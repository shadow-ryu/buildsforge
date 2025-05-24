// Product Detail Page – Upgraded UI with Modern Design + Dark Purple Theme

"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import { CheckCircle, MoreHorizontal, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoadingScreen } from "@/components/loading-screen";
import { EditProductDetails } from "@/components/products/product-details-edit";
import { Feature, Product, Task } from "@prisma/client";
import ManualMvpForm from "@/components/products/manual-mvp-form";
import { EditFeatureModal } from "@/components/products/product-feature-task-edit";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUsage } from "@/hooks/use-usage";

interface ProductFeatures extends Feature {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
}

interface ProductDetail extends Product {
  features: ProductFeatures[];
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const queryClient = useQueryClient();
  const [newDeadline, setNewDeadline] = React.useState<string | null>(null);
  const [newStartDate, setNewStartDate] = React.useState<string | null>(null);
  const [newDailyCommitmentHrs, setNewDailyCommitmentHrs] = React.useState<
    number | null
  >(null);
  const { blocked, isLoading: usageLoading } = useUsage();

  const { data, isLoading, error } = useQuery<ProductDetail, Error>({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`/api/products/${id}`);
      if (!res.data.success)
        throw new Error(res.data.error || "Failed to fetch product");
      return res.data.product;
    },
  });

  const mvpMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await axios.post(`/api/products/generate/mvp`, { productId });
      if (!res.data.success) throw new Error(res.data.error);
      return res.data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["product", id] }),
  });

  const deleteFeatureMutation = useMutation({
    mutationFn: async (featureId: string) => {
      const res = await axios.post<{
        success: boolean;
        error?: string;
      }>("/api/features/delete", { featureId });

      if (!res.data.success) {
        throw new Error(res.data.error || "Failed to delete feature");
      }

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
    },
  });

  const roadmapMutation = useMutation({
    mutationFn: async ({
      productId,
      startDate,
      deadline,
      dailyCommitmentHrs,
    }: {
      productId: string;
      startDate: string;
      deadline: string;
      dailyCommitmentHrs: number;
    }) => {
      const res = await axios.post(`/api/products/generate/roadmap`, {
        productId,
        startDate,
        deadline,
        dailyCommitmentHrs,
      });
      if (!res.data.success) throw new Error(res.data.error);
      return res.data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["product", id] }),
  });

  if (isLoading || usageLoading)
    return (
      <LoadingScreen isLoading={true} message="Loading product..." header="" />
    );
  if (error || !data)
    return (
      <div className="text-center text-red-400 py-10">
        {error?.message || "Product not found."}
      </div>
    );

  const product = data;
  const goals =
    typeof product.userGoals === "string"
      ? product.userGoals.split(",").map((g) => g.trim())
      : [];
  const tech =
    typeof product.techStack === "string"
      ? product.techStack.split(",").map((t) => t.trim())
      : [];

  const handleRoadmapSubmit = () => {
    if (!newDeadline || !newStartDate) return;
    roadmapMutation.mutate({
      productId: id,
      startDate: newStartDate,
      deadline: newDeadline,
      dailyCommitmentHrs: newDailyCommitmentHrs || 2,
    });
  };

  const handleDeleteFeature = (featureId: string) => {
    deleteFeatureMutation.mutate(featureId);
  };
  return (
    <div className="max-w-full mx-auto px-6 py-10 text-white bg-[#0f0f11]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          {product.name}
        </h1>
        <div className="flex  gap-4 w-full items-end justify-end">
          <div className="flex gap-4  justify-end">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => mvpMutation.mutate(id)}
              disabled={mvpMutation.isPending || blocked?.mvp}
            >
              {mvpMutation.isPending
                ? "Generating MVP..."
                : product.isMvpGenerated
                ? "Regenerate MVP"
                : "Generate MVP"}
            </Button>

            <ManualMvpForm productId={id} />
          </div>
          <EditProductDetails
            product={product}
            onSave={() =>
              queryClient.invalidateQueries({
                queryKey: ["product", id],
              })
            }
          />
          <div className="flex items-center gap-4 justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex gap-2 items-center text-black"
                >
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {product.isRoadmapGenerated && (
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/products/${id}/roadmap`}>
                      <span>Roadmap</span>
                    </Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/products/${id}/build-logs`}>
                    <span>Build Logs</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/products/${id}/settings`}>
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {!product.isRoadmapGenerated && product.features.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 text-white">
                    Continue to Roadmap Setup
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#181A20] border border-purple-700 text-white">
                  <DialogHeader>
                    <DialogTitle>🚧 Plan Your Launch Timeline</DialogTitle>
                    <DialogDescription>
                      Set your start date, deadline, and how many hours per day
                      you can commit.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <Input
                      type="date"
                      value={newStartDate || ""}
                      onChange={(e) => setNewStartDate(e.target.value)}
                      placeholder="Start Date"
                    />
                    <Input
                      type="date"
                      value={newDeadline || ""}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      placeholder="Deadline"
                    />
                    <Input
                      type="number"
                      min="1"
                      value={newDailyCommitmentHrs || ""}
                      onChange={(e) =>
                        setNewDailyCommitmentHrs(Number(e.target.value))
                      }
                      placeholder="Daily Focus Hours (e.g. 2)"
                    />
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRoadmapSubmit();
                        }}
                        disabled={roadmapMutation.isPending}
                      >
                        {roadmapMutation.isPending
                          ? "Generating..."
                          : "Generate Roadmap"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-lg mb-6">{product.description}</p>

      <Card className="bg-[#181A20] border border-purple-800/40 rounded-2xl mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            📌 Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold text-white">Problem:</span>{" "}
              {product.problemStatement}
            </p>
            <p className="text-gray-400 mb-4">
              <span className="font-semibold text-white">Audience:</span>{" "}
              {product.targetAudience}
            </p>
            <div>
              <span className="font-semibold text-white">Goals</span>
              <ul className="mt-1 space-y-1 text-[#A1F59F]">
                {goals.map((goal, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#A1F59F]" /> {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <span className="font-semibold text-white">Tech Stack</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((t, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-purple-800 text-white"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {product.features.length && (
        <Card className="bg-[#181A20] border border-purple-800/40 rounded-2xl mb-10">
          <CardHeader>
            <CardTitle className="text-xl text-white"> MVP Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-400">
              <span className="font-semibold text-white">Summary:</span>{" "}
              {product.mvpSummary}
            </p>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Features
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="bg-[#1a1a1d] border border-purple-900 p-4 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-purple-300 font-medium mb-1">
                        {feature.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        {/* @ts-expect-error Property 'title' is missing in type 'ProductFeatures' but required in type 'Feature'. */}
                        <EditFeatureModal feature={feature} productId={id} />
                        <Button
                          variant={"destructive"}
                          onClick={() => handleDeleteFeature(feature.id)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      {feature.description}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {(feature as ProductFeatures).tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
