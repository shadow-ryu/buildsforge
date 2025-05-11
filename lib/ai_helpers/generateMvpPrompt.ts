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

export function generateMvpPrompt(input: SaaSInput): string {
  return `
  You are an expert product strategist, technical architect, and SaaS MVP designer.
  
  Based on the following structured user input describing a SaaS idea, generate a **production-grade MVP plan** in JSON format. The MVP should be suitable for indie developers or solo founders aiming for a scalable, big-tech-ready product.
  
  Output must be in this format:
  \`\`\`json
  {
    "product_name": "<Name>",
    "one_liner": "<Concise value proposition>",
    "key_features": [
      {
        "rank": <number>,
        "feature": "<Core feature name>",
        "description": "<Feature description>",
        "tasks": [
          "<Detailed implementation task 1>",
          "<Detailed implementation task 2>",
          "<Detailed implementation task 3>"
        ]
      }
      // more features
    ]
  }
  \`\`\`
  
  Ranking must prioritize **core differentiating functionality** (rank 1 = most essential). Tasks must be actionable and implementation-ready.
  
  INPUT:
  \`\`\`json
  ${JSON.stringify(input, null, 2)}
  \`\`\`
  `;
}

export function generateRoadmapPrompt({
  tasks,
  startDate,
  dailyHours,
  product,
}: {
  tasks: { title: string; description: string; category: string }[];
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
You're a no-nonsense indie hacker (like Theo from T3.gg or Marc Lou) planning a build sprint for an MVP called "${
    product.name
  }".

Here’s the product context:
- One-liner: ${product.description}
- Unique value: ${product.uniqueValueProp}
- Stack: ${product.techStack}
- Inspiration: ${product.inspirationApps}
- Deadline: ${new Date(product.deadline).toISOString().split("T")[0]}
- Start Date: ${startDate}
- Daily time available: ${dailyHours} hours/day

You already have the full task list below. Your job is to **plan a roadmap** that:
- Helps solo founders ship the MVP **efficiently** and **without burnout**
- Keeps tasks grouped logically per day (e.g., front-end tasks together, infra setup together)
- Respects time limits (assume each task ≈ 1 hour unless task title includes “setup” or “design”, which may need more)
- Prioritizes core product delivery first (no fluff)

Here are the raw tasks:
${tasks.map((t) => `- ${t.title} [${t.category}]: ${t.description}`).join("\n")}

Now create a roadmap JSON array structured by day. Each object must include:
- "day": Day number (1, 2, 3...)
- "date": Exact date starting from ${startDate} — day 1 must be exactly ${startDate}, and each next day must increment by 1 day
- "tasks": array of { title, description, category }

🛑 Do NOT invent a different start date. Start from ${startDate} exactly. Do not skip days or shift the calendar.

📌 Only respond with **valid raw JSON** (no markdown). Do not explain anything or add commentary. This will be parsed directly and saved into a database.
`;
}

export function generateBuildLogPrompt({
  tasks,
  product,
  day,
}: {
  tasks: { title: string; description?: string; category?: string }[];
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
You're a solo founder building a SaaS called **${product.name}**.

Today is **Day ${day}** of the build.

Write a gritty, honest **build log** that covers what you actually got done. You're inspired by folks like Theo (T3.gg) and Marc Lou — so the tone is:
- concise, no fluff
- technical when needed
- a bit personal (mention blockers, decisions, tradeoffs)
- structured as a **raw markdown dev log**

---

### 🧠 Product Context:
- **Product**: ${product.name}
- **One-liner**: ${product.description}
- **Unique Value**: ${product.uniqueValueProp}
- **Tech Stack**: ${product.techStack}
- **Inspired By**: ${product.inspirationApps}

---

### ✅ Tasks Completed Today:
${tasks
  .map(
    (t) =>
      `- ${t.title}${t.category ? ` [${t.category}]` : ""}${
        t.description ? `: ${t.description}` : ""
      }`
  )
  .join("\n")}

---

Now return a **valid JSON object** with two fields:

1. \`markdown\`: The build log in raw markdown. Start with:  
   **Day ${day} of building ${product.name} –**  
   Write 1–2 concise paragraphs. Group tasks by theme. Mention decisions, frustrations, wins, and next steps.

2. \`tweet\`: A tweet-style summary (max 240 characters). Highlight 1–2 key wins, and include 2–3 relevant hashtags.  
   e.g., "#buildinpublic #indiehacker #saas"

📌 Return only the JSON. No markdown. No preamble. No commentary. Format like:


{
  "markdown": "your markdown summary here",
  "tweet": "your tweet here"
}

`;
}
