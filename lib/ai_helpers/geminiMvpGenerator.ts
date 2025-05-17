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
  let usageMetadata = null;

  for await (const chunk of stream) {
    const part = chunk?.candidates?.[0]?.content?.parts?.[0];
    if (typeof part?.text === "string") {
      fullText += part.text;
    }

    // Future support: capture token metadata if Gemini includes it in any chunk
    if (!usageMetadata && chunk?.usageMetadata) {
      usageMetadata = chunk.usageMetadata;
    }
  }

  console.log("Raw Gemini Output:\n", fullText);

  let parsed;

  try {
    const cleaned = fullText
      .trim()
      .replace(/^```json\s*/, "")
      .replace(/```$/, "");
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse response as JSON", err);
    throw new Error("Invalid JSON from Gemini response");
  }

  // ✅ Return parsed result first
  const result = parsed;

  void (async () => {
    try {
      const estimatedTokens =
        // @ts-expect-error Gemini types are not yet defined
        usageMetadata?.totalTokens ??
        Math.ceil(prompt.length / 4) + Math.ceil(fullText.length / 4);

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
