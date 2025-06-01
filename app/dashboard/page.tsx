/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import GlassCard from "@/components/ui/glass-card";
import { useDashboardData } from "@/react-query/dashboard-queries";
import { LoadingScreen } from "@/components/loading-screen";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboardData({});

  if (isLoading) {
    return (
      <LoadingScreen
        isLoading={isLoading}
        header="Welcome"
        message="loading your data for dashboard"
      />
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  const {
    streak,
    todayTasks,
    shippedProducts,
    activeProjects,
    user,

    pendingTasks,
  } = data || {};
  console.log("pendingTasks", activeProjects);
  return (
    <div className="p-6 md:p-10 bg-[#0f0f11] min-h-screen space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Welcome back, <span className="text-purple-400">{user?.name}</span>
        </h1>
        {(streak || 0) > 1 && (
          <Badge className="bg-purple-900 text-purple-300 px-4 py-2 rounded-full">
            🔥 {streak} day streak — Keep going!
          </Badge>
        )}
      </div>

      {user?.isNewUser && (
        <GlassCard className="bg-[#181A20] border border-purple-900 rounded-2xl px-6 py-5">
          <div className="flex gap-4 items-center">
            <div className="h-12 w-12 rounded-full bg-purple-950 flex items-center justify-center">
              <span className="text-xl">🧩</span>
            </div>
            <div className="flex-1">
              <h2 className="text-white font-semibold">First Project Setup</h2>
              <p className="text-sm text-gray-400">
                You’re all set up! Kickstart your journey by creating your first
                project and let AI craft your daily roadmap.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Built with AI — here to keep your momentum going
              </p>
            </div>
            <Link href="/dashboard/products/new">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
                Create Project
              </Button>
            </Link>
          </div>
        </GlassCard>
      )}

      {/* Stats and Focus */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="bg-[#181A20] border-none p-6">
          <CardTitle className="text-white text-lg mb-2">
            Streak Stats
          </CardTitle>
          <div className="text-2xl font-semibold text-white mb-1">
            🔥 {user?.bestStreakOverall ?? 0} days
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Your personal best streak
          </p>
          {/* <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>This week</span>
            <span>9/10 days active</span>
          </div>
          <Progress value={90} className="h-2 bg-purple-900" /> */}
        </GlassCard>

        <GlassCard className="bg-[#181A20] border-none p-6">
          <CardTitle className="text-white text-lg mb-2">
            Active Project
          </CardTitle>{" "}
          {activeProjects && activeProjects?.length > 0 ? (
            <ScrollArea>
              {activeProjects.map((prod: any) => (
                <Card className="bg-[#181A20] p-4 mb-4" key={prod.id}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold">{prod.name}</h3>
                    <Badge className="bg-purple-800 text-white text-xs">
                      Due: {new Date(prod.deadline).toLocaleDateString()}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Streak: {prod.currentStreak} days
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Last updated:{" "}
                    {new Date(prod.updatedAt).toLocaleDateString()}
                  </p>
                  <Link href={`/dashboard/products/${prod.id}`}>
                    <Button variant="secondary" className="mt-3 text-sm">
                      View Project
                    </Button>
                  </Link>
                </Card>
              ))}
            </ScrollArea>
          ) : (
            <p className="text-sm text-gray-500">No active project</p>
          )}
        </GlassCard>

        <GlassCard className="bg-[#181A20] border-none p-6">
          <CardTitle className="text-white text-lg mb-2">
            Today&apos;s Focus
          </CardTitle>
          <div className="w-full">
            <ScrollArea className=" h-[400px] w-full p-2">
              {todayTasks && todayTasks?.length > 0 ? (
                todayTasks.map((task: any, i: number) => (
                  <div
                    key={i}
                    className="bg-[#0f0f11] border border-purple-900 p-4 rounded-lg flex flex-col gap-1 mt-1"
                  >
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="default"
                        className="bg-purple-700 text-white text-xs"
                      >
                        {task.status}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        Due: {task.due}
                      </span>
                    </div>
                    <p className="text-sm text-white font-medium">
                      {task.title}
                    </p>
                    <Link
                      href={task.link}
                      className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Task <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No tasks today</p>
              )}
            </ScrollArea>
          </div>
        </GlassCard>
        <GlassCard className="bg-[#181A20] border-none p-6">
          <CardTitle className="text-white text-lg mb-4">
            Pending Tasks
          </CardTitle>
          <ScrollArea className=" h-[400px] w-full p-4">
            {pendingTasks && pendingTasks.length > 0 ? (
              pendingTasks.map((task: any, i: number) => (
                <div
                  key={i}
                  className="bg-[#0f0f11] border border-purple-900 p-4 rounded-lg flex flex-col gap-1 mb-2"
                >
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="default"
                      className="bg-yellow-600 text-white text-xs"
                    >
                      {task.status}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      Due: {task.due}
                    </span>
                  </div>
                  <p className="text-sm text-white font-medium">{task.title}</p>
                  <Link
                    href={task.link}
                    className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1"
                  >
                    View Task <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No pending tasks</p>
            )}
          </ScrollArea>
        </GlassCard>
      </div>

      {/* Shipped Products */}
      {shippedProducts?.length ? (
        <div className="bg-[#181A20] border border-purple-900/20 p-6 rounded-xl">
          <CardTitle className="text-white text-lg mb-4">
            Shipped Products
          </CardTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shippedProducts.map((prod: any) => (
              <Card key={prod.name} className="bg-[#181A20] p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{prod.name}</span>
                  <Badge className="bg-green-600 text-white text-xs">
                    {prod.status}
                  </Badge>
                </div>
                <Progress value={100} className="h-2 bg-purple-900" />
                <p className="text-xs text-gray-500 mt-2">
                  Shipped: {prod.shipped}
                </p>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
