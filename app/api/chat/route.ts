import { type NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface EnhancePromptRequest {
  prompt: string;
  context?: {
    fileName?: string;
    language?: string;
    codeContent?: string;
  };
}

async function generateAIResponse(messages: ChatMessage[]) {
  const systemPrompt = `You are an expert AI coding assistant. You help developers with:
- Code explanations and debugging
- Best practices and architecture advice
- Writing clean, efficient code
- Troubleshooting errors
- Code reviews and optimizations

Always provide clear, practical answers.
When showing code, use proper formatting with language-specific syntax.
Keep responses concise but comprehensive.`;

  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return completion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("AI generation error:", error);
    throw error;
  }
}

async function enhancePrompt(request: EnhancePromptRequest) {
  const enhancementPrompt = `You are a prompt enhancement assistant.

Take the user's coding prompt and improve it to be:
- more specific
- technically detailed
- clearer
- better structured

Original prompt:
"${request.prompt}"

Context:
${request.context ? JSON.stringify(request.context, null, 2) : "No additional context"}

Return ONLY the enhanced prompt.`;

  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: enhancementPrompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || request.prompt;
  } catch (error) {
    console.error("Prompt enhancement error:", error);
    return request.prompt;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Prompt enhancement
    if (body.action === "enhance") {
      const enhancedPrompt = await enhancePrompt(body as EnhancePromptRequest);

      return NextResponse.json({
        enhancedPrompt,
      });
    }

    // Regular AI chat
    const { message, history } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          error: "Message is required and must be a string",
        },
        {
          status: 400,
        },
      );
    }

    const validHistory = Array.isArray(history)
      ? history.filter(
          (msg: any) =>
            msg &&
            typeof msg === "object" &&
            typeof msg.role === "string" &&
            typeof msg.content === "string" &&
            ["user", "assistant"].includes(msg.role),
        )
      : [];

    const recentHistory = validHistory.slice(-10);

    const messages: ChatMessage[] = [
      ...recentHistory,
      {
        role: "user",
        content: message,
      },
    ];

    const aiResponse = await generateAIResponse(messages);

    if (!aiResponse) {
      throw new Error("Empty response from AI model");
    }

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in AI chat route:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to generate AI response",
        details: errorMessage,
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "AI Chat API is running",
    provider: "Groq",
    timestamp: new Date().toISOString(),
    info: "Use POST method to send chat messages or enhance prompts",
  });
}
