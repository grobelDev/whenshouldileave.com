import React, { useState } from 'react';

import styled from 'styled-components';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SwapVertIcon from '@material-ui/icons/SwapVert';
// import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import SearchIcon from '@material-ui/icons/Search';

import MaterialAutocomplete from './MaterialAutocomplete';

export default function DirectionsPage() {
  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    <div>
      <Layout>
        <Header>
          <SelectionDetails
            startingPoint={startingPoint}
            destination={destination}
            setStartingPoint={setStartingPoint}
            setDestination={setDestination}
          ></SelectionDetails>
        </Header>
      </Layout>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className='relative w-full pt-5 pb-40 mx-auto max-w-screen-xl md:pb-24'>
      <div className='-mx-6'>
        <div className='max-w-2xl px-6 mx-auto text-left md:max-w-3xl'>
          <div
            id='content-wrapper'
            className='w-full min-h-screen lg:static lg:max-h-full lg:overflow-visible '
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ children }) {
  return (
    <div id='content'>
      <div id='app' className='flex'>
        <div className='w-full pt-12 pb-16 lg:pt-28'>
          <div className='max-w-3xl px-6 mx-auto mb-6'>
            <h1 className='text-3xl font-light'>Directions</h1>
            <div className='mt-2 text-gray-600'>May your roads be green.</div>

            {/* <hr className='mt-4 mb-8 border-b-2 border-gray-200'></hr> */}
            <div className='flex flex-grow w-full max-w-3xl px-6 mx-auto'></div>
          </div>
          <div className='flex'>
            <div className='w-full max-w-3xl mx-auto -px-6 md:px-6'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectionDetails({
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <SearchItem
        startingPoint={startingPoint}
        destination={destination}
        setStartingPoint={setStartingPoint}
        setDestination={setDestination}
      ></SearchItem>
      <SelectionResultsPreview></SelectionResultsPreview>
    </div>
  );
}

function SearchItem({
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <SearchLayout>
      <SearchDetails
        startingPoint={startingPoint}
        destination={destination}
        setStartingPoint={setStartingPoint}
        setDestination={setDestination}
      ></SearchDetails>
    </SearchLayout>
  );
}

function SearchLayout({ children }) {
  return (
    <StyledListItem className='p-4 pb-5 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
      {children}
    </StyledListItem>
  );
}

function SearchDetails({
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <SearchIcons></SearchIcons>
      <hr className='my-6 border rounded'></hr>
      <div className='pb-2'>
        <SearchBars
          startingPoint={startingPoint}
          destination={destination}
          setStartingPoint={setStartingPoint}
          setDestination={setDestination}
        ></SearchBars>
      </div>
    </div>
  );
}

function SearchIcons() {
  return (
    <div className='flex items-center justify-between px-4 md:justify-start'>
      <div className='flex pr-10'>
        <DriveEtaIcon></DriveEtaIcon>
      </div>
      <div className='flex pr-10'>
        <DirectionsBusIcon></DirectionsBusIcon>
      </div>
      <div className='flex pr-10'>
        <DirectionsWalkIcon></DirectionsWalkIcon>
      </div>
      <div>
        <DirectionsBikeIcon></DirectionsBikeIcon>
      </div>
    </div>
  );
}

function SearchBars({
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <div className='flex'>
        <div className='flex-grow pl-2 pr-6'>
          <MaterialAutocomplete
            label='Starting Point'
            // onSelect={handleDestinationInput}
            // setInput={setStartingPoint}
            onChange={setStartingPoint}
            // handleInput={handleStartingInput}
          ></MaterialAutocomplete>
        </div>
        <div className='flex flex-col justify-center'>
          <SwapVertIcon
            style={{ fontSize: 30 }}
            className='flex-grow-0 mx-2 mt-4'
          ></SwapVertIcon>
        </div>
        <div></div>
      </div>

      <div className='flex mt-2'>
        <div className='flex-grow pl-2 pr-6'>
          <MaterialAutocomplete
            label='Destination'
            // onSelect={handleDestinationInput}
            // setInput={setStartingPoint}
            onChange={setDestination}
            // handleInput={handleStartingInput}
          ></MaterialAutocomplete>
        </div>
        <div className='flex flex-col justify-center'>
          <button
            onClick={() =>
              console.log(
                'startingPoint:',
                startingPoint,
                'destination:',
                destination
              )
            }
          >
            <SearchIcon
              style={{ fontSize: 30 }}
              className='flex-grow-0 mx-2 mt-4'
            ></SearchIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectionResultsPreview() {
  return (
    <div className='border rounded shadow-lg md:rounded-lg'>
      <StyledListItem className='rounded '>
        <img
          className='rounded'
          src='https://cdn.discordapp.com/attachments/675090859493949484/675152739214426132/screenshot.png'
        ></img>
        <div className='flex justify-center my-4'>
          <button className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'>
            Get Time Estimates
          </button>
        </div>
      </StyledListItem>
    </div>
  );
}

const StyledListItem = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #f3f3f3;
  h3 {
    margin-bottom: 0 !important;
  }
  touch-action: pan-y;
`;
