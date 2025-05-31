// export interface SaaSInput {
//   app_name: string;
//   problem_statement: string;
//   target_audience: string;
//   user_goals: string;
//   unique_value_proposition: string;
//   initial_features: string[];
//   inspiration_apps: string[];
//   tech_stack: string;
// }

// export function generateMvpPrompt(input: SaaSInput): string {
//   return `
//   You are an expert product strategist, technical architect, and SaaS MVP designer.
  
//   Based on the following structured user input describing a SaaS idea, generate a **production-grade MVP plan** in JSON format. The MVP should be suitable for indie developers or solo founders aiming for a scalable, big-tech-ready product.
  
//   Output must be in this format:
//   \`\`\`json
//   {
//     "product_name": "<Name>",
//     "one_liner": "<Concise value proposition>",
//     "key_features": [
//       {
//         "rank": <number>,
//         "feature": "<Core feature name>",
//         "description": "<Feature description>",
//         "tasks": [
//           "<Detailed implementation task 1>",
//           "<Detailed implementation task 2>",
//           "<Detailed implementation task 3>"
//         ]
//       }
//       // more features
//     ]
//   }
//   \`\`\`
  
//   Ranking must prioritize **core differentiating functionality** (rank 1 = most essential). Tasks must be actionable and implementation-ready.
  
//   INPUT:
//   \`\`\`json
//   ${JSON.stringify(input, null, 2)}
//   \`\`\`
//   `;
// }
// export function generateMvpPrompt_MarcAndTheoStyle(input: SaaSInput): string {
//   return `
// You are a hybrid solo SaaS founder — combining the lean, market-validated mindset of **Marc Lou** and the technical depth and product-first thinking of **Theo Browne** (t3.gg, Ping.gg).

// Your goal is to create a **tiny but technically solid MVP** that:
// - **Solves a real pain point**, fast.
// - Can be shipped in **under 7 days**.
// - Uses **production-ready tech** without overbuilding.
// - Leverages Marc’s lean philosophy to validate with users, and Theo’s engineering mindset to ship something robust.

// ### Mindset Split:
// - Marc Lou: Keep it minimal. Validate. No bloat. Ship now.
// - Theo Browne: Great DX. Smart infra. Don't hack what will break.

// ---

// ### Output format:
// \`\`\`json
// {
//   "product_name": "<Short, brandable name>",
//   "one_liner": "<Clear sentence describing what it does>",
//   "core_pain": "<Specific, real-world pain it solves>",
//   "mvp_goal": "<What this MVP is built to prove or disprove>",
//   "stack": {
//     "frontend": "<e.g. Next.js + shadcn/ui>",
//     "backend": "<e.g. tRPC, Supabase, Next API Routes>",
//     "auth": "<e.g. Clerk, Lucia, Supabase Auth>",
//     "db": "<e.g. Postgres, Prisma, Supabase>",
//     "infra": "<e.g. Vercel, Railway, Fly.io>",
//     "ai": "<e.g. OpenAI, Langchain, Replicate or n/a>"
//   },
//   "features": [
//     {
//       "rank": 1,
//       "feature": "<Essential feature>",
//       "description": "<Brief what it does>",
//       "tasks": [
//         "<Fast implementation task>",
//         "<Infra/auth setup if needed>",
//         "<Basic test or demo readiness>"
//       ]
//     }
//     // Add more only if mission-critical
//   ],
//   "launch_plan": [
//     "<How to get real users ASAP>",
//     "<How to collect qualitative or usage data>",
//     "<How to iterate in days, not weeks>"
//   ],
//   "mvp_summary": "<In plain English: What you're building, why it matters, and how you’ll know if it's working>"
// }
// \`\`\`

// Keep it fast, real, and scalable. Default to **proven tools**, not building from scratch unless necessary. Use Theo’s taste in DX and Marc’s lean bias to cut ruthlessly.

// INPUT:
// \`\`\`json
// ${JSON.stringify(input, null, 2)}
// \`\`\`
// `;
// }
// export function generateMvpPrompt_MarcLouStyle(input: SaaSInput): string {
//   return `
//   You are a lean startup hacker and solo SaaS founder in the style of Marc Lou.

//   Your goal is to create a **tiny but valuable MVP** that can be shipped in under a week and prove user demand. Based on the following structured SaaS idea, design a **stripped-down, launchable MVP** that focuses only on the **core feature(s)** needed to deliver value and validate interest.

