import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SearchIcon from '@material-ui/icons/Search';

import MaterialAutocomplete from './MaterialAutocomplete';

import {
  PageLayout,
  PageHeader,
  SearchLayout
  // SearchIcons
} from './DirectionsPageStatic';

import './DirectionsPage.css';

/**
 * Central Component for DirectionsPage meta-component.
 * Consumed in App.js
 *
 */

export default function DirectionsPage() {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [didSearch, setDidSearch] = useState(null);
  const [mode, setMode] = useState('driving');
  let history = useHistory();

  useEffect(() => {
    if (startingPoint && destination) {
      setDidSearch(true);
    }
  }, [startingPoint, destination]);

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  function handleModeClick(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  function handleVertIconClick() {
    let initialStartingPoint = startingPoint;
    let initialDestination = destination;

    setStartingPoint(initialDestination);
    setDestination(initialStartingPoint);

    console.log(startingPoint, destination);
  }

  function handleTimeEstimatesClick() {
    console.log('handleTimeEstimatesClick()');
    console.log(
      'mode:',
      mode,
      'startingPoint:',
      startingPoint,
      'destination:',
      destination
    );

    if (!mode || !startingPoint || !destination) {
      return null;
    }

    history.push(`/results/${mode}/${startingPoint}/${destination}`);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <PageLayout>
        <PageHeader>
          <SelectionDetails
            handleTimeEstimatesClick={handleTimeEstimatesClick}
            setMode={setMode}
            handleModeClick={handleModeClick}
            mode={mode}
            handleVertIconClick={handleVertIconClick}
            didSearch={didSearch}
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
  handleTimeEstimatesClick,
  setMode,
  handleModeClick,
  handleVertIconClick,
  didSearch,
  mode,
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <SearchItem
        setMode={setMode}
        handleModeClick={handleModeClick}
        mode={mode}
        handleVertIconClick={handleVertIconClick}
        startingPoint={startingPoint}
        destination={destination}
        setStartingPoint={setStartingPoint}
        setDestination={setDestination}
      ></SearchItem>
      <SelectionResultsPreview
        handleTimeEstimatesClick={handleTimeEstimatesClick}
        didSearch={didSearch}
        mode={mode}
        startingPoint={startingPoint}
        destination={destination}
      ></SelectionResultsPreview>
    </div>
  );
}

function SearchItem({
  setMode,
  handleModeClick,
  mode,
  handleVertIconClick,
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <SearchLayout>
      <SearchDetails
        setMode={setMode}
        handleModeClick={handleModeClick}
        mode={mode}
        handleVertIconClick={handleVertIconClick}
        startingPoint={startingPoint}
        destination={destination}
        setStartingPoint={setStartingPoint}
        setDestination={setDestination}
      ></SearchDetails>
    </SearchLayout>
  );
}

function SearchDetails({
  setMode,
  handleModeClick,
  mode,
  handleVertIconClick,
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <SearchIcons
        mode={mode}
        setMode={setMode}
        handleModeClick={handleModeClick}
      ></SearchIcons>
      <hr className='my-6 border rounded'></hr>
      <div className='pb-2'>
        <SearchBars
          mode={mode}
          handleVertIconClick={handleVertIconClick}
          startingPoint={startingPoint}
          destination={destination}
          setStartingPoint={setStartingPoint}
          setDestination={setDestination}
        ></SearchBars>
      </div>
    </div>
  );
}

let SearchDiv1 = styled.div`
  display: flex;
  padding-left: 1rem;
  align-items: center;
  padding-right: 1rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

let SearchIconsV2 = [
  { name: 'driving', component: DriveEtaIcon },
  {
    name: 'transit',
    component: DirectionsBusIcon
  },
  {
    name: 'transit',
    component: DirectionsBusIcon
  }
];
const Search = { driving: DriveEtaIcon, transit: DirectionsBusIcon };

function SearchIcons({ mode, setMode, handleModeClick }) {
  let Div1 = styled.div`
    display: flex;
    padding-right: 2.5rem;
  `;

  return (
    <SearchDiv1>
      <div class='div1'>
        {mode === 'driving' ? (
          <button value='driving' onClick={() => setMode('driving')}>
            {/* {Object.keys(Search).map(key => {
              let Component = Search[key];
              return (
                <div>
                  <Component />
                </div>
              );
            })} */}

            <DriveEtaIcon></DriveEtaIcon>
            <div>Selected</div>
          </button>
        ) : (
          <button value='driving' onClick={() => setMode('driving')}>
            <DriveEtaIcon></DriveEtaIcon>
          </button>
        )}
      </div>
      <div class='div1'>
        {mode === 'transit' ? (
          <button value='transit' onClick={() => setMode('transit')}>
            <DirectionsBusIcon></DirectionsBusIcon>
            <div>Selected</div>
          </button>
        ) : (
          <button value='transit' onClick={() => setMode('transit')}>
            <DirectionsBusIcon></DirectionsBusIcon>
          </button>
        )}
      </div>
      <div class='div1'>
        {mode === 'walking' ? (
          <button value='walking' onClick={() => setMode('walking')}>
            <DirectionsWalkIcon></DirectionsWalkIcon>
            <div>Selected</div>
          </button>
        ) : (
          <button value='walking' onClick={() => setMode('walking')}>
            <DirectionsWalkIcon></DirectionsWalkIcon>
          </button>
        )}
      </div>
      <div>
        {mode === 'bicycling' ? (
          <button value='bicycling' onClick={() => setMode('bicycling')}>
            <DirectionsBikeIcon></DirectionsBikeIcon>
            <div>Selected</div>
          </button>
        ) : (
          <button value='bicycling' onClick={() => setMode('bicycling')}>
            <DirectionsBikeIcon></DirectionsBikeIcon>
          </button>
        )}
      </div>
    </SearchDiv1>
  );
}

function SearchBars({
  mode,
  handleVertIconClick,
  startingPoint,
  destination,
  setStartingPoint,
  setDestination
}) {
  return (
    <div>
      <div className='searchDiv1'>
        <div className='searchDiv2'>
          <MaterialAutocomplete
            label='Starting Point'
            setInput={setStartingPoint}
          ></MaterialAutocomplete>
        </div>
        <div className='searchDiv3'>
          {/* <button onClick={() => handleVertIconClick()}> */}
          <SwapVertIcon
            style={{ fontSize: 30, opacity: 0 }}
            className='searchSwapVertIcon1'
          ></SwapVertIcon>
          {/* </button> */}
        </div>
        <div></div>
      </div>

      <div className='searchDiv4'>
        <div className='searchDiv5'>
          <MaterialAutocomplete
            label='Destination'
            setInput={setDestination}
          ></MaterialAutocomplete>
        </div>
        <div className='searchDiv6'>
          <button
            onClick={() =>
              console.log(
                'mode:',
                mode,
                'startingPoint:',
                startingPoint,
                'destination:',
                destination
              )
            }
          >
            <SearchIcon
              style={{ fontSize: 30 }}
              className='searchSearchIcon1'
            ></SearchIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectionResultsPreview({
  handleTimeEstimatesClick,
  didSearch,
  mode,
  startingPoint,
  destination
}) {
  if (!didSearch) {
    return null;
  }

  return (
    <div className='selectionDiv1'>
      <StyledListItem className='selectionStyledListItem1'>
        {/* <img
          className='rounded'
          src='https://cdn.discordapp.com/attachments/675090859493949484/675152739214426132/screenshot.png'
        ></img> */}
        <div className='selectionDiv2'>
          <button
            onClick={() => handleTimeEstimatesClick()}
            className='selectionButton1'
          >
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
