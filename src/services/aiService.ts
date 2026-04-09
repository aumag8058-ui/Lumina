import { GoogleGenAI, Type } from "@google/genai";
import { Ebook } from "@/types";
import { EBOOKS } from "@/constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getPersonalizedRecommendations(userInterests: string): Promise<Ebook[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the user's interests: "${userInterests}", recommend the best ebooks from this list: ${JSON.stringify(EBOOKS.map(b => ({ id: b.id, title: b.title, category: b.category })))}. Return only a JSON array of ebook IDs.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    const recommendedIds: string[] = JSON.parse(response.text || "[]");
    return EBOOKS.filter(ebook => recommendedIds.includes(ebook.id));
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return EBOOKS.slice(0, 2); // Fallback to first two
  }
}
