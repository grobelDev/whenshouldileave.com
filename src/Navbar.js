import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <div className='pt-24 bg-gray-100 lg:pt-0'>
      <div className='fixed inset-x-0 top-0 z-50 flex items-center min-w-0 bg-gray-100 border-b-2 border-gray-200 lg:border-b-0 '>
        <div className='relative w-full max-w-screen-xl px-6 mx-auto'>
          <div className='flex flex-col justify-center h-16 lg:border-b-2 lg:border-gray-300'>
            <div className='flex items-center -mx-6'>
              <div className='pl-6 pr-6 lg:w-1/3 xl:w-1/4'>
                <div className='flex items-center'>
                  <Link to='/' className='flex items-center'>
                    <div className='text-xl text-blue-800 font-regular md:block'>
                      When Should I Leave
                    </div>
                  </Link>
                </div>
              </div>

              <div className='flex justify-end flex-grow'>
                <div className='flex items-center justify-start px-3'>
                  <Link
                    to='/directions'
                    className='flex items-center block mr-5 text-gray-700 hover:text-gray-900'
                  >
                    Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
