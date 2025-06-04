"use client";

import * as React from "react";
import { Home, Rocket, Settings } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { DiscordIcon } from "@/components/icons/discord";
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
    // {
    //   title: "Build Logs",
    //   url: "/dashboard/build-logs",
    //   icon: CalendarCheck2,
    //   items: [
    //     { title: "All Logs", url: "/dashboard/build-logs" },
    //     { title: "New Log", url: "/dashboard/build-logs/new" },
    //   ],
    // },
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
          <Image
            src="/builds-forge.png"
            className="w-8 h-8"
            alt="Logo"
            width={24}
            height={24}
          />
          {open && <span className="font-bold text-white">BuildsForge</span>}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#0f0f11] flex flex-col justify-between h-full">
        <div>
          <NavMain items={buildsForgeNav.navMain} />
        </div>

        <div className="p-4 border-t border-purple-900/20">
          <Link
            href="https://discord.gg/bR4k3Jx4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <DiscordIcon className="w-4 h-4" />
            <span>Join our Discord</span>
          </Link>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
