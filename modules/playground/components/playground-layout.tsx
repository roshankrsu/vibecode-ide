"use client";

import { PlaygroundHeader } from "./playground-header";

export function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <PlaygroundHeader />

      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}