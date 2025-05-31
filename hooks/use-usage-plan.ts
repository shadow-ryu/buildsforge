// lib/hooks/useUsagePlan.ts
import { useQuery } from "@tanstack/react-query";

export function useUsagePlan() {
  return useQuery({
    queryKey: ["usage-plan"],
    queryFn: async () => {
      const res = await fetch("/api/usage/summary");
      if (!res.ok) throw new Error("Failed to fetch usage data");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // cache for 5 min
  });
}
