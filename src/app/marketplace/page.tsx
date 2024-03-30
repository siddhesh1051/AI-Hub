"use client";

import ModelCard from "@/components/ModelCard";
import { AI_Model } from "@/models/aimodels.model";
import axios from "axios";
import { LucideSearch } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Maeketplace() {
  const [modelsData, setModelsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetching Models Data
    const fetchModels = async () => {
      const { data: modelsData } = await axios.get(
        "https://my-json-server.typicode.com/siddhesh1051/siddhesh1051-json-server/models"
      );

      setModelsData(modelsData);
      console.log(modelsData);
    };
    fetchModels();
  }, []);

  // Search Functionality
  const handleSearch = (search_term: string) => {
    setSearch(search_term);
    const searchData = modelsData.filter((model: AI_Model) =>
      model.name.toLowerCase().includes(search_term.toLowerCase())
    );
    setFilteredData(searchData);
  };

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-12 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">Browse Marketplace</h1>
        <p className="text-xl font-semibold text-steel">
          Browse through more than 50+ AI Models on the Marketplace.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-12 relative">
        <div className="flex justify-center items-center w-full">
          <div className="relative rounded-lg w-full overflow-hidden before:absolute before:w-20 before:h-20 before:content[''] before:-right-2 before:top-0 before:bg-lavender/70 before:rounded-full before:blur-lg">
            <input
              placeholder="Enter Model Name"
              className="relative  ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <button
            onClick={() => handleSearch(search)}
            className="absolute right-2 top-2 bg-lavender rounded-xl p-3 flex justify-center items-center"
          >
            <LucideSearch />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8 w-full">
          {search.length !== 0
            ? filteredData.map((model: AI_Model) => (
                <ModelCard key={model.id} model={model} />
              ))
            : modelsData.map((model: AI_Model) => (
                <ModelCard key={model.id} model={model} />
              ))}
        </div>
      </div>
    </div>
  );
}
