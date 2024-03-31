"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Try() {
  const [inputText, setInputText] = useState("");
  const query = useSearchParams();
  const imageModel = query.get("model_tag");

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-32 px-6 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">Try Model</h1>
        <p className="text-xl font-semibold text-steel">
          Try out the AI mode and see the magic.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-4 rounded-xl">
        {imageModel === "Image Generation" ||
        imageModel === "Computer Vision" ||
        imageModel === "OCR" ? (
          <>
            <label className="text-xl font-semibold text-snow">
              Upload Input Image
            </label>
            <input
              type="file"
              placeholder="Upload Input Image"
              className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4"
            />
          </>
        ) : (
          <>
            <label className="text-xl font-semibold text-snow">
              Input Text
            </label>
            <textarea
              placeholder="Enter Input Text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-32"
            ></textarea>
          </>
        )}

        <div className="flex  flex-col md:flex-row  justify-end items-center gap-12 w-full">
          <button
            onClick={() => {
              toast.info("This is a dummy feature");
            }}
            className="bg-lavender rounded-xl px-4 py-3 text-snow font-semibold text-xl w-[10%]"
          >
            Submit
          </button>
        </div>

        <p className="text-xl font-semibold text-steel">
          Results will be shown here:
        </p>
      </div>
    </div>
  );
}
