import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

// import DriveEtaIcon from '@material-ui/icons/DriveEta';
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
// import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
// import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SearchIcon from '@material-ui/icons/Search';

import MaterialAutocomplete from './MaterialAutocomplete';

import {
  PageLayout,
  PageHeader,
  SearchLayout,
  SearchIcons
} from './DirectionsPageStatic';

export default function DirectionsPage() {
  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);
  const [mode, setMode] = useState('driving');
  const [didSearch, setDidSearch] = useState(null);

  useEffect(() => {
    if (startingPoint && destination) {
      setDidSearch(true);
    }
  }, [startingPoint, destination]);

  return (
    <div>
      <PageLayout>
        <PageHeader>
          <SelectionDetails
            didSearch={didSearch}
            mode={mode}
            setMode={setMode}
            startingPoint={startingPoint}
            destination={destination}
            setStartingPoint={setStartingPoint}
            setDestination={setDestination}
          ></SelectionDetails>
        </PageHeader>
      </PageLayout>
    </div>
  );
}

function SelectionDetails({
  didSearch,
  mode,
  setMode,
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
      <SelectionResultsPreview
        didSearch={didSearch}
        mode={mode}
        startingPoint={startingPoint}
        destination={destination}
      ></SelectionResultsPreview>
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
            setInput={setStartingPoint}
          ></MaterialAutocomplete>
        </div>
        <div className='flex flex-col justify-center'>
          <button
            onClick={() => console.log('swap startingPoint and Destination')}
          >
            <SwapVertIcon
              style={{ fontSize: 30 }}
              className='flex-grow-0 mx-2 mt-4'
            ></SwapVertIcon>
          </button>
        </div>
        <div></div>
      </div>

      <div className='flex mt-2'>
        <div className='flex-grow pl-2 pr-6'>
          <MaterialAutocomplete
            label='Destination'
            setInput={setDestination}
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

function SelectionResultsPreview({
  didSearch,
  mode,
  startingPoint,
  destination
}) {
  if (!didSearch) {
    return null;
  }

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
