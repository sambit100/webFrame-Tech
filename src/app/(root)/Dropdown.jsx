'use client'
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ['ADREXpharma', 'Aurora', 'Avaay','Bedrocan','Cannamdical'];

  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected options: ${selectedOptions.join(', ')}`);
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-white  rounded-lg ">
      <div className="mb-2 text-lg text-center font-semibold text-teal-800">Hersteller</div>
      <form onSubmit={handleSubmit} className="space-y-2">
        {options.map((option) => (
          <label key={option} className="block">
            <input
              type="checkbox"
              value={option}
              onChange={handleOptionChange}
              className="mr-2 h-4 w-4 text-teal-800  border-teal-500 rounded-4xl"
            />
            <span className="text-teal-800">{option}</span>
          </label>
        ))}
        <button
          className="w-full py-2 px-4  text-teal-500 font-semibold rounded-lg border-5 border  border-lime-500 rounded-br-3xl rounded-tl-3xl"
        >
           mehr anzeigen
        </button>
      </form>
    </div>
  );
};

export default Dropdown;
