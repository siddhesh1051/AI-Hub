"use client";

import Logo from "@/assets/hero.svg";
import { LucideBlocks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const NavMenus = [
    {
      name: "Marketplace",
      href: "/marketplace",
    },
    {
      name: "Feutured Models",
      href: "/featured",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full py-5 px-8">
      <div
        onClick={() => router.push("/")}
        className="flex gap-4 items-center justify-center cursor-pointer"
      >
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={40}
          className="rounded-xl"
        />
        <h1 className="text-2xl font-bold text-lavender">AI Hub</h1>
      </div>
      <div className="flex gap-6 justify-center items-center ">
        {NavMenus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="text-steel font-semibold"
          >
            {menu.name}
          </Link>
        ))}
        <Link href="/publish">
          <button className="flex justify-center items-center gap-2 bg-lavender text-snow font-semibold px-6 py-3 rounded-xl">
            <LucideBlocks size={20} />
            Publish Model
          </button>
        </Link>
      </div>
    </div>
  );
}
