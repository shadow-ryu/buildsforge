"use client";

import { useUsage } from "@/hooks/use-usage";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function UsageGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const usage = useUsage();

  // Show nothing while usage context is loading
  if (usage.loading) return null;

  const isOnDashboard =
    pathname.includes("/dashboard") &&
    !pathname.includes("/plans") &&
    !pathname.includes("/settings");

  // Safely extract blocked features
  // @ts-expect-error blocked
  const overLimitFeatures = Object.entries(usage.blocked || {})
    .filter(([, isBlocked]) => isBlocked === true)
    .map(([key]) => key);

  const shouldShowBanner = isOnDashboard && overLimitFeatures.length > 0;

  return (
    <>
      {shouldShowBanner && (
        <div className="p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm mb-4 rounded">
          You&apos;ve reached your usage limit for{" "}
          <strong>{overLimitFeatures.join(", ")}</strong>.{" "}
          <Link href="/pricing" className="underline font-medium">
            Upgrade your plan
          </Link>{" "}
          to continue using these features.
        </div>
      )}
      {children}
    </>
  );
}
