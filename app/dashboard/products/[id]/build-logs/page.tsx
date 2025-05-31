"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type BuildLog = {
  id: string;
  dayIndex: number;
  logDate: string;
  generatedAt: string;
  summary: string;
  tweet?: boolean;
};

export default function BuildLogsPage() {
  const { id: productId } = useParams();

  const { data: logs, isLoading, error } = useQuery<BuildLog[]>({
    queryKey: ["buildLogs", productId],
    queryFn: async () => {
      const res = await fetch(`/api/products/${productId}/build-logs`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to load logs");
      return data.logs;
    },
    enabled: !!productId, // ensure query runs only when productId is available
  });

  return (
    <div className="min-h-screen px-6 py-10 md:px-12 bg-[#0f0f11]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Build Logs</h1>
        <p className="text-sm text-gray-400">
          Track your daily progress and milestones
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg bg-purple-900/10" />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">
          {(error as Error).message}
        </div>
      ) : logs?.length === 0 ? (
        <div className="text-gray-500 text-center mt-20">
          No build logs found yet.
        </div>
      ) : (
        <div className="space-y-6 flex flex-col gap-2">
          {logs?.map((log) => (
            <Link
              key={log.id}
              href={`/dashboard/products/${productId}/build-logs/${log.id}`}
            >
              <Card
                key={log.id}
                className="bg-[#1a1b22] border border-purple-900 hover:border-purple-700 transition shadow-sm"
              >
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-white text-lg">
                      Day {log.dayIndex} –{" "}
                      {format(new Date(log.logDate), "MMM d, yyyy")}
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                      Logged at {format(new Date(log.generatedAt), "hh:mm a")}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-700 text-white">
                      Streak Day {log.dayIndex}
                    </Badge>
                    {log.tweet && (
                      <Badge
                        variant="outline"
                        className="text-purple-400 border-purple-700"
                      >
                        Tweet Ready
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <Separator className="bg-purple-900" />
                <CardContent>
                  <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                    {log.tweet}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
