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

// ✅ Prompt 1: MVP Plan (Real-World Upgrade)
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
You're a lean solo founder with deep product sense and engineering expertise. Think like **Marc Lou** (ship fast, validate lean) and **Theo Browne** (build strong foundations with proven tech).

Based on the following SaaS idea, create a **production-grade MVP plan** in JSON that:
- Focuses on *solving a real pain point fast*
- Uses **modern, scalable tools**
- Prioritizes essential features only

✅ Your MVP **must include**:
- **Authentication**
- **Billing system (e.g. Stripe)**

### Output format:
\`\`\`json
{
  "product_name": "<Brandable name>",
  "one_liner": "<What it does in 1 sentence>",
  "core_pain": "<What pain this solves>",
  "mvp_goal": "<What this MVP is built to validate or prove>",
  "stack": {
    "frontend": "...",
    "backend": "...",
    "auth": "...",
    "db": "...",
    "ai": "..." // or null
  },
  "features": [
    {
      "rank": 5,
      "feature": "Authentication",
      "description": "Enable secure sign-up/sign-in with session management",
      "tasks": [
        "Implement email/password login",
        "Add OAuth (optional)",
        "Set up protected routes"
      ]
    },
    {
      "rank": 6,
      "feature": "Billing System",
      "description": "Let users subscribe to paid plans",
      "tasks": [
        "Set up Stripe account and products",
        "Implement checkout flow",
        "Handle webhooks for subscription status"
      ]
    },

  ],
  "launch_plan": [
    "<First feedback step>",
    "<Early user activation>",
    "<How to validate demand>"
  ],
  "mvp_summary": "<In plain English: what this MVP does and why it matters>"
}
\`\`\`

### INPUT:
\`\`\`json
{
  "app_name": "${app_name}",
  "problem_statement": "${problem_statement}"${
    optionalFieldsSummary
      ? `,
  "additional_context": "${optionalFieldsSummary.replace(/\n\s+/g, " ")}"`
      : ""
  }
\`\`\`
`;
}

// ✅ Prompt 2: Roadmap Generator with Milestone Goals
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
  You're a focused solo indie hacker (like Theo from T3.gg or Marc Lou), planning a build sprint for a product called **${
    product.name
  }**.
  
  ---
  
  ### 📌 Context:
  - **One-liner**: ${product.description}
  - **Value Prop**: ${product.uniqueValueProp}
  - **Stack**: ${product.techStack}
  - **Inspiration**: ${product.inspirationApps}
  - **Start Date**: ${startDate}
  - **Deadline**: ${new Date(product.deadline).toISOString().split("T")[0]}
  - **Daily Capacity**: ${dailyHours} hours
  
  ---
  
  ### 🧠 Output: Day-by-day roadmap that:
  - Ships **core value** fast
  - Includes milestone + visual progress
  - Prioritizes shipping over perfection
  
  ---
  
  ### Output Format:
  \`\`\`json
  [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "milestone_goal": "<What gets unlocked today>",
      "ship_check": "<What user can see/do that proves progress>",
      "tasks": [
        {
          "title": "...",
          "description": "...",
          "category": "core" | "ui" | "infra" | "auth" | "polish" | "payment",
          "estimated_hours": 1 or 2,
          "parent_task_id": "existing-or-generated-id"
        }
      ],
      "total_hours": X
    }
  ]
  \`\`\`
  
  Now generate the roadmap using this task list:
  ${tasks
    .map((t) => `- ${t.title} [${t.category}]: ${t.description} (id: ${t.id})`)
    .join("\n")}
  `;
}

// ✅ Prompt 3: Build Log with Realistic Dev + Tweet Output
export function generateBuildLogPromptUpgraded({
  tasks,
  product,
  day,
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
}) {
  return `
  You're a solo founder building **${product.name}**.
  Today is **Day ${day}** of your build journey.
  
  Write:
  1. A **markdown build log** (raw, honest, gritty — like Theo). Up to 500 chars.
  2. A **tweet-style summary** (punchy, Marc Lou tone, max 200 chars).
  
  ---
  
  ### Product:
  - ${product.description}
  - ${product.uniqueValueProp}
  - Stack: ${product.techStack}
  - Inspiration: ${product.inspirationApps}
  
  ### Completed:
  ${
    tasks
      .filter((t) => t.status === "completed")
      .map((t) => `- ${t.title}${t.category ? ` [${t.category}]` : ""}`)
      .join("\n") || "- None"
  }
  
  ### Missed:
  ${
    tasks
      .filter((t) => t.status === "missed")
      .map((t) => `- ${t.title}${t.category ? ` [${t.category}]` : ""}`)
      .join("\n") || "- None"
  }
  
  Return JSON:
  \`\`\`json
  {
    "markdown": "Day ${day} of building ${product.name} – raw log here",
    "tweet": "short summary for X"
  }
  \`\`\`
  `;
}
