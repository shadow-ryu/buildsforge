"use client";

import { useUsage } from "@/hooks/use-usage";
import { usePathname } from "next/navigation";

export function UsageGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const usage = useUsage();
  console.log(usage, "plams");
  // Early return if loading or context not ready yet
  if (usage.loading) return null;

  const isOnDashboard =
    pathname.includes("/dashboard") &&
    !pathname.includes("/plans") &&
    !pathname.includes("/settings");
  // @ts-expect-error blocked
  const overLimitFeatures = Object.entries(usage.blocked)
    .filter(([isBlocked]) => isBlocked)
    .map(([key]) => key);

  if (isOnDashboard && overLimitFeatures.length > 0) {
    return (
      <>
        <div className="p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm mb-4 rounded">
          You&apos;ve reached your usage limit for{" "}
          <strong>{overLimitFeatures.join(", ")}</strong>.{" "}
          <a href="/pricing" className="underline font-medium">
            Upgrade your plan
          </a>{" "}
          to continue using these features.
        </div>
        {children}
      </>
    );
  }

  return <>{children}</>;
}
