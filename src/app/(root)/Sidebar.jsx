'use client'

import React, { useState } from 'react';
import Slider from './Slider';
import Dropdown from './Dropdown';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full p-4 sm:p-6 bg-white  rounded-lg sm:w-[250px] w-full">
      {/* Collapsible Header */}
      <div className="flex justify-center items-center bg-cyan-100 p-2 rounded-lg">
        <span className="font-bold text-teal-600 text-lg ">Filter</span>
        <button
          className="text-teal-600 font-semibold sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'X' : '▼'}
        </button>
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        } sm:max-h-none sm:overflow-visible`}
      >
        <div className="grid grid-cols-1 gap-y-5 mt-4">
          <hr className="border-teal-200" />
          <div>
            <Slider name="Preis" value="€" />
          </div>
          <hr className="border-teal-400" />
          <div>
            <Dropdown />
          </div>
          <hr className="border-teal-400" />
          <div>
            <Slider name="THC Gehalt" value="%" />
          </div>
          <hr className="border-teal-400" />
          <div>
            <Slider name="CBD Gehalt" value="%" />
          </div>
          <hr className="border-teal-200" />
          <div>
            <p className="text-center text-teal-600 font-semibold">Genetik</p>
            <div className="flex justify-center gap-x-2 mt-5">
              <span className="bg-teal-500 p-1 rounded-md text-white">Indica</span>
              <span className="bg-teal-100 p-1 rounded-md text-teal-600">Sativa</span>
              <span className="bg-teal-100 p-1 rounded-md text-teal-600">Hybrid</span>
            </div>
          </div>
          <hr className="border-teal-400 h-[20px]" />
          <div>
            <p className="text-center text-teal-600 font-semibold">Bestrahlung</p>
            <div className="flex justify-center gap-x-2 mt-5">
              <span className="bg-teal-500 p-1 rounded-md text-white">bestrahlt</span>
              <span className="bg-teal-100 p-1 rounded-md text-teal-600">nicht bestrahlt</span>
            </div>
          </div>
          <hr className="border-teal-200 font-bold" />
          <div>
            <p className="text-center text-teal-600 font-semibold">Terpene</p>
          </div>
          <hr className="border-teal-200" />
          <div className="text-center">
            <p className="text-teal-600 font-semibold cursor-pointer">
              <span className="text-lg text-teal-600">X</span> alle Filter zurücksetzen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
