"use client";

import { AI_Model } from "@/models/aimodels.model";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import CoverImage from "@/assets/cover.svg";
import ModelImage from "@/assets/modelImage.svg";
import {
  LucideEye,
  LucideGitMerge,
  LucideHeart,
  LucideTag,
  LucideUserRound,
  LucideWrench,
} from "lucide-react";
import ModelCard from "@/components/ModelCard";
import { atomOneDark, CopyBlock } from "react-code-blocks";
import { toast } from "sonner";

export default function ModelPage() {
  const params = useParams();
  const [model, setModel] = useState<AI_Model | null>(null);
  const [loading, setLoading] = useState(true);
  const [modelsData, setModelsData] = useState<AI_Model[]>([]);

  const router = useRouter();

  const handleTryItOut = (model_tag: string) => {
    router.push(`/try?model_tag=${model_tag}`);
  };

  useEffect(() => {
    // Fetching Model Data
    const fetchModel = async () => {
      setLoading(true);
      try {
        const { data: modelData } = await axios.get(
          `https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models/${params.model_id}`
        );

        setModel(modelData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
        setLoading(false);
      }
    };
    fetchModel();
  }, [params.model_id]);

  useEffect(() => {
    const fetchSimilarModels = async () => {
      if (model) {
        try {
          const { data: similarModelsData } = await axios.get(
            `https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models?tag=${model.tag}`
          );
          // Filter out the current model from the similar models
          const filteredSimilarModels = similarModelsData.filter(
            (similarModel: AI_Model) => similarModel.id !== model.id
          );
          setModelsData(filteredSimilarModels);
        } catch (error) {
          console.error("Error fetching similar models:", error);
        }
      }
    };

    fetchSimilarModels();
  }, [model]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[calc(100vh-90px)]">
          <p className="text-4xl font-bold text-lavender">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col py-4">
          <div className="w-full">
            <Image
              src={CoverImage}
              alt={model?.name || "cover image"}
              width={500}
              height={500}
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="flex flex-col relative md:px-32 px-4 pt-8">
            <Image
              src={ModelImage}
              alt="hero"
              width={150}
              height={150}
              className="absolute -top-16 left-32 rounded-2xl drop-shadow-xl border-2 border-charcoal"
            />
            <div className="flex flex-col w-full items-start gap-6 mt-20 ">
              <div className="flex md:flex-row flex-col justify-between items-center md:gap-2 gap-4 w-full">
                <h1 className="text-5xl text-snow font-bold">{model?.name}</h1>
                <button
                  onClick={() => handleTryItOut(model?.tag ?? "")}
                  className="flex justify-center items-center gap-2 bg-lavender text-snow font-semibold px-6 py-3 rounded-xl"
                >
                  <LucideWrench size={20} />
                  Try it out
                </button>
              </div>
              <div className="flex  md:flex-row flex-col gap-4 justify-between items-start w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center gap-1 w-full">
                    <div className="flex flex-col justify-start items-start">
                      <h2 className="text-lg text-snow font-bold">
                        Created by
                      </h2>
                      <div className="flex gap-2 justify-center items-center  text-steel">
                        <LucideUserRound size={20} />
                        <h2 className="text-base font-medium">
                          {model?.creator}
                        </h2>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-6 px-2">
                      <div className="flex justify-center items-center gap-2 text-meadow ">
                        <LucideEye size={20} />
                        <p>{model?.views}</p>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-tangerine">
                        <LucideHeart size={20} className="cursor-pointer" />
                        <p>{model?.likes}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl text-snow font-semibold">
                      Description
                    </h2>
                    <p className="text-base text-steel">{model?.description}</p>
                  </div>
                </div>
                <CopyBlock
                  text={"const result = alphaGo.playMove(boardState);"}
                  language="javascript"
                  theme={atomOneDark}
                  wrapLongLines={true}
                  onCopy={() => toast.success("Code Copied!")}
                />
              </div>

              <div className="flex flex-col gap-4 items-start justify-center">
                <div className="flex gap-2 justify-center items-center rounded-full px-2 py-0.5 bg-lavender/15 text-lavender">
                  <LucideTag size={20} />
                  <h2 className="text-base font-medium text-lavender">
                    {model?.tag}
                  </h2>
                </div>
                <div className="flex flex-col gap-2 justify-center items-start">
                  <h2 className="text-xl text-snow font-semibold">
                    Model Versions
                  </h2>
                  <div className="flex flex-col gap-1 items-start justify-center">
                    {model?.versions?.map((version, index) => (
                      <div
                        key={index}
                        className="flex gap-2 items-center justify-center"
                      >
                        <LucideGitMerge size={20} />
                        <h2 className="text-lg text-steel font-semibold">
                          {version?.version_name}:{" "}
                        </h2>
                        <p className="text-base text-steel">
                          {version?.pricing}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-8 mb-4 w-full ">
                <h2 className="text-3xl font-bold mb-8">Similar Models</h2>

                {modelsData.length === 0 && (
                  <p className="text-2xl font-semibold text-steel">
                    No similar models found
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 w-full">
                  {modelsData.length !== 0
                    ? modelsData.map((model: AI_Model) => (
                        <ModelCard key={model.id} model={model} />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
