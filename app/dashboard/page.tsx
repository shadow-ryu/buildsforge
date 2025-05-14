/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import GlassCard from "@/components/ui/glass-card";

const headerActions = [
  { label: "Add Product", variant: "primary" },
  { label: "View Analytics", variant: "secondary" },
  { label: "Settings", variant: "secondary" },
];

const activeProjects: any[] = [
  // {
  //   name: "buildsforge",
  //   status: "In Progress",
  //   progress: 0,
  //   updated: "2 hours ago",
  // },
  // {
  //   name: "Analytics Dashboard",
  //   status: "On Hold",
  //   progress: 40,
  //   updated: "2 hours ago",
  // },
];

type ShippedProduct = { name: string; status: string; shipped: string };
const shippedProducts: ShippedProduct[] = [
  // {
  //   name: "Task Management System",
  //   status: "Shipped",
  //   shipped: "2 days ago",
  // },
  // {
  //   name: "User Authentication API",
  //   status: "Shipped",
  //   shipped: "5 days ago",
  // },
  // {
  //   name: "Payment Integration",
  //   status: "Shipped",
  //   shipped: "7 days ago",
  // },
];

const todayTasks: any[] = [
  // {
  //   title: "Refactor roadmap generator",
  //   status: "High Priority",
  //   due: "Due today",
  //   link: "/tasks/today",
  // },
  // {
  //   title: "Add streak breakdown to dashboard",
  //   status: "Medium Priority",
  //   due: "Due tomorrow",
  //   link: "/tasks/today",
  // },
];

export default function DashboardPage() {
  // const [showSetupCard] = useState(true);

  return (
    <div className="p-8">
      <div className="flex justify-between gap-4 mb-6">
        {/* Header Actions */}

        {/* Welcome & Streak Badge */}
        <div className="mb-6 flex items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-white">
              Welcome back, <span className="text-[#a5b4fc]">Alex</span>
            </h1>
          </div>
          <Badge className="rounded-full px-4 py-2 bg-[#23262F] text-[#a5b4fc] ml-4">
            12-day streak • Keep it up!
          </Badge>
        </div>
        <div className="flex justify-end gap-4 mb-6">
          {headerActions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant as any}
              className="px-5 font-semibold"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Setup Card */}
      <div className="mb-8">
        <GlassCard className="flex flex-row items-center bg-[#181A20] border border-[#23262F] shadow-md rounded-2xl px-6 py-5 w-full">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#23262F] mr-6">
            <span className="text-2xl">🧩</span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white mb-1">
              First Project Setup
            </div>
            <div className="text-sm text-[#A1A1AA]">
              You&apos;re all set up! Kickstart your journey by creating your first
              project and let AI craft your daily roadmap.
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-[#71717A]">
                Built with AI — here to keep your momentum going
              </span>
            </div>
          </div>
          <Link href={"/dashboard/products/new"}>
            <Button className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
              Create project
            </Button>
          </Link>
        </GlassCard>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Build Streak */}
        {/* <Card className="bg-[#1A1A1D] rounded-xl  w-full">
          <CardHeader>
            <h2 className="text-lg font-bold text-white mb-4">
              Your Build Streak
            </h2>
          </CardHeader> */}
        {/* <CardContent className="w-full h-40 px-4"> */}

        {/* </CardContent>
        </Card> */}

        {/* Streak Stats */}
        <GlassCard className="bg-[#1A1A1D] rounded-xl p-6 border-none flex flex-col ">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Streak Stats</h2>
            <div className="text-white text-2xl font-semibold flex items-center gap-2 mb-1">
              <span>🔥</span> 0 days
            </div>
            <div className="text-xs text-[#A1A1AA] ">
              Your personal best streak
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[#A1A1AA]">This week</span>
              <span className="text-xs text-[#A1A1AA]">9/10 days active</span>
            </div>
            <Progress value={90} className="h-2 bg-[#23262F]" />
          </div>
        </GlassCard>

        {/* Today's Focus */}
        <GlassCard className="bg-[#1A1A1D] border-none rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">
            Today&apos;s Focus
          </h2>
          <div className="flex flex-col gap-4">
            {todayTasks.length > 0 ? (
              todayTasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-[#23262F] rounded-lg px-4 py-3"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={
                          task.status === "High Priority" ? "danger" : "warning"
                        }
                      >
                        {task.status}
                      </Badge>
                      <span className="text-xs text-[#71717A]">{task.due}</span>
                    </div>
                    <span className="text-white font-medium">{task.title}</span>
                    <Link
                      href={task.link}
                      className="text-xs text-blue-400 hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      View Task <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-xs text-[#A1A1AA]">No tasks today</div>
            )}
          </div>
        </GlassCard>

        <GlassCard className="bg-[#1A1A1D] rounded-xl p-6 border-none">
          <h2 className="text-lg font-bold text-white mb-4">Active Projects</h2>
          <div className="flex flex-col gap-4">
            {activeProjects.length > 0 ? (
              activeProjects.map((proj) => (
                <Card
                  key={proj.name}
                  className="bg-[#181A20] px-6 py-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">
                      {proj.name}
                    </span>
                    <Badge
                      variant={
                        proj.status === "In Progress" ? "info" : "warning"
                      }
                    >
                      {proj.status}
                    </Badge>
                  </div>
                  <Progress
                    value={proj.progress}
                    className="h-2 bg-[#23262F]"
                  />
                  <div className="text-xs text-[#A1A1AA] mt-2">
                    Last updated {proj.updated}
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-xs text-[#A1A1AA]">No active projects</div>
            )}
          </div>
        </GlassCard>
      </div>

      {/* Active Projects & Shipped Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Projects */}
        {/* Shipped Products */}
        <div className="bg-[#1A1A1D] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">
            Shipped Products
          </h2>
          <div className="flex flex-col gap-4">
            {shippedProducts.length === 0 ? (
              <div className="text-xs text-[#A1A1AA]">
                No shipped products yet
              </div>
            ) : (
              shippedProducts.map((prod) => (
                <Card
                  key={prod.name}
                  className="bg-[#181A20] px-6 py-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">
                      {prod.name}
                    </span>
                    <Badge variant="success">{prod.status}</Badge>
                  </div>
                  <Progress value={100} className="h-2 bg-[#23262F]" />
                  <div className="text-xs text-[#A1A1AA] mt-2">
                    Shipped {prod.shipped}
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
