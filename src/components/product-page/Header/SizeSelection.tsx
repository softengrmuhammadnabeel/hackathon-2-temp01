"use client";
import { cn } from "@/lib/utils";
import React from "react";

const SizeSelection = () => {

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-black/60 mb-4">
        Choose Size
      </span>
      <div className="flex items-center flex-wrap lg:space-x-3">
        {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              "bg-[#F0F0F0] flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px]",
               "bg-black font-medium text-white",
            ])}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
