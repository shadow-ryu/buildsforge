// /app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { generateRoadmap } from "@/lib/inngest/generate-roadmap";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateRoadmap],
});
