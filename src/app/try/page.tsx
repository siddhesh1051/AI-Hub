"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Custom Suspense boundary component
const SuspenseBoundary = ({ children }: { children: any }) => {
  const query = useSearchParams();
  const imageModel = query.get("model_tag");

  if (!imageModel) {
    // Render a loading state or fallback UI here
    return <div>Loading...</div>;
  }

  return children(imageModel);
};

export default function Try() {
  const [inputText, setInputText] = useState("");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspenseBoundary>
        {(imageModel: any) => (
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
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointerdark:hover:bg-bray-800 dark:bg-graphite hover:bg-graphite/40 border-iron hover:border-iron cursor-pointer duration-300"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-void "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-steel">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-steel/70">
                          SVG, PNG, or JPG (MAX. 5MB)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
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

              <div className="flex flex-col md:flex-row justify-end md:items-center gap-12 w-full">
                <button
                  onClick={() => {
                    toast.info("This is a dummy feature");
                  }}
                  className="bg-lavender rounded-xl px-4 py-3 text-snow font-semibold text-xl "
                >
                  Submit
                </button>
              </div>

              <p className="text-xl font-semibold text-steel">
                Results will be shown here:
              </p>
            </div>
          </div>
        )}
      </SuspenseBoundary>
    </Suspense>
  );
}
