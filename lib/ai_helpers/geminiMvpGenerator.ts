import { GoogleGenAI } from "@google/genai";
import prisma from "@/lib/prisma"; // Adjust path as needed

export async function generateWithGemini({
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
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
  });

  const config = {
    responseMimeType: "text/plain",
  };

  const model = "gemini-2.5-flash-preview-04-17";
  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const stream = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";

  for await (const chunk of stream) {
    const part = chunk?.candidates?.[0]?.content?.parts?.[0];
    if (typeof part?.text === "string") {
      fullText += part.text;
    }
  }

  console.log("Raw Gemini Output:\n", fullText);

  let parsed;

  try {
    const cleaned = fullText
      .trim()
      .replace(/^```json\\s*/, "")
      .replace(/```$/, "");
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse response as JSON", err);
    throw new Error("Invalid JSON from Gemini response");
  }

  // ✅ Return result first
  const result = parsed;

  // 🔥 Background logging
  void (async () => {
    try {
      await prisma.aiLog.create({
        data: {
          userId,
          productId,
          type,
          ai_model: "gemini",
          input: { prompt },
          output: result,
        },
      });

      const estimatedTokens =
        Math.ceil(prompt.length / 4) + Math.ceil(fullText.length / 4);

      await prisma.tokenUsage.create({
        data: {
          userId,
          purpose: type,
          tokens: estimatedTokens,
        },
      });
    } catch (err) {
      console.error("Background logging failed:", err);
    }
  })();

  return result;
}
