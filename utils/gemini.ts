
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Always use the direct process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartRecommendations = async (cartItems: string[], allProducts: Product[]): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Given these products in user's cart: [${cartItems.join(', ')}]. 
                 Recommend 4 IDs from this list: [${allProducts.map(p => `${p.id}:${p.name}`).join(', ')}]. 
                 Return ONLY a JSON array of IDs.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    // Access text property directly (it's a getter, do not call as a function)
    const text = response.text || "[]";
    const recommendedIds = JSON.parse(text.trim());
    return recommendedIds;
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return allProducts.slice(0, 4).map(p => p.id);
  }
};

export const getSmartSearchSuggestions = async (query: string, allProducts: Product[]): Promise<string[]> => {
  if (!query) return [];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user typed: "${query}". Suggest 5 possible product names from this catalog: [${allProducts.map(p => p.name).join(', ')}]. Return ONLY a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const text = response.text || "[]";
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini search suggestion error:", error);
    return [];
  }
};