//   Output must be in this JSON format:
//   \`\`\`json
//   {
//     "product_name": "<Name>",
//     "one_liner": "<What it does in one sentence>",
//     "core_pain": "<Real-world pain point this solves>",
//     "mvp_goal": "<What this MVP aims to validate or solve>",
//     "stack": ["<Frontend>", "<Backend>", "<Auth>", "<DB>", "<AI>", ...],
//     "features": [
//       {
//         "rank": <number>,
//         "feature": "<Core feature name>",
//         "description": "<Short description>",
//         "tasks": [
//           "<Fast, shippable implementation task 1>",
//           "<Fast, shippable implementation task 2>",
//           "<Fast, shippable implementation task 3>"
//         ]
//       }
//       // add only as necessary
//     ],
//     "launch_plan": [
//       "<Step 1 to validate or gather feedback>",
//       "<Step 2 to get first users>",
//       "<Step 3 to iterate based on feedback>"
//     ],
//     "mvp_summary": "<Concise summary of what will be built and why, in plain English>"
//   }
//   \`\`\`

//   Keep it extremely lean — no extra features, only what’s required to deliver value and learn. Prefer off-the-shelf tools. Aim for fast shipping.

//   INPUT:
//   \`\`\`json
//   ${JSON.stringify(input, null, 2)}
//   \`\`\`
//   `;
// }

// export function generateMvpPrompt_RealWorld(input: SaaSInput): string {
//   return `
// You're a lean solo founder with deep product sense and engineering expertise. Think like **Marc Lou** (ship fast, validate lean) and **Theo Browne** (build strong foundations with proven tech).

// Based on the following SaaS idea, create a **production-grade MVP plan** in JSON that:
// - Focuses on *solving a real pain point fast*
// - Can ship in **under 7 days**
// - Uses **modern, scalable tools**
// - Prioritizes essential features only

// ### Output format:
// \`\`\`json
// {
//   "product_name": "<Brandable name>",
//   "one_liner": "<What it does in 1 sentence>",
//   "core_pain": "<What pain this solves>",
//   "mvp_goal": "<What this MVP is built to validate or prove>",
//   "stack": {
//     "frontend": "...",
//     "backend": "...",
//     "auth": "...",
//     "db": "...",
//     "infra": "...",
//     "ai": "..." // or null
//   },
//   "features": [
//     {
//       "rank": 1,
//       "feature": "<Feature name>",
//       "description": "<What it does>",
//       "tasks": [
//         "<Clear, small implementation task>",
//         "... more"
//       ]
//     }
//   ],
//   "launch_plan": [
//     "<First feedback step>",
//     "<Early user activation>",
//     "<How to validate demand>"
//   ],
//   "mvp_summary": "<In plain English: what this MVP does and why it matters>"
// }
// \`\`\`

// ### INPUT:
// \`\`\`json
// ${JSON.stringify(input, null, 2)}
// \`\`\`
// `;
// }

// export function generateRoadmapPrompt({
//   tasks,
//   startDate,
//   dailyHours,
//   product,
// }: {
//   tasks: { title: string; description: string; category: string; id: string }[];
//   startDate: string;
//   dailyHours: number;
//   product: {
//     name: string;
//     description: string;
//     deadline: string;
//     techStack: string;
//     uniqueValueProp: string;
//     inspirationApps: string;
//   };
// }) {
//   return `
// You're a focused solo indie hacker (like Theo from T3.gg or Marc Lou), planning a structured build sprint for a product called **"${
//     product.name
//   }"**.

// ---

// ### 🧠 Product Overview:
// - **One-liner**: ${product.description}
// - **Unique Value Prop**: ${product.uniqueValueProp}
// - **Tech Stack**: ${product.techStack}
// - **Inspiration Apps**: ${product.inspirationApps}
// - **Start Date**: ${startDate}
// - **Deadline**: ${new Date(product.deadline).toISOString().split("T")[0]}
// - **Work Capacity**: ${dailyHours} hours/day

// ---

// ### 🎯 Objective:
// Create a practical, day-by-day roadmap to build the MVP from start to finish — efficiently, sustainably, and on time. The roadmap should:
// - Complete **all core functionality first**
// - Then cover **required supporting features** (e.g., auth, infra, payments)
// - Then use remaining time for **UI polish, UX flow, QA, and prep for launch**

// ---

// ### 🛠️ Task Prioritization (in this order):
// 1. **Core** – features essential to product value (AI policy generation, editor, save/load)
// 2. **Auth / Infra** – user auth (Clerk), Supabase setup, backend endpoints
// 3. **Payments** – Stripe billing & gating (if applicable)
// 4. **UI / UX Polish** – layout, responsiveness, usability
// 5. **Deployment & Extras** – bugfixing, polish, launch

// ---

