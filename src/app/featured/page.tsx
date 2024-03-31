"use client";

import ModelCard from "@/components/ModelCard";
import { AI_Model } from "@/models/aimodels.model";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Featured() {
  const [popularbyViews, setPopularbyViews] = useState([]);
  const [popularbyLikes, setPopularbyLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      try {
        const { data: modelsData } = await axios.get(
          "https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models"
        );
        // Sort the modelsData array by views
        modelsData.sort((a: AI_Model, b: AI_Model) => b.views - a.views);
        setPopularbyViews(modelsData);
      } catch (error) {
        console.error("Error fetching models:", error);
        setIsLoading(false);
      }

      try {
        const { data: modelsData } = await axios.get(
          "https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models"
        );
        // Sort the modelsData array by views
        modelsData.sort((a: AI_Model, b: AI_Model) => b.likes - a.likes);
        setPopularbyLikes(modelsData);
      } catch (error) {
        console.error("Error fetching models:", error);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchModels();
  }, []);

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-32 px-6 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">Featured Models</h1>
        <p className="text-xl font-semibold text-steel">
          Explore the most popular AI models on the platform.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-8 relative">
        {!isLoading ? (
          <>
            {/* Grid for Popular Models sorted by Views */}
            <h2 className="text-2xl font-bold text-snow">Popular by Views</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 w-full">
              {popularbyViews.slice(0, 5).map((model: AI_Model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  isFeatured={true}
                  byViews={true}
                />
              ))}
            </div>
            {/* Grid for Popular Models sorted by Likes */}
            <h2 className="text-2xl font-bold text-snow">Popular by Likes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 w-full">
              {popularbyLikes.slice(0, 6).map((model: AI_Model) => (
                <ModelCard key={model.id} model={model} isFeatured={true} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center w-full h-[calc(100vh-90px)]">
            <p className="text-4xl font-bold text-lavender">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
