"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Link from "next/link";
import { motion } from "framer-motion";
import { DayTask } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Fetcher function
async function fetchBuildLog(buildLogId: string) {
  const res = await fetch(`/api/build-logs/${buildLogId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load build log");
  return res.json();
}

// Error boundary fallback component
function ErrorFallback() {
  return (
    <div className="text-red-500 p-4 border border-red-300 rounded-md">
      Something went wrong loading the build log.
    </div>
  );
}

// Loading skeletons
function LoadingFallback() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-24 w-full bg-purple-900/10 rounded-lg" />
      <Skeleton className="h-8 w-2/3 bg-purple-900/10 rounded" />
      <Skeleton className="h-6 w-1/2 bg-purple-900/10 rounded" />
      <Skeleton className="h-20 w-full bg-purple-900/10 rounded-lg" />
    </div>
  );
}

// Main content
function BuildLogContent({ buildLogId }: { buildLogId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["buildLog", buildLogId],
    queryFn: () => fetchBuildLog(buildLogId),
    enabled: !!buildLogId,
  });

  if (isLoading) return <LoadingFallback />;
  if (error) return <ErrorFallback />;

  const buildLog = data?.buildLog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className=" ">
        <CardContent className="prose text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-lg font-medium mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-3 leading-relaxed text-gray-300" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-inside mb-3 ml-4 text-gray-300"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="text-white font-semibold" {...props} />
              ),
              hr: () => <hr className="my-6 border-purple-700" />,
              em: ({ node, ...props }) => (
                <em className="italic text-gray-400" {...props} />
              ),
            }}
          >
            {buildLog.summary}
          </ReactMarkdown>

          {buildLog.tweet && (
            <p className="text-sm italic text-purple-500">
              Tweet: {buildLog.tweet}
            </p>
          )}
        </CardContent>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-2">
          Tasks in this log:
        </h2>
        {buildLog.DayTask.length === 0 ? (
          <p className="text-gray-500">
            No tasks were linked to this build log.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buildLog.DayTask.map((task: DayTask) => (
              <Card
                key={task.id}
                className="bg-[#181920] border border-purple-800"
              >
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    {task.description}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-400 space-y-1">
                  <div>
                    Status:{" "}
                    <Badge className="bg-purple-600 text-white">
                      {task.status}
                    </Badge>
                  </div>
                  {task.milestoneGoal && (
                    <div>
                      🎯 Milestone:{" "}
                      <span className="text-gray-300">
                        {task.milestoneGoal}
                      </span>
                    </div>
                  )}
                  {task.shipCheck && (
                    <div>
                      🚀 Ship Check:{" "}
                      <span className="text-gray-300">{task.shipCheck}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Page wrapper
export default function BuildLogDetailPage() {
  const params = useParams();
  const buildLogId = params["build-id"] as string;
  const productId = params.id as string;

  return (
    <div className="min-h-screen bg-[#0f0f11] px-6 md:px-12 py-10 text-white">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Build Log Details</h1>
        <Link href={`/dashboard/products/${productId}`}>
          <Button variant="secondary">Back to Product</Button>
        </Link>
      </div>

      <BuildLogContent buildLogId={buildLogId} />
    </div>
  );
}
