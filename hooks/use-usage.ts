import { useContext } from "react";
import { UsageContext } from "@/components/UsageProvider";

export function useUsage() {
  const context = useContext(UsageContext);
  if (!context) throw new Error("useUsage must be used within UsageProvider");

  const { usage, loading } = context;
  if (loading || !usage) return { loading: true };

  return {
    ...usage,
    blocked: {
      roadmap: !usage.canUse.roadmap,
      mvp: !usage.canUse.mvp,
      buildlog: !usage.canUse.buildlog,
      project: !usage.canUse.project,
    },
    loading: false,
  };
}
