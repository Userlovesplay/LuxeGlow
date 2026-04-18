import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const AI_PROVIDER = process.env.AI_PROVIDER || "openrouter";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";

export async function POST(request: Request) {
  try {
    // Validar provider e chave
    if (AI_PROVIDER === "google") {
      return await handleGoogleAI();
    } else if (AI_PROVIDER === "openrouter") {
      const body = await request.json();
      return await handleOpenRouter(body);
    } else {
      return NextResponse.json(
        { error: `Provider desconhecido: ${AI_PROVIDER}` },
        { status: 400 }
      );
    }

    async function handleGoogleAI() {
      if (!GOOGLE_API_KEY) {
        console.error("❌ GOOGLE_API_KEY não configurada");
        return NextResponse.json(
          { error: "GOOGLE_API_KEY não configurada. Verifique seu .env.local" },
          { status: 500 }
        );
      }

      const body = await request.json();
      const { answers } = body;

      if (!answers) {
        return NextResponse.json(
          { error: "Respostas do quiz não fornecidas" },
          { status: 400 }
        );
      }

      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const generationConfig = {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const prompt = buildPrompt(answers);

      console.log("📤 Enviando para Google Gemini...");

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
        safetySettings,
      });

      console.log("📨 Resposta recebida do Google AI");

      if (
        !result.response ||
        !result.response.candidates ||
        !result.response.candidates[0]
      ) {
        console.error("❌ Resposta inválida:", result);
        return NextResponse.json(
          { error: "Resposta inválida do Google AI" },
          { status: 500 }
        );
      }

      const text = result.response.candidates[0].content.parts[0].text;

      if (!text) {
        return NextResponse.json(
          { error: "Resposta vazia do Google AI" },
          { status: 500 }
        );
      }

      const cleanedText = text.replace(/```json\n?|\n?```/g, "").trim();
      const productRecommendation = JSON.parse(cleanedText);

      console.log("✅ Quiz processado com sucesso!");
      return NextResponse.json(productRecommendation);
    }

    async function handleOpenRouter(body: any) {
      if (!OPENROUTER_API_KEY) {
        console.error("❌ OPENROUTER_API_KEY não configurada");
        return NextResponse.json(
          { error: "OPENROUTER_API_KEY não configurada. Verifique seu .env.local" },
          { status: 500 }
        );
      }

      const { answers } = body;

      if (!answers) {
        return NextResponse.json(
          { error: "Respostas do quiz não fornecidas" },
          { status: 400 }
        );
      }

      const prompt = buildPrompt(answers);

      console.log("📤 Enviando para OpenRouter...");

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://luxe-glow-fbct.vercel.app/",
          "X-Title": "LuxeGlow Quiz API",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini", // Modelo rápido e gratuito
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 2048,
          response_format: { type: "json_object" },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("❌ Erro OpenRouter:", errorData);
        throw new Error(
          `OpenRouter error: ${response.status} - ${JSON.stringify(errorData)}`
        );
      }

      const data = await response.json();

      console.log("📨 Resposta recebida do OpenRouter");

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error("❌ Resposta inválida:", data);
        return NextResponse.json(
          { error: "Resposta inválida do OpenRouter" },
          { status: 500 }
        );
      }

      const text = data.choices[0].message.content;

      if (!text) {
        return NextResponse.json(
          { error: "Resposta vazia do OpenRouter" },
          { status: 500 }
        );
      }

      const cleanedText = text.replace(/```json\n?|\n?```/g, "").trim();
      const productRecommendation = JSON.parse(cleanedText);

      console.log("✅ Quiz processado com sucesso!");
      return NextResponse.json(productRecommendation);
    }
  } catch (error) {
    console.error("❌ Quiz API Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    return NextResponse.json(
      { error: `Erro ao processar sua análise de pele: ${errorMessage}` },
      { status: 500 }
    );
  }
}

function buildPrompt(answers: any): string {
  return `Você é uma dermatologista de luxo da LuxeGlow, uma marca premium de skincare com IA.

Com base nas respostas do quiz de pele do cliente, crie uma recomendação de produto personalizado.

Respostas do cliente:
- Idade: ${answers.age}
- Tipo de pele: ${answers.skinType}
- Principais preocupações: ${answers.concerns?.join(", ")}
- Clima da região: ${answers.climate}
- Rotina atual: ${answers.currentRoutine}
- Objetivos principais: ${answers.goals?.join(", ")}

Responda APENAS com um JSON válido (sem markdown, sem código, apenas o JSON puro) no seguinte formato:
{
  "productName": "Nome elegante e luxuoso do produto personalizado",
  "tagline": "Uma frase curta e sofisticada sobre o produto",
  "description": "Descrição detalhada e luxuosa do produto em 2-3 frases",
  "keyIngredients": ["ingrediente1", "ingrediente2", "ingrediente3", "ingrediente4"],
  "benefits": ["benefício1", "benefício2", "benefício3", "benefício4"],
  "price": "R$ XXX,00",
  "usage": "Instruções de uso elegantes",
  "skinMatch": "Porcentagem de compatibilidade com a pele (ex: 98%)"
}`;
}
