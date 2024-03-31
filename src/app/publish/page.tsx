"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Publish() {
  const [modelName, setModelName] = useState("");
  const [modelCreator, setModelCreator] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const [modelCategory, setModelCategory] = useState("");
  const [modelProfileImage, setModelProfileImage] = useState("");
  const [modelCoverImage, setModelCoverImage] = useState("");
  const [modelSampleCode, setModelSampleCode] = useState("");

  const categoryOptions = [
    "Text Generation",
    "Computer Vision",
    "Image Generation",
    "Gaming",
    "OCR",
    "Speech",
    "Other",
  ];

  const sendDataToServer = () => {
    if (
      !modelName ||
      !modelCreator ||
      !modelCategory ||
      !modelDescription ||
      !modelProfileImage ||
      !modelCoverImage ||
      !modelSampleCode
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // Send data to your mails
    const data = {
      modelName,
      modelDescription,
      modelProfileImage,
      modelCoverImage,
      modelSampleCode,
    };
    console.log(data);
    toast.success("Your request has been sent successfully🎉");
    setModelName("");
    setModelCategory("");
    setModelCreator("");
    setModelDescription("");
    setModelProfileImage("");
    setModelCoverImage("");
    setModelSampleCode("");
  };

  return (
    <div className="flex flex-col w-full items-center py-4 md:px-32 px-6 my-4 gap-8">
      <div className="flex flex-col w-full items-start gap-2 ">
        <h1 className="text-4xl font-bold text-lavender">Publish a Model</h1>
        <p className="text-xl font-semibold text-steel">
          Publish your AI Model on the Marketplace.
        </p>
      </div>
      <div className="flex flex-col w-full items-start gap-4">
        <label className="text-xl font-semibold text-steel">Model Name</label>
        <input
          placeholder="Enter Model Name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
          type="text"
        />
        <label className="text-xl font-semibold text-steel">
          Model Creator
        </label>
        <input
          placeholder="Enter Creator Name"
          value={modelCreator}
          onChange={(e) => setModelCreator(e.target.value)}
          className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
          type="text"
        />

        <label className="text-xl font-semibold text-steel">
          Model Description
        </label>
        <textarea
          placeholder="Enter Model Description"
          value={modelDescription}
          onChange={(e) => setModelDescription(e.target.value)}
          className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-32"
        ></textarea>

        <label className="text-xl font-semibold text-steel">
          Model Category
        </label>

        <select
          value={modelCategory}
          onChange={(e) => setModelCategory(e.target.value)}
          className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
        >
          <option value="" className="bg-graphite">
            Select Category
          </option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category} className="bg-graphite">
              {category}
            </option>
          ))}
        </select>

        <div className="flex  flex-col md:flex-row  justify-between items-center gap-12 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xl font-semibold text-steel">
              Model Profile Image
            </label>
            <input
              type="file"
              value={modelProfileImage}
              onChange={(e) => setModelProfileImage(e.target.value)}
              className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xl font-semibold text-steel">
              Model Cover Image
            </label>

            <input
              type="file"
              value={modelCoverImage}
              onChange={(e) => setModelCoverImage(e.target.value)}
              className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-16"
            />
          </div>
        </div>

        <label className="text-xl font-semibold text-steel">Sample Code</label>
        <textarea
          placeholder="Enter Model Sample Code"
          value={modelSampleCode}
          onChange={(e) => setModelSampleCode(e.target.value)}
          className="ring-0 outline-none border border-iron bg-graphite/30 text-snow placeholder-steel  rounded-xl focus:ring-lavender placeholder-opacity-60 focus:border-lavender block w-full p-4 h-32"
        ></textarea>

        <button
          onClick={sendDataToServer}
          className="bg-lavender rounded-xl p-4 text-snow font-semibold text-xl w-full"
        >
          Publish Model
        </button>

        <p className="text-steel text-center">
          By publishing the model, you agree to the terms and conditions of the
          platform.
        </p>

        <p className="text-steel text-center">
          You can view the terms and conditions{" "}
          <a href="#" className="text-lavender">
            here
          </a>
        </p>
      </div>
    </div>
  );
}
