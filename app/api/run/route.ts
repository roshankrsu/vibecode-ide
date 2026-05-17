import { NextRequest } from "next/server";
import { compilerMap } from "@/lib/compiler";

export async function POST(req: NextRequest) {
  try {
    const { code, language, input } = await req.json();

    if (language === "html") {
      return Response.json({
        error: "HTML uses browser preview",
      });
    }

    const compiler = compilerMap[language as keyof typeof compilerMap];

    if (!compiler) {
      return Response.json({ error: "Unsupported language" }, { status: 400 });
    }

    const response = await fetch(
      "https://api.onlinecompiler.io/api/run-code-sync/",
      {
        method: "POST",
        headers: {
          Authorization: process.env.ONLINE_COMPILER_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compiler,
          code,
          input: input || "",
        }),
      },
    );

    const result = await response.json();

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Execution failed" }, { status: 500 });
  }
}
