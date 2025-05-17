import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import QueryProvider from "@/components/QueryProvider";
import prisma from "@/lib/prisma";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // Check if the app is live, otherwise redirect to /coming_soon
  if (process.env.IS_LIVE !== "true") {
    redirect("/coming_soon");
  }
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const loggedInUser = await prisma.user.findFirst({
    where: { clerkId: userId },
  });

  if (!loggedInUser?.onboardingCompleted) {
    redirect("/onboarding");
  }

  return (
    <QueryProvider>
      <div className="flex min-h-screen text-white bg-[#0f0f11]">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="flex-1 min-h-screen flex flex-col ">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </QueryProvider>
  );
};

export default DashboardLayout;
