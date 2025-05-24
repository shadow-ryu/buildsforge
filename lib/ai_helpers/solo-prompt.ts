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

// prompt 1.5: MVP Plan (Real-World Upgrade  to use with existing features)
export function generateMvpPrompt_RealWorld_With_Existing_Features(
  input: SaaSInput,
  existing: { name: string; description: string; tasks: string[] }[]
): string {
  return `
You're acting as **two legendary builders** designing an MVP together:

- **Marc Lou** (solo SaaS founder): ruthless about launching lean, fast, and validated. Focuses on value, not fluff.
- **Theo Browne** (from t3.gg): deeply technical, focused on long-term maintainability, scalable systems, and developer velocity.

You're helping them co-plan a production-grade MVP for a new SaaS tool.

---

### 🧠 The Problem:
They’re already halfway through building. These **features and their tasks are already implemented or planned**:

\`\`\`json
${JSON.stringify(existing, null, 2)}
\`\`\`

- **DO NOT recreate or reword these.**
- **DO NOT suggest tasks that already exist.**
- Only suggest **net-new features** or tasks that add meaningful value.
- If nothing new is needed — leave the feature list empty.

---

### 🚀 Your Mission:
Build a lean, launchable MVP in **under 7 days**, using battle-tested tools.

If core details are missing (like tech stack or goals), **fill them in based on best practices** for indie SaaS.

---

### 💡 Output Format:
\`\`\`json
{
  "product_name": "Brandable short name",
  "one_liner": "1-sentence value prop",
  "core_pain": "Clear problem being solved",
  "mvp_goal": "What are we validating?",
  "stack": {
    "frontend": "...",
    "backend": "...",
    "auth": "...",
    "db": "...",
    "infra": "...",
    "ai": "..." // or null
  },
  "features": [
    {
      "rank": 1,
      "feature": "Short name",
      "description": "Why it matters and what it does",
      "tasks": [
        "Clear implementation task",
        "Only if not already handled above"
      ]
    }
    // Add more if truly needed
  ],
  "launch_plan": [
    "Step-by-step lean validation",
    "First user activation",
    "How to know it's working"
  ],
  "mvp_summary": "Plain-English summary of what is being built and why it matters"
}
\`\`\`

---

### 📦 INPUT: Product Brief
\`\`\`json
${JSON.stringify(input, null, 2)}
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
You're a solo founder documenting your journey building **${product.name}**.

It’s **Day ${day}**, and your goal is to share a raw, reflective update — one that others can *feel*.

Write two things:

---

## 1. Markdown Build Log  
**Style**: journal entry or daily dev log  
**Tone**: honest, sharp, builder-first  
**Min Length**: 800 characters  

**Guidelines**:
- Group by what moved the needle (e.g. UI, infra, shipping win)  
- Mention blockers or tradeoffs if real  
- No swearing or excessive filler — authenticity matters more than edge  
- Don’t pretend to be perfect, just be *real*

${
  notes
    ? `\n### 📝 Notes:\n\n> ${notes.trim().replace(/\n/g, "\n> ")}\n`
    : ""
}

---

## 2. Tweet Summary  
**Style**: punchy Marc Lou-style  
**Min Length**: 400 characters  

**Tips**:
- Highlight ONE big win or insight  
- Must sound like a builder talking to other indie hackers  
- Add 2–3 relevant hashtags  
- Show energy, momentum, or clarity (no corporate fluff)

---

## 🛠 Product Context
- **Name**: ${product.name}  
- **What it does**: ${product.description}  
- **Why it matters**: ${product.uniqueValueProp}  
- **Stack**: ${product.techStack}  
- **Inspired by**: ${product.inspirationApps}

---

## ✅ Completed
${
  tasks
    .filter((t) => t.status === "completed")
    .map((t) => `- **${t.title}**${t.category ? ` _[${t.category}]_` : ""}`)
    .join("\n") || "- None"
}

## ❌ Missed
${
  tasks
    .filter((t) => t.status === "missed")
    .map((t) => `- **${t.title}**${t.category ? ` _[${t.category}]_` : ""}`)
    .join("\n") || "- None"
}

---

## 📤 Return in JSON only

\`\`\`json
{
  "markdown": "Day ${day} of building ${product.name} – log here",
  "tweet": "short tweet summary"
}
\`\`\`

---

Keep it lean, keep it real. Write like someone will read this 1 year from now and *feel exactly where you were*.
`;
}
