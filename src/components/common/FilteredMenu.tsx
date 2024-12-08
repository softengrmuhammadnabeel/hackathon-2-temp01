"use client"
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'

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
        <div className="absolute top-10 left-0 w-full md:w-[400px]   p-4 bg-white border border-gray-200 rounded-md shadow-lg z-999">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={toggleFilter}
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Price</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Max"
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Colors</h4>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 py-1">
                  <button className="w-8 h-8 bg-green-500 rounded-full"></button>
                </div>
                {/* Add more color buttons here */}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 py-1">
                  <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">
                    S
                  </button>
                </div>
                {/* Add more size buttons here */}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Dress Style</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">
                    Casual
                  </label>
                </div>
                {/* Add more dress style checkboxes here */}
              </div>
            </div>

            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;