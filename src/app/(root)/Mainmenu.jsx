import React from 'react';
import { FaListUl, FaSearch } from 'react-icons/fa';
import { PiLeafFill } from "react-icons/pi";
import Card from './Card';
import Sidebar from './Sidebar';

const Mainmenu = () => {
  return (
    <div className='p-4'>
      {/* Top menu with title and search bar */}
      <div className='flex flex-col sm:flex-row justify-between p-5 text-sm'>
        <span className='text-4xl text-teal-700 font-bold flex items-center justify-center sm:ml-10 mb-4 sm:mb-0'>
          <PiLeafFill />
          Blüten
        </span>
        <div className='flex items-center gap-x-2'>
          <div className="relative flex items-center p-2 bg-gray-200 rounded-full">
            <input
              type="text"
              placeholder="Suchen"
              className="rounded-full bg-gray-200 placeholder:text-cyan-500 pl-10 pr-4 w-full"
            />
            <div className='mr-4'>
              <FaSearch className="text-cyan-500" />
            </div>
          </div>
          <button className='bg-cyan-300 text-teal-700 font-bold px-4 py-2 rounded-full'>
            Sortieren nach
          </button>
          <button className='bg-cyan-300 text-teal-700 font-bold px-4 py-2 rounded-full'>
            Verfügbarkeit
          </button>
          <button className='bg-cyan-300 text-teal-700 font-bold px-4 py-2 rounded-full flex items-center justify-center'>
            <FaListUl />
          </button>
        </div>
      </div>

      {/* Responsive layout for Sidebar and Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-x-0 gap-y-10'>
        {/* Sidebar */}
        <div className='sm:col-span-1 h-full shadow-md mb-4 sm:mb-0'>
          <Sidebar />
        </div>

        {/* Cards */}
        <div className='sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5'>
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
          <Card className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
