"use client";

import ModelCard from "@/components/ModelCard";
import { AI_Model } from "@/models/aimodels.model";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CategoryModels() {
  const params = useParams();

  const [modelsData, setModelsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetching Models Data
    const fetchModels = async () => {
      setIsLoading(true);

      try {
        const { data: modelsData } = await axios.get(
          `https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models?tag=${params.category_name}`
        );

        setModelsData(modelsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
        setIsLoading(false);
      }
    };
    fetchModels();
  }, []);

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-32 px-6 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">
          {typeof params?.category_name === "string"
            ? params?.category_name.replace(/%20/, " ")
            : ""}
        </h1>
        <p className="text-xl font-semibold text-steel">
          Choose from a wide range of models in this category.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-12 relative">
        {!isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 w-full">
            {modelsData?.length !== 0 &&
              modelsData.map((model: AI_Model) => (
                <ModelCard key={model?.id} model={model} />
              ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-[calc(100vh-90px)]">
            <p className="text-4xl font-bold text-lavender">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
