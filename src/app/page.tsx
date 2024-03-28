"use client";

import Image from "next/image";
import Hero from "@/assets/hero.svg";
import { LucideRocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center px-12">
      <div className="flex justify-between items-center gap-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold ">
              Discover
              <br />
              all AI Models
              <br />
              across the world!
            </h1>
            <p className="text-2xl font-semibold text-steel">
              {" "}
              Discover and utilize advanced AI models
              <br /> from more than 20k developers.
            </p>
          </div>

          <button
            onClick={() => router.push("/marketplace")}
            className="flex justify-center items-center p-4 bg-lavender rounded-2xl gap-2 w-52 font-bold"
          >
            <LucideRocket size={20} />
            Get Started
          </button>
        </div>

        <div>
          <Image src={Hero} alt="hero" width={500} height={500} />
          <div className="w-full py-6 px-8 flex flex-col justify-center items-start gap-1 bg-graphite rounded-b-xl">
            <h2 className="text-xl font-bold text-snow">GPT-4</h2>
            <div className="flex gap-2 items-center justify-center">
              <Image
                src={Hero}
                alt="hero"
                width={20}
                height={20}
                className="rounded-full"
              />
              <h2 className="text-base font-medium text-steel">OpenAI</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
