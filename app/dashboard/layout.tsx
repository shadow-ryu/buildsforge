import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function RocketIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mr-2"
    >
      <path d="M4 16v2h2l8-8-2-2-8 8z" />
      <path d="M15 7l2 2a2 2 0 0 1 0 2.83l-1.17 1.17a2 2 0 0 1-2.83 0l-2-2" />
      <path d="M9 13l-1 1" />
    </svg>
  );
}
function AnalyticsIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mr-2"
    >
      <rect x="3" y="12" width="4" height="6" rx="1" />
      <rect x="9" y="8" width="4" height="10" rx="1" />
      <rect x="15" y="4" width="4" height="14" rx="1" />
    </svg>
  );
}
const navItems = [
  {
    label: "Dashboard",
    icon: (
      <span className="mr-2">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 13h4v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h4" />
          <rect x="3" y="5" width="14" height="14" rx="2" />
        </svg>
      </span>
    ),
    href: "/",
  },
  { label: "Products", icon: <RocketIcon />, href: "/products" },
  { label: "Analytics", icon: <AnalyticsIcon />, href: "/analytics" },
  {
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    href: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-60 bg-[#111113] min-h-screen flex flex-col justify-between py-6 px-4 border-r border-[#23262F]">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-lg font-bold text-white tracking-tight">
            BuildsForge
          </span>
          <Badge variant="blue" className="ml-2">
            beta
          </Badge>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button
                key={item.label}
                className={`justify-start gap-3 w-full px-3 py-2 mb-1 ${"text-[#A1A1AA] hover:bg-[#23262F]"}`}
              >
                {item.icon} {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-8 pt-8 pb-4">
      <div className="flex items-center gap-4">
        {/* <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          size="md"
        /> */}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="w-5 h-5 text-[#A1A1AA]" />
        </Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // Check if the app is live, otherwise redirect to /coming_soon
  if (process.env.IS_LIVE !== "true") {
    redirect("/coming_soon");
  }
  const { sessionClaims } = await auth();

  if (!sessionClaims?.metadata?.onboardingComplete) {
    redirect("/onboarding");
  }
  return (
    <div className="flex min-h-screen bg-[#181A20] text-[#F4F4F5]">
      <Sidebar />
      <main className="flex-1 min-h-screen flex flex-col bg-[#181A20]">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
