'use client'
import React, { useState } from 'react';
import { PiLeafFill } from "react-icons/pi";
import { PiLeafFillFill } from "react-icons/pi";

const Slider = (Props) => {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(80);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    // Adjust the values based on which slider is being moved
    if (e.target.dataset.index === '1') {
      setValue1(newValue);
    } else {
      setValue2(newValue);
    }
  };

  const formatValue = (value) => {
    return `${value} ${Props.value}`;
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">{Props.name}</h2>
      <div className="relative w-full max-w-md h-12 flex items-center">
        {/* Slider line */}
        <div className="absolute w-full h-1 bg-teal-200 rounded-full">
          {/* Empty div to represent slider line */}
        </div>
        {/* Leaf icons positioned based on slider values */}
        <PiLeafFill
          className="absolute transform -translate-y-6 text-teal-600"
          size={30}
          style={{ left: `${value1}%`, zIndex: 2 }}
        />
        <PiLeafFill
          className="absolute transform -translate-y-6 text-teal-600"
          size={30}
          style={{ left: `${value2}%`, zIndex: 2 }}
        />
        {/* Range inputs to control slider values */}
        <input
          type="range"
          min="0"
          max="100"
          value={value1}
          onChange={(e) => handleSliderChange(e)}
          data-index="1"
          className="absolute w-full h-1 opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={value2}
          onChange={(e) => handleSliderChange(e)}
          data-index="2"
          className="absolute w-full h-1 opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex space-x-4 mt-2">
        <div className="text-center">
          <input
            type="text"
            value={formatValue(value1)}
            onChange={(e) => setValue1(parseInt(e.target.value))}
            className="text-center text-lg bg-gray-300 text-teal-900 w-20 border rounded-2xl"
          />
        </div>
        <p>-</p>
        <div className="text-center">
          <input
            type="text"
            value={formatValue(value2)}
            onChange={(e) => setValue2(parseInt(e.target.value))}
            className="text-center text-lg bg-gray-300 text-teal-900 w-20 border rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
