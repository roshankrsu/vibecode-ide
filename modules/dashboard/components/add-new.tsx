"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LanguageSelectingModal from "./language-selecting-modal";
import { useRouter } from "next/navigation";
import { createPlayground } from "../actions";
import { toast } from "sonner";

type Language = "javascript" | "python" | "c" | "cpp" | "java" | "html";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    language: Language;
    description?: string;
  }) => {
    try {
      const res = await createPlayground(data);

      toast.success("Project created successfully");

      setIsModalOpen(false);

      router.push(`/playground/${res?.id}`);
    } catch {
      toast.error("Failed to create project");
    }
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group px-6 py-6 flex flex-col sm:flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-background hover:border-[#7C3AED] hover:scale-[1.02]
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
      >
        <div className="flex flex-row justify-center items-start gap-4">
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white group-hover:bg-[#f5f3ff] group-hover:border-[#7C3AED] group-hover:text-[#7C3AED] transition-colors duration-300"
            size="icon"
          >
            <Plus
              size={30}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </Button>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#7C3AED]">New Project</h1>

            <p className="text-sm text-muted-foreground max-w-55">
              Create a new coding project
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/add-new.svg"
            alt="Create new project"
            width={150}
            height={150}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <LanguageSelectingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
