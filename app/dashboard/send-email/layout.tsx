import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // Check if the app is live, otherwise redirect to /coming_soon
  // if (process.env.IS_LIVE !== "true") {
  //   redirect("/coming_soon");
  // }
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  if (userId !== process.env.ADMIN_USER_ID) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen text-white bg-[#0f0f11]">{children}</div>
  );
};

export default DashboardLayout;
