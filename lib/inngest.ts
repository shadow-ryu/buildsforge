// lib/inngest.ts
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "buildsforge-app", // Unique app identifier
  name: "BuildsForge", // Human-readable name shown in dashboard
  signingKey: process.env.INNGEST_SIGNING_KEY, // 🔐 Used to verify signed events
  eventKey: process.env.INNGEST_EVENT_KEY, // 🔑 Used to send events to Inngest Cloud
});
