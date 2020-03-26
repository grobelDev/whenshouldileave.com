import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import {
//   // eslint-disable-next-line
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

export default function HomePageHero({ handleScroll }) {
  return (
    <div>
      <div id='header'>
        {/* <div className='pt-24 bg-gray-100 lg:pt-0'> */}
        <Div1>
          <Div2>
            <Div3>
              <H1>
                Find the best time to leave <br></br>
                <Span1>with the lowest traffic.</Span1>
              </H1>
              <P1>
                Green Roads will give you an hour by hour breakdown of traffic.
                <br></br>
                Driving is better with the road to yourself. <br></br>
                {/* <br></br>
                Put in some locations for your directions. <br></br>
                Look at the hour by hour breakdown of traffic results.
                <br></br>Choose the best time to leave. <br></br>
                Efficiently drive to your destination.
                <br></br> */}
              </P1>
              <Div4>
                <Button1
                  onClick={() => handleScroll()}
                  type='submit'
                  value='Submit'
                  // className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'
                >
                  Lookup Route
                </Button1>
              </Div4>
            </Div3>
          </Div2>
        </Div1>
        <Hr1></Hr1>
        {/* <Results resource={resource}></Results> */}
        {/* <SelectionMockup></SelectionMockup> */}
        {/* <DirectionsMockup></DirectionsMockup> */}
      </div>
    </div>
    // </div>
  );
}

let Div1 = styled.div`
  // relative w-full max-w-screen-xl px-6 pt-16 pb-10 mx-auto md:pt-32 md:pb-24
  position: relative;
  width: 100%;
  max-width: 36rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
`;

let Div2 = styled.div`
  // '-mx-6 xl:flex'
  margin-right: -1.5rem;
  margin-left: -1.5rem;
  @media (min-width: 1280px) {
    display: flex;
    // padding-top: 8rem;
    // padding-bottom: 6rem;
  }
`;

let Div3 = styled.div`
  // max-w-2xl px-6 mx-auto text-left md:text-center xl:text-left md:max-w-3xl
  max-width: 42rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
    max-width: 48rem;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

let Div4 = styled.div`
  // py-8
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

let H1 = styled.h1`
  // text-3xl font-light leading-tight sm:text-4xl md:text-5xl xl:text-4xl
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 1.25;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 2.25rem;
  }
`;

let Span1 = styled.span`
  font-weight: 400;
  color: #4299e1;
  @media (min-width: 640px) {
    display: block;
  }
`;

let P1 = styled.p`
  // mt-6 leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-lg'
  margin-top: 1.5rem;
  line-height: 1.625;
  color: #718096;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.125rem;
  }
`;

let Button1 = styled.button`
  // px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
  color: #fff;
  background-color: #4299e1;
  border-bottom-width: 4px;
  border-color: #2b6cb0;
  border-radius: 0.25rem;
`;

let Hr1 = styled.hr`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom-width: 2px;
  border-color: #edf2f7;
`;
// let Button1Helper = styled.button`
//   ${Button1}:hover {
//   }
// `;
