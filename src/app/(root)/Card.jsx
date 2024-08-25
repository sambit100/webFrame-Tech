import React from 'react';
import logo from '../../../public/assets/med.png';
import img1 from '../../../public/assets/img1.png';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='mb-10 flex justify-center'>
      <div className='w-full max-w-xs'>
        <div className='grid grid-col-1 border-2 border-cyan-300 rounded-br-3xl rounded-tl-3xl'>
          <div className='relative flex flex-col gap-y-3 p-2'>
            <span className='text-red-800 bg-red-50 text-center rounded-full absolute mt-3 h-4 text-xs'>
              .nicht lieferbar
            </span>
            <Image src={logo} alt="image" className='rounded-tl-3xl rounded-br-3xl mt-5 mx-auto' width={150} height={100} />
          </div>
        
          <div className='bg-cyan-100 rounded-br-3xl'>
            <hr className="border-2 border-cyan-300 my-4 w-full mt-0" />
            <div className='p-2'>
              <span className='bg-cyan-200 font-bold text-teal-700 text-sm p-1'>
                Canify
              </span>
              <div className='flex justify-start gap-x-2 mt-2'>
                <button className='flex-1 text-teal-600 bg-white px-4 py-1 text-md rounded-md'>
                  THC 18%
                </button>
                <button className='flex-1 text-white bg-cyan-600 px-4 py-1 text-md rounded-md'>
                  CBD <span>1%</span>
                </button>
                <Image src={img1} className='w-8 h-8' />
              </div>

              <div className='mt-2 flex flex-col font-bold text-teal-700 text-lg'>
                <span>Cannabis Flos 18/1 PT</span>
                <span className='ml-1'>Mango</span>
              </div>
              <div className='flex justify-between mt-2 text-lg'>
                <span>Kultivar</span>
                <span>Mango</span>
              </div>
              <div className='flex justify-between mt-2 text-lg'>
                <span>Genetik</span>
                <span>Hybrid</span>
              </div>

              <div className='flex justify-between mt-2'>
                <span className='flex flex-col text-lg font-bold text-teal-700'>
                  $11,66<sup>1</sup>
                  <span className='text-sm font-extralight'>pro Gramm</span>
                </span>
                <span className='bg-lime-200 text-teal-500 font-semibold rounded-tl-2xl px-4 py-2 text-center rounded-br-2xl mt-1 text-sm'>
                  in den Warenkorb
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
