import { GoogleGenAI } from "@google/genai";
import prisma from "@/lib/prisma";

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
  const contents = [{ role: "user", parts: [{ text: prompt }] }];

  const stream = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";
  let usageMetadata = null;
  console.log(stream, "stream");

  for await (const chunk of stream) {
    const part = chunk?.candidates?.[0]?.content?.parts?.[0];
    if (typeof part?.text === "string") {
      fullText += part.text;
    }
    if (!usageMetadata && chunk?.usageMetadata) {
      usageMetadata = chunk.usageMetadata;
    }
  }

  const cleaned = fullText
    .trim()
    .replace(/^```json\s*/, "")
    .replace(/```$/, "");
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse Gemini output", err);
    throw new Error("Invalid JSON from Gemini");
  }

  void (async () => {
    try {
      const estimatedTokens =
        usageMetadata?.totalTokens ??
        Math.ceil(prompt.length / 4 + fullText.length / 4);

      await prisma.aiLog.create({
        data: {
          userId,
          productId,
          type,
          ai_model: "gemini",
          input: { prompt },
          output: parsed,
        },
      });

      await prisma.tokenUsage.create({
        data: {
          userId,
          purpose: type,
          tokens: estimatedTokens,
        },
      });
    } catch (err) {
      console.error("Gemini DB logging failed", err);
    }
  })();

  return parsed;
}
