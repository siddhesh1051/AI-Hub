import CategoryCard from "@/components/CategoryCard";
import React from "react";
import Camera from "@/assets/categoryicons/camera.svg";
import Art from "@/assets/categoryicons/art.svg";
import Music from "@/assets/categoryicons/music.svg";
import Video from "@/assets/categoryicons/video.svg";
import Gaming from "@/assets/categoryicons/gaming.svg";
import OCR from "@/assets/categoryicons/ocr.svg";

export default function Categories() {
  const categories = [
    { icon: Art, name: "Text Generation" },
    { icon: Camera, name: "Image Generation" },
    { icon: Video, name: "Computer Vision" },
    { icon: Gaming, name: "Gaming" },
    { icon: OCR, name: "OCR" },
    { icon: Music, name: "Speech" },
  ];

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-32 px-6 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">Categories</h1>
        <p className="text-xl font-semibold text-steel">
          Choose from a wide range of categories to explore AI Models.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-16 gap-8 w-full">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              icon={category.icon}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
