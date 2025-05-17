import { OpenAI } from "openai";
import prisma from "@/lib/prisma"; // adjust to your project structure

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateWithChatGPT({
  prompt,
  userId,
  productId,
  type,
}: {
  prompt: string;
  userId: string;
  productId: string;
  type: "mvp_generation" | "roadmap" | "build_log";
}) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  let content = response.choices[0].message.content;
  console.log("Raw GPT Output:\n", content);

  if (!content) {
    throw new Error("No content received from OpenAI");
  }

  // Normalize and strip markdown code fences
  content = content.trim();

  if (content.startsWith("```json") || content.startsWith("```")) {
    content = content
      .replace(/^```(?:json)?\s*/, "")
      .replace(/```$/, "")
      .trim();
  }

  // 🔥 Background DB log
  void (async () => {
    try {
      await prisma.aiLog.create({
        data: {
          userId,
          productId,
          type,
          ai_model: "gpt-4",
          input: { prompt },
          output: result,
        },
      });

      const promptTokens = prompt.length / 4;
      const responseTokens = content.length / 4;
      const totalTokens = Math.ceil(promptTokens + responseTokens);

      await prisma.tokenUsage.create({
        data: {
          userId,
          purpose: type,
          tokens: totalTokens,
        },
      });
    } catch (err) {
      console.error("GPT DB logging failed:", err);
    }
  })();

  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch (err) {
    console.error("Failed to parse GPT response as JSON", err);
    throw new Error("Invalid JSON from GPT response");
  }
  console.log(content, "Parsed GPT Output:\n", parsed);

  return parsed;
}
