import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/hero.svg"} alt="Hero-Section" height={500} width={500} />

        <h1 className="z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-[#7C3AED] via-[#a78bfa] to-[#7C3AED] dark:from-[#7C3AED] dark:via-[#c4b5fd] dark:to-[#7C3AED] tracking-tight leading-[1.3]">
          Vibe Code With Intelligence
        </h1>
      </div>

      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
        VibeCode IDE is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code
        efficiently.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}