// ### ⏱️ Time Estimation Rules:
// - Default: **1 hour**
// - If task title includes: **"setup"**, **"integrate"**, **"auth"**, **"payment"**, **"deployment"** → estimate **2 hours**
// - Total time per day must **not exceed ${dailyHours} hours**

// ---

// ### 🚧 Constraints:
// - **Do not invent new features or extras**
// - **Only add new tasks if they are strictly required** to make the product functional (e.g., auth, DB, payments)
// - If you **add a required new task**, give it:
//   - A **generated \`parent_task_id\`**
//   - A **meaningful \`title\` and \`description\`** so it can be saved as a synced parent task
//   - A category like "auth", "infra", or "payment"

// ---

// ### 📋 Provided Task List:
// ${tasks
//   .map((t) => `- ${t.title} [${t.category}]: ${t.description} (id: ${t.id})`)
//   .join("\n")}

// ---

// ### 📦 Output Format:
// Respond with **raw valid JSON** only, in the following format:

// \`\`\`json
// [
//   {
//     "day": 1,
//     "date": "YYYY-MM-DD", // start with ${startDate}
//     "tasks": [
//       {
//         "title": "Task title",
//         "description": "Short description of what is done",
//         "category": "core" | "ui" | "infra" | "auth" | "polish" | "payment",
//         "estimated_hours": 1 or 2,
//         "parent_task_id": "existing-or-generated-id"
//       }
//     ],
//     "total_hours": X // total estimated hours that day (max: ${dailyHours})
//   },
//   ...
// ]
// \`\`\`

// - For **existing tasks**, use their given ID as \`parent_task_id\`.
// - For **new essential tasks**, generate a new UUID or string as \`parent_task_id\` and ensure their title/description make them usable as parent tasks.

// Now generate the roadmap.
// `;
// }

// export function generateBuildLogPrompt({
//   tasks,
//   notes,
//   product,
//   day,
// }: {
//   tasks: {
//     title: string;
//     description?: string;
//     category?: string;
//     status: "completed" | "missed";
//   }[];
//   notes: string;
//   day: number;
//   product: {
//     name: string;
//     description: string;
//     uniqueValueProp: string;
//     techStack: string;
//     inspirationApps: string;
//   };
// }) {
//   return `
// You're a solo founder building a SaaS called **${product.name}**.

// Today is **Day ${day}** of the build.

// Write a gritty, honest **build log** inspired by Theo (T3.gg):
// - Speak like a dev. Be raw, no fluff.
// - Show what got done, where you got stuck, and what decisions you made.
// - Okay to rant if needed. Be real.
// - Keep it under 500 characters.
// - Style it like a **raw markdown dev log**.

// Also, include a **tweet-style summary** — inspired by Marc Lou:
// - Punchy. Confident. Personal.
// - Max 200 characters.
// - Focus on one clear win or insight.
// - Throw in 2–3 relevant hashtags (e.g., #buildinpublic #indiehacker #founderlife).

// ---

// ### 🧠 Product Context:
// - **Product**: ${product.name}
// - **One-liner**: ${product.description}
// - **Unique Value**: ${product.uniqueValueProp}
// - **Tech Stack**: ${product.techStack}
// - **Inspired By**: ${product.inspirationApps}

// ---

// ### ✅ Tasks Completed:
// ${
//   tasks
//     .filter((t) => t.status === "completed")
//     .map(
//       (t) =>
//         `- ${t.title}${t.category ? ` [${t.category}]` : ""}${
//           t.description ? `: ${t.description}` : ""
//         }`
//     )
//     .join("\n") || "- None"
// }

// ---

// ### ❌ Tasks Missed:
// ${
//   tasks
//     .filter((t) => t.status === "missed")
//     .map(
//       (t) =>
//         `- ${t.title}${t.category ? ` [${t.category}]` : ""}${
//           t.description ? `: ${t.description}` : ""
//         }`
//     )
//     .join("\n") || "- None"
// }

// ---

// ### 📝 Notes:
// ${notes}

// ---

// Now return a **valid JSON object** with two fields:

// 1. \`markdown\`: The build log in raw markdown. Start with:  
//    **Day ${day} of building ${product.name} –**  
//    Write up to **500 characters**. Be dev-centric, real, and focused on the journey. Group by themes. Mention blockers, progress, or tradeoffs.

// 2. \`tweet\`: A tweet-style summary (max **200 characters**) in Marc Lou’s tone. Show a single win or takeaway. Keep it punchy. Add 2–3 hashtags.

// 📌 Return only the JSON. No markdown. No preamble. No commentary. Format like:

// \`\`\`json
// {
//   "markdown": "your markdown summary here",
//   "tweet": "your tweet here"
// }
// \`\`\`
// `;
// }
