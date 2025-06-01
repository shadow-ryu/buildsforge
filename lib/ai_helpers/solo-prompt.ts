export interface SaaSInput {
  app_name: string;
  problem_statement: string;
  target_audience: string;
  user_goals: string;
  unique_value_proposition: string;
  initial_features: string[];
  inspiration_apps: string[];
  tech_stack: string;
}

export function generateBuildLogPromptUpgraded({
  tasks,
  product,
  day,
  notes,
}: {
  tasks: {
    title: string;
    description?: string;
    category?: string;
    status: "completed" | "missed";
  }[];
  day: number;
  product: {
    name: string;
    description: string;
    uniqueValueProp: string;
    techStack: string;
    inspirationApps: string;
  };
  notes?: string;
}) {
  return `
You're a solo founder documenting Day ${day} of building "${product.name}".

Output a valid JSON object only:
{
  "markdown": string,
  "tweet": string
}

Write:
1. Markdown dev log (~800+ chars) — raw, honest, grouped by themes (e.g. UI, infra, wins).
2. Tweet summary (~400+ chars) — punchy and builder-sounding. Include 2–3 indie hacker hashtags.

Context:
- What it does: ${product.description}
- Why it matters: ${product.uniqueValueProp}
- Stack: ${product.techStack}
- Inspired by: ${product.inspirationApps}

Completed:
${
  tasks
    .filter((t) => t.status === "completed")
    .map((t) => `- ${t.title}${t.category ? ` (${t.category})` : ""}`)
    .join("\n") || "- None"
}

Missed:
${
  tasks
    .filter((t) => t.status === "missed")
    .map((t) => `- ${t.title}${t.category ? ` (${t.category})` : ""}`)
    .join("\n") || "- None"
}

${notes ? `Notes: ${notes}` : ""}
`.trim();
}

// Roadmap Generator v1
export function generateRoadmapPromptUpgraded({
  tasks,
  startDate,
  dailyHours,
  product,
}: {
  tasks: { title: string; description: string; category: string; id: string }[];
  startDate: string;
  dailyHours: number;
  product: {
    name: string;
    description: string;
    deadline: string;
    techStack: string;
    uniqueValueProp: string;
    inspirationApps: string;
  };
}) {
  return `
You're a solo indie hacker planning a build sprint for "${product.name}".

Context:
- Description: ${product.description}
- Value Prop: ${product.uniqueValueProp}
- Stack: ${product.techStack}
- Inspired by: ${product.inspirationApps}
- Start Date: ${startDate}
- Deadline: ${new Date(product.deadline).toISOString().split("T")[0]}
- Daily Hours: ${dailyHours}

Instructions:
- Distribute each task **only once**, and use its estimated effort (1–2 hours).
- If a task requires more hours than \`dailyHours\`, split it across multiple days, clearly indicating it's a continuation.
- For each day, \`total_hours\` must not exceed \`dailyHours\`, unless the deadline is too close to fit all tasks within that limit.
- If the available days are too few to fit all tasks within dailyHours, then **relax the dailyHours constraint** and pack extra hours per day as needed.
- Group related tasks into coherent daily milestone goals.
- Ensure all task IDs are accounted for and not duplicated.

Output format (as valid JSON):
[
  {
    "day": 1,
    "date": "YYYY-MM-DD",
    "milestone_goal": "...",
    "ship_check": "...",
    "tasks": [
      {
        "title": "...",
        "description": "...",
        "category": "core" | "ui" | "infra" | "auth" | "polish" | "payment",
        "estimated_hours": 1 or 2,
        "parent_task_id": "...",
        "part": "1 of 2" // Optional: if task is split over multiple days
      }
    ],
    "total_hours": number
  }
]

Available Tasks:
${tasks
  .map((t) => `- ${t.title} [${t.category}]: ${t.description} (id: ${t.id})`)
  .join("\n")}
`.trim();
}

// Roadmap Generator with existing tasks (v2)
export function generateMvpPrompt_RealWorld_With_Existing_Features(
  input: SaaSInput,
  existing: { name: string; description: string; tasks: string[] }[]
): string {
  return `
You're designing a lean MVP for a SaaS tool.

The following features already exist (do not duplicate them):
${JSON.stringify(existing, null, 2)}

Only return meaningful new features. If nothing new is required, keep the feature list empty.

Respond with a valid JSON object:
{
  "product_name": string,
  "one_liner": string,
  "core_pain": string,
  "mvp_goal": string,
  "stack": {
    "frontend": string,
    "backend": string,
    "auth": string,
    "db": string,
    "infra": string,
    "ai": string | null
  },
  "features": [
    {
      "rank": number,
      "feature": string,
      "description": string,
      "tasks": string[]
    }
  ],
  "launch_plan": string[],
  "mvp_summary": string
}

Input:
${JSON.stringify(input, null, 2)}
`.trim();
}

// MVP Generator with existing features (v2)
export function generateMvpPrompt_RealWorld(input: SaaSInput): string {
  const {
    app_name,
    problem_statement,
    target_audience,
    user_goals,
    unique_value_proposition,
    initial_features,
    inspiration_apps,
    tech_stack,
  } = input;

  const optionalFieldsSummary = `
  ${target_audience ? `Target Audience: ${target_audience}` : ""}
  ${user_goals ? `User Goals: ${user_goals}` : ""}
  ${
    unique_value_proposition
      ? `Unique Value Proposition: ${unique_value_proposition}`
      : ""
  }
  ${
    initial_features?.length
      ? `Initial Features: ${initial_features.join(", ")}`
      : ""
  }
  ${
    inspiration_apps?.length
      ? `Inspiration Apps: ${inspiration_apps.join(", ")}`
      : ""
  }
  ${tech_stack ? `Tech Stack: ${tech_stack}` : ""}
  `.trim();

  return `
You're a lean solo founder building a production-grade MVP using scalable, modern tools. You must:

- Focus on real pain point
- Include authentication and billing system
- Suggest only essential features

Respond with a valid JSON object:
{
  "product_name": string,
  "one_liner": string,
  "core_pain": string,
  "mvp_goal": string,
  "stack": {
    "frontend": string,
    "backend": string,
    "auth": string,
    "db": string,
    "infra": string,
    "ai": string | null
  },
  "features": [
    {
      "rank": number,
      "feature": string,
      "description": string,
      "tasks": string[]
    }
  ],
  "launch_plan": string[],
  "mvp_summary": string
}


Input:
{
  "app_name": "${app_name}",
  "problem_statement": "${problem_statement}"${
    optionalFieldsSummary
      ? `,
  "additional_context": "${optionalFieldsSummary.replace(/\n\s+/g, " ")}"`
      : ""
  }
}
`.trim();
}
