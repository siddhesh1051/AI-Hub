"use client";

import Image from "next/image";
import Logo from "@/assets/hero.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LucideBlocks, LucideX } from "lucide-react";

export default function Sidebar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const NavMenus = [
    {
      name: "Marketplace",
      href: "/marketplace",
    },
    {
      name: "Featured Models",
      href: "/featured",
    },
    {
      name: "Categories",
      href: "/categories",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex flex-col h-full bg-void z-50 relative py-8 rounded-3xl">
      <div
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-4 bg-charcoal  rounded-full cursor-pointer"
      >
        <LucideX size={20} />
      </div>
      <div
        onClick={() => {
          router.push("/");
          toggleSidebar();
        }}
        className="flex gap-4 items-center justify-center cursor-pointer p-4"
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

      <div className="flex flex-col flex-grow justify-between items-center">
        {NavMenus.map((menu) => (
          <Link
            onClick={toggleSidebar}
            key={menu.name}
            href={menu.href}
            className="text-steel font-semibold p-4"
          >
            {menu.name}
          </Link>
        ))}
        <Link onClick={toggleSidebar} href="/publish">
          <button className="flex justify-center items-center gap-2 bg-lavender text-snow font-semibold px-6 py-3 rounded-xl">
            <LucideBlocks size={20} />
            Publish Model
          </button>
        </Link>
      </div>
    </div>
  );
}
