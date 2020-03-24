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
                  {/* <a
                href='https://twitter.com/grobelDev'
                className='flex items-center block mr-5 text-gray-500 hover:text-gray-700'
              >
                <svg
                  className='w-5 h-5 fill-current'
                  viewBox='0 0 20 20'
                >
                  <path d='M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84'></path>
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/in/harrison-chung-8073b5197/'
                className='flex items-center block text-gray-500 hover:text-gray-700'
              >
                <svg
                  className='w-5 h-5 fill-current'
                  viewBox='0 0 24 24'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
                </svg> */}
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <GooglePlacesAutocomplete
      className='flex flex-grow'
      onSelect={console.log}
    /> */}
          {/* <div>sdf</div> */}
        </div>
      </div>
      {children}
    </div>
  );
}
