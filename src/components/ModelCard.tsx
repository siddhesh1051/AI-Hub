import React from "react";
import ModelImage from "@/assets/modelImage.svg";
import Image from "next/image";
import {
  LucideEye,
  LucideHeart,
  LucideTag,
  LucideTrendingUp,
  LucideUserRound,
} from "lucide-react";
import { AI_Model } from "@/models/aimodels.model";
import { useRouter } from "next/navigation";

export default function ModelCard({
  model,
  isFeatured,
  byViews,
  byLikes,
}: {
  model: AI_Model;
  isFeatured?: boolean;
  byViews?: boolean;
  byLikes?: boolean;
}) {
  // Router for navigation
  const router = useRouter();

  return (
    <div className="flex flex-col w-full rounded-xl bg-graphite py-6 px-7 justify-between items-center gap-4">
      <div
        className={`flex ${
          isFeatured ? "justify-between" : "justify-start"
        } items-center w-full`}
      >
        <Image
          src={ModelImage}
          alt="hero"
          width={50}
          height={50}
          className="rounded-lg"
        />
        {isFeatured && (
          <div
            className={`flex gap-3 justify-center items-center ${
              byViews ? "text-meadow" : "text-tangerine"
            }`}
          >
            <LucideTrendingUp size={20} />
            <p className="font-bold">{byViews ? "Views" : "Likes"}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-start flex-col gap-1 w-full">
        <h2 className="text-xl font-bold text-snow">{model.name}</h2>
        <p className="text-base font-semibold text-steel">
          {model.description}
        </p>
      </div>
      <div className="flex  justify-between gap-2 items-start w-full">
        <div className="flex gap-2 justify-center items-center rounded-full px-2 py-0.5 bg-lavender/15 text-lavender">
          <LucideTag size={20} />
          <h2 className="text-base font-medium text-lavender">{model.tag}</h2>
        </div>
        <div className="flex gap-2 justify-center items-center  text-steel">
          <LucideUserRound size={20} />
          <h2 className="text-base font-medium">{model.creator}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-1">
        <div className="flex justify-center items-center gap-2 text-meadow ">
          <LucideEye size={20} />
          <p>{model.views}</p>
        </div>
        <div className="flex justify-center items-center gap-2 text-tangerine">
          <LucideHeart size={20} className="cursor-pointer" />
          <p>{model.likes}</p>
        </div>
      </div>
      <button
        onClick={() => {
          router.push(`/marketplace/${model.id}`);
        }}
        className="bg-lavender w-full py-2 rounded-xl text-lg font-bold"
      >
        View Details
      </button>
    </div>
  );
}
