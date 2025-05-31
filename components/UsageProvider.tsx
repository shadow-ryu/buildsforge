"use client";

import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

type UsageLimits = {
  roadmap: number | "unlimited";
  mvp: number | "unlimited";
  buildlog: number | "unlimited";
  project: number | "unlimited";
};

type UsageData = {
  plan: string;
  usage: {
    roadmap: number;
    mvp: number;
    buildlog: number;
    project: number;
  };
  limits: UsageLimits;
  canUse: {
    roadmap: boolean;
    mvp: boolean;
    buildlog: boolean;
    project: boolean;
  };
};

type UsageContextType = {
  usage: UsageData | null;
  loading: boolean;
};

export const UsageContext = createContext<UsageContextType | null>(null);

export function UsageProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery<UsageData>({
    queryKey: ["usage-plan"],
    queryFn: async () => {
      const res = await fetch("/api/usage/summary");
      if (!res.ok) throw new Error("Failed to fetch usage data");
      return res.json();
    },
    staleTime: 1000 * 60 * 1,
  });

  return (
    <UsageContext.Provider value={{ usage: data ?? null, loading: isLoading }}>
      {children}
    </UsageContext.Provider>
  );
}
