"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Check } from "lucide-react";
import { useMemo, useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiOpenjdk,
} from "react-icons/si";

type Language = "javascript" | "python" | "c" | "cpp" | "java" | "html";

type LanguageSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    language: Language;
    description?: string;
  }) => void;
};

interface LanguageOption {
  id: Language;
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const languages: LanguageOption[] = [
  {
    id: "javascript",
    name: "JavaScript",
    description: "Run JavaScript code instantly",
    icon: <SiJavascript size={22} />,
    tags: ["Frontend", "Backend", "Node.js"],
  },
  {
    id: "python",
    name: "Python",
    description: "Write and execute Python scripts",
    icon: <SiPython size={22} />,
    tags: ["AI", "Automation", "Scripting"],
  },
  {
    id: "c",
    name: "C",
    description: "Compile and run C programs",
    icon: <SiC size={22} />,
    tags: ["Systems", "Low-level"],
  },
  {
    id: "cpp",
    name: "C++",
    description: "Compile and run C++ programs",
    icon: <SiCplusplus size={22} />,
    tags: ["OOP", "Performance"],
  },
  {
    id: "java",
    name: "Java",
    description: "Compile and run Java programs",
    icon: <SiOpenjdk size={22} />,
    tags: ["OOP", "Backend", "JVM"],
  },
  {
    id: "html",
    name: "HTML",
    description: "Preview HTML instantly",
    icon: <SiHtml5 size={22} />,
    tags: ["Web", "Frontend"],
  },
];

const LanguageSelectionModal = ({
  isOpen,
  onClose,
  onSubmit,
}: LanguageSelectionModalProps) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>("javascript");

  const [projectName, setProjectName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    );
  }, [searchQuery]);

  const handleCreateProject = () => {
    const selected = languages.find((lang) => lang.id === selectedLanguage);

    if (!selected) return;

    onSubmit({
      title: projectName || `New ${selected.name} Project`,
      language: selected.id,
      description: selected.description,
    });

    setProjectName("");
    setSearchQuery("");
    setSelectedLanguage("javascript");
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#7C3AED]">
            Create New Project
          </DialogTitle>

          <DialogDescription>
            Choose a language for your coding workspace
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <Input
            placeholder="Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              placeholder="Search languages..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`relative cursor-pointer rounded-lg border p-5 transition-all
                  ${
                    selectedLanguage === lang.id
                      ? "border-[#7C3AED] shadow-[0_0_0_1px_#7C3AED]"
                      : "hover:border-[#7C3AED]/40"
                  }`}
              >
                {selectedLanguage === lang.id && (
                  <div className="absolute top-3 right-3 text-[#7C3AED]">
                    <Check size={18} />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#7C3AED]/10 p-3 text-[#7C3AED]">
                    {lang.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{lang.name}</h3>

                    <p className="text-sm text-muted-foreground mt-1">
                      {lang.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {lang.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button
              className="bg-[#7C3AED] hover:bg-[#6D28D9]"
              onClick={handleCreateProject}
            >
              Create Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelectionModal;
