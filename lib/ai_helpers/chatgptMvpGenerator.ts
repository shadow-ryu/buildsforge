import { OpenAI } from "openai"; // Assumes openai SDK installed
import { generateMvpPrompt, SaaSInput } from "./generateMvpPrompt";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateMvpWithChatGPT(input: SaaSInput) {
  const prompt = generateMvpPrompt(input);

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  let content = response.choices[0].message.content;

  if (!content) {
    throw new Error("No content received from OpenAI");
  }

  if (content.startsWith("```json")) {
    content = content.replace(/^```json\s*/, "").replace(/```$/, "");
  }

  // Parse the JSON string into a real object
  const json = JSON.parse(content);
  return json;
}
