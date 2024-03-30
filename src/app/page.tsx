"use client";

import Image from "next/image";
import Hero from "@/assets/hero.svg";
import { LucideRocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-full w-full flex-col items-center justify-center md:px-32 px-8 py-8">
      <div className="flex md:flex-row flex-col justify-between md:items-center items-center gap-24">
        <div className="flex flex-col gap-8  md:justify-start justify-center md:items-start items-center">
          <div className="flex flex-col md:justify-start justify-center gap-4">
            <h1 className="md:text-6xl text-4xl font-bold md:text-start text-center ">
              Discover
              <br />
              all AI Models
              <br />
              across the world!
            </h1>
            <p className="text-2xl font-semibold text-steel md:text-start text-center ">
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
