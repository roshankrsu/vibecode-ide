"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useFileExplorer } from "@/modules/playground/hooks/useFileExplorer";

export function PlaygroundHeader() {
  const { activeFileId, openFiles } = useFileExplorer();

  const selectedFile = activeFileId
    ? openFiles.find((f) => f.id === activeFileId)
    : null;
  const hasUnsavedChanges = openFiles.some((f) => f.hasUnsavedChanges);

  return (
    <header className="h-14 border-b flex items-center px-4 justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2" />
        <h1 className="text-lg font-semibold">Code Editor</h1>
      </div>

      {selectedFile && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {selectedFile.fileExtension
              ? `${selectedFile.filename}.${selectedFile.fileExtension}`
              : selectedFile.filename}
          </span>

          {selectedFile.hasUnsavedChanges && (
            <span className="text-xs text-amber-500">Unsaved changes</span>
          )}
        </div>
      )}
    </header>
  );
}
