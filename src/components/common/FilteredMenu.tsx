"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const FilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-full hover:bg-gray-200"
        onClick={toggleFilter}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 w-80 p-4 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleFilter}
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Price</h4>
              <input
                type="range"
                min="50"
                max="200"
                defaultValue="125"
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Colors</h4>
              <div className="flex gap-2 flex-wrap">
                {[
                  "red",
                  "yellow",
                  "green",
                  "blue",
                  "purple",
                  "orange",
                  "black",
                  "white",
                  "pink",
                ].map((color, idx) => (
                  <button
                    key={idx}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border ${
                      color === "black" ? "border-gray-300" : "border-none"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="grid grid-cols-4 gap-2">
                {[
                  "XX-Small",
                  "X-Small",
                  "Small",
                  "Medium",
                  "Large",
                  "X-Large",
                  "XX-Large",
                  "3X-Large",
                  "4X-Large",
                ].map((size) => (
                  <button
                    key={size}
                    className="text-xs py-1 px-2 border border-gray-300 rounded hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Dress Style</h4>
              <div className="space-y-2">
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <div key={style} className="flex items-center">
                    <input
                      type="checkbox"
                      id={style}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={style}
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      {style}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
