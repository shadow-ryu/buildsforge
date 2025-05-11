"use client";
import React from "react";
import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { Plus, Settings, ArrowUpRight, MoreVertical } from "lucide-react";
import Link from "next/link";

// const HeatMapvalue = [
//   { date: "2016/01/11", count: 2 },
//   { date: "2016/01/12", count: 20 },
//   { date: "2016/01/13", count: 10 },
//   ...[...Array(17)].map((_, idx) => ({
//     date: `2016/02/${idx + 10}`,
//     count: idx,
//     content: "",
//   })),
//   { date: "2016/04/11", count: 2 },
//   { date: "2016/05/01", count: 5 },
//   { date: "2016/05/02", count: 5 },
//   { date: "2016/05/04", count: 11 },
// ];

const stats = [
  {
    label: "Active Project",
    value: "buildsforge",
    icon: <ArrowUpRight className="w-4 h-4 text-green-400 inline ml-1" />,
    badge: { label: "12 streak", color: "success" },
  },
  {
    label: "Current best streak",
    value: 12,
    icon: null,
    badge: { label: "Personal Best!", color: "purple" },
  },
  {
    label: "Current progress",
    value: "68%",
    icon: null,
    // badge: { label: "On Track", color: "success" },
  },
];

const products = [
  {
    name: "ProductX",
    status: { label: "Completed", color: "success" },
    progress: 100,
    updated: "14 days ago",
  },
  {
    name: "BuildsForge API",
    status: { label: "Completed", color: "success" },
    progress: 100,
    updated: "20 day ago",
  },
];

const quickActions = [
  { label: "Add Feature", icon: <Plus className="w-5 h-5" /> },
  { label: "Log Update", icon: <ArrowUpRight className="w-5 h-5" /> },
  { label: "Share Progress", icon: <ArrowUpRight className="w-5 h-5" /> },
  { label: "Settings", icon: <Settings className="w-5 h-5" /> },
];

function WelcomeCard() {
  // Simulate a 28-day heatmap (true = active day)
  // visx heatmap setup
  // 7 columns (days of week), 4 rows (weeks)
  const streakDays = 12;
  // const totalDays = 28;
  // const today = new Date();
  // const heatmapData = Array.from({ length: totalDays }, (_, i) => {
  //   const date = new Date(today);
  //   date.setDate(today.getDate() - (totalDays - 1 - i));
  //   // Format as YYYY-MM-DD
  //   const dateStr = date.toISOString().split("T")[0];
  //   return {
  //     date: dateStr,
  //     count: i >= totalDays - streakDays ? 1 : 0,
  //   };
  // });

  // // Custom SVG gradient
  // const gradientDefs = (
  //   <defs>
  //     <linearGradient id="heatmapGradient" x1="0" y1="0" x2="1" y2="1">
  //       <stop offset="0%" stopColor="#a78bfa" />
  //       <stop offset="100%" stopColor="#06b6d4" />
  //     </linearGradient>
  //   </defs>
  // );

  return (
    <div className="relative grid grid-cols-1">
      <div className=" text-white  flex justify-start items-end pt-8 h-full ">
        {/* Abstract SVG background mesh/wave */}

        {/* Content Grid */}

        {/* Left: Large Heading */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
            Welcome back, <span className="text-[#a5b4fc]">Alex</span>
          </h1>
          <div className="text-base md:text-lg text-white/80 mt-3 font-medium">
            You&apos;re on a{" "}
            <span className="text-[#a5b4fc] font-bold">{streakDays} day</span>{" "}
            streak!
          </div>
        </div>
      </div>
      {/* Right: Build Streak Heatmap */}

      {/* <HeatMap
          value={heatmapData}
          width={140}
          height={80}
          rectSize={18}
          rectProps={{ rx: 4, stroke: '#23262F', strokeWidth: 1 }}
          legendCellSize={0}
          panelColors={{ 1: 'url(#heatmapGradient)', 0: '#23262F' }}
          startDate={new Date(heatmapData[0].date)}
          endDate={new Date(heatmapData[heatmapData.length - 1].date)}
          weekLabels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          monthLabels={[]}
        /> */}
      {/* <div className=" bg-gray-400 rounded-md w-full"> */}
      {/* <HeatMap
          value={HeatMapvalue}
          className=" text-gray-200 w-full"
          weekLabels={["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]}
          startDate={new Date("2025/01/01")}
          endDate={new Date("2025/12/31")}
        /> */}
      {/* </div> */}
    </div>
  );
}

function StatsSection() {
  return (
    <div className="flex flex-col items-start gap-4 w-full mb-6">
      <h2 className="text-2xl font-bold">Active project status</h2>
      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="bg-[#2B2B30] rounded-2xl shadow p-6 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-[#A1A1AA] font-medium">
                {stat.label}
              </span>
              {stat.icon && stat.icon}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">
                {stat.value}
              </span>
              {stat.badge && (
                <Badge
                  variant={
                    stat.badge.color === "success"
                      ? "success"
                      : stat.badge.color === "purple"
                      ? "purple"
                      : "blue"
                  }
                  className="ml-2"
                >
                  {stat.badge.label}
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {products.map((product) => (
        <Card
          key={product.name}
          className="bg-[#1A1A1D] rounded-2xl shadow p-6 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-white text-base">
              {product.name}
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical className="w-5 h-5 text-[#A1A1AA]" />
            </Button>
          </div>
          <Progress value={product.progress} className="h-2 bg-[#23262F]" />
          <div className="flex items-center justify-between mt-2">
            <Badge>{product.status.label}</Badge>
            <span className="text-xs text-[#A1A1AA]">{product.updated}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

function TodaysFocus() {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <h3 className="font-semibold text-white text-base">Today&apos;s Focus</h3>

      <Card className="bg-[#2B2B30] rounded-2xl shadow p-6 flex flex-col gap-2 mb-4 w-full">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="purple">High Priority</Badge>
        </div>
        <div className="text-sm text-[#A1A1AA] mb-2">
          Complete the user authentication flow for ProductX
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 text-blue-400 hover:underline text-sm font-medium"
        >
          View Task <ArrowUpRight className="w-4 h-4" />
        </Link>
      </Card>
    </div>
  );
}

function QuickActions() {
  return (
    <div className=" flex flex-col justify-center items-start gap-5">
      <h3> Quick actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="flex items-center gap-2 border-[#23262F] text-white bg-[#1A1A1D] hover:bg-[#23262F] rounded-xl shadow font-medium"
          >
            {action.icon} {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex-1 px-8 pb-8 grid grid-cols-12 gap-6">
      {/* Welcome Card */}
      <div className="col-span-12 flex-1 px-8 pb-8 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <WelcomeCard />
        </div>
        <div className="col-span-6">
          <div className="col-span-4 flex flex-col gap-4 items-center w-full">
            <TodaysFocus />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="col-span-12">
        <StatsSection />
      </div>

      {/* Product List */}
      <div className="col-span-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold mb-4 text-[#F4F4F5]">
            {" "}
            Shipped Products
          </h2>
          <div className="col-span-12 flex justify-start">
            <Link href="/products/new">
              <Button className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold text-base hover:bg-blue-700 flex items-center gap-2 mb-4">
                Create New Product
              </Button>
            </Link>
          </div>
        </div>

        <ProductList />
      </div>
      <div className="col-span-4">
        <QuickActions />
      </div>
      {/* Right Side: Today&apos;s Focus & Quick Actions */}
    </div>
  );
}
