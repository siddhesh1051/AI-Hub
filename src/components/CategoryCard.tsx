import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryCard({
  icon,
  name,
}: {
  icon: any;
  name: string;
}) {
  return (
    <Link href={`/categories/${name}`}>
      <div className="w-full min-h-full h-56 p-8 flex flex-col gap-8 justify-center items-center bg-gradient-to-t from-neutral-900 to-violet-900 rounded-2xl cursor-pointer">
        <Image src={icon} alt="category" width={50} height={50} />
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
    </Link>
  );
}
