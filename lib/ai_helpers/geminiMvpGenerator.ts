import { GoogleGenerativeAI } from "@google/generative-ai"; // Gemini 1.5 SDK
import { generateMvpPrompt, SaaSInput } from "./generateMvpPrompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateMvpWithGemini(input: SaaSInput) {
  const prompt = generateMvpPrompt(input);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}
