import { db } from "@/lib/db";
import { NextRequest } from "next/server";

const defaultTemplates = {
  javascript: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "main",
        fileExtension: "js",
        content: 'console.log("Hello World");',
      },
    ],
  },

  python: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "main",
        fileExtension: "py",
        content: 'print("Hello World")',
      },
    ],
  },

  c: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "main",
        fileExtension: "c",
        content: `#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`,
      },
    ],
  },

  cpp: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "main",
        fileExtension: "cpp",
        content: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`,
      },
    ],
    
  },
  java: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "Main",
        fileExtension: "java",
        content: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
      },
    ],
  },

  html: {
    folderName: "root",
    items: [
      {
        id: "1",
        filename: "index",
        fileExtension: "html",
        content: `<!DOCTYPE html>
<html>
<head>
  <title>Preview</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
      },
    ],
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: "Missing playground ID" }, { status: 400 });
  }

  const playground = await db.playground.findUnique({
    where: { id },
  });

  if (!playground) {
    return Response.json({ error: "Playground not found" }, { status: 404 });
  }

  const language =
    (playground.template as keyof typeof defaultTemplates) || "javascript";

  const templateJson =
    defaultTemplates[language] || defaultTemplates.javascript;

  return Response.json(
    {
      success: true,
      templateJson,
    },
    { status: 200 },
  );
}
