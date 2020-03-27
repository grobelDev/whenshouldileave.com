import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './HomePageHero.css';
// import {
//   // eslint-disable-next-line
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

export default function HomePageHero({ handleScroll }) {
  return (
    <div id='home-page-hero'>
      <div id='header'>
        {/* <div className='pt-24 bg-gray-100 lg:pt-0'> */}
        <div className='div1'>
          <div className='div2'>
            <div className='div3'>
              <h1 className='h1'>
                Find the best time to leave <br></br>
                <span className='span1'>with the lowest traffic.</span>
              </h1>
              <p className='p1'>
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
              <div className='div4'>
                <button
                  onClick={() => handleScroll()}
                  type='submit'
                  value='Submit'
                  className='button1'
                  // className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'
                >
                  Lookup Route
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className='hr1'></hr>
        {/* <Results resource={resource}></Results> */}
        {/* <SelectionMockup></SelectionMockup> */}
        {/* <DirectionsMockup></DirectionsMockup> */}
      </div>
    </div>
    // </div>
  );
}
