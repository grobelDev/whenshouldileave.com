import React from 'react';
import { Link } from 'react-router-dom';
// import {
//   // eslint-disable-next-line
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

export default function HomePageHero() {
  return (
    <div>
      <div id='header'>
        {/* <div className='pt-24 bg-gray-100 lg:pt-0'> */}
        <div className='relative w-full px-6 pt-16 pb-10 mx-auto max-w-screen-xl md:pt-32 md:pb-24'>
          <div className='-mx-6 xl:flex'>
            <div className='max-w-2xl px-6 mx-auto text-left md:text-center xl:text-left md:max-w-3xl'>
              <h1 className='text-3xl font-light leading-tight sm:text-4xl md:text-5xl xl:text-4xl'>
                Find the best time to leave <br></br>
                <span className='font-normal text-blue-500 sm:block'>
                  with the lowest traffic.
                </span>
              </h1>
              <p className='mt-6 leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-lg'>
                Green Roads will give you an hour by hour breakdown of traffic.
                <br></br>
                Driving is better with the road to yourself. <br></br>
                {/* <br></br>
                Put in some locations for your directions. <br></br>
                Look at the hour by hour breakdown of traffic results.
                <br></br>Choose the best time to leave. <br></br>
                Efficiently drive to your destination.
                <br></br> */}
              </p>
              <div className='py-8'>
                <button
                  type='submit'
                  value='Submit'
                  className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'
                >
                  Lookup Route
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-8 border-b-2 border-gray-200'></hr>
        {/* <Results resource={resource}></Results> */}
        {/* <SelectionMockup></SelectionMockup> */}
        {/* <DirectionsMockup></DirectionsMockup> */}
      </div>
    </div>
    // </div>
  );
}
