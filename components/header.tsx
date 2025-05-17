"use client";

import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0f0f11] border-b border-purple-900/20 shadow-sm">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="hidden md:flex items-center relative max-w-md">
          <div className="absolute left-3 text-gray-400">
            <Search className="h-4 w-4" />
          </div>
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-[#181A20] border border-purple-900/30 rounded-md text-sm text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-purple-950/30 transition"
        >
          <Bell className="w-5 h-5 text-gray-400 hover:text-purple-400 transition" />
        </Button>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8 border border-purple-800",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </header>
  );
}
