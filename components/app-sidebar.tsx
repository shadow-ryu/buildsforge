"use client";

import * as React from "react";
import { Home, Rocket, CalendarCheck2, Settings, Zap } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const buildsForgeNav = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [{ title: "Overview", url: "/dashboard" }],
    },
    {
      title: "Projects",
      url: "/dashboard/products",
      icon: Rocket,
      items: [
        { title: "All Projects", url: "/dashboard/products" },
        { title: "New Project", url: "/dashboard/products/new" },
      ],
    },
    {
      title: "Build Logs",
      url: "/dashboard/build-logs",
      icon: CalendarCheck2,
      items: [
        { title: "All Logs", url: "/dashboard/build-logs" },
        { title: "New Log", url: "/dashboard/build-logs/new" },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
  projects: [
    {
      name: "My Projects",
      url: "/dashboard/products",
      icon: Rocket,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className="bg-[#0f0f11] border-purple-900/20"
      {...props}
    >
      <SidebarHeader className="bg-[#0f0f11]  tborder-b border-purple-900/20">
        <div className="flex items-center gap-2  justify-start">
          <Zap className="h-6 w-6 text-purple-500" />
          {open && <span className="font-bold text-white">BuildsForge</span>}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#0f0f11]">
        <NavMain items={buildsForgeNav.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
