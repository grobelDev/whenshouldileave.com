import React, { Suspense, useEffect, Fragment, useState } from 'react';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import { useParams } from 'react-router-dom';
import { fetchData } from './api';

import styled, { css } from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShareIcon from '@material-ui/icons/Share';
import MapIcon from '@material-ui/icons/Map';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';

/**
 * Central Component for ResultsPage meta-component.
 * Consumed in App.js
 *
 */

export default function ResultsPage() {
  let { mode, startingPoint, destination } = useParams();

  return (
    <PageLayoutV2>
      <PageHeader>
        <div className='text-gray-600'>
          from <span className='text-gray-900'>{startingPoint}</span> <br />
          to <span className='text-gray-900'>{destination}</span>{' '}
        </div>
        <ResourceWrapper
          mode={mode}
          startingPoint={startingPoint}
          destination={destination}
        ></ResourceWrapper>
      </PageHeader>
    </PageLayoutV2>
  );
}

function ResourceWrapper({ mode, startingPoint, destination }) {
  if (!mode || !startingPoint || !destination) {
    return null;
  }

  let initialResource = fetchData(startingPoint, destination);

  return <ResultsWrapper resource={initialResource}></ResultsWrapper>;
}

function ResultsWrapper({ resource }) {
  return (
    <div>
      <hr className='my-10 border'></hr>
      <ErrorBoundary fallback={<div>Error in loading data</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ResultsDetailV2 resource={resource}></ResultsDetailV2>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function ResultsDetailV2({ resource }) {
  return <ResultsCells resource={resource}></ResultsCells>;
}

function ResultsCells({ resource }) {
  let results = resource.directions.read();
  let env = process.env.NODE_ENV || 'development';

  return (
    <Fragment>
      {results.map(result => {
        let startingPoint = result.query.origin;
        let destination = result.query.destination;

        let travelMode = result.query.mode;

        let departureTimeEpoch = result.query.departure_time;
        let departureTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
        departureTime.setUTCSeconds(departureTimeEpoch);
        let departureTimeString = formatAMPM(departureTime);

        let durationInTrafficObject =
          result.json.routes[0].legs[0].duration_in_traffic;
        let durationInTrafficEpoch = durationInTrafficObject.value;

        let durationInTraffic = durationInTrafficObject.text;

        let typicalDurationEpoch = result.json.routes[0].legs[0].duration.value;
        let percentDifference = getPercentDifference(
          typicalDurationEpoch,
          durationInTrafficEpoch
        );

        let typicalDuration = result.json.routes[0].legs[0].duration.text;

        let routeColor = getColorFromPercentDifference(percentDifference);

        let arrivalTime = new Date(0);
        arrivalTime.setUTCSeconds(departureTimeEpoch + durationInTrafficEpoch);
        let arrivalTimeString = formatAMPM(arrivalTime);

        return (
          <ResultsCell
            key={departureTimeEpoch}
            startingPoint={startingPoint}
            destination={destination}
            departureTime={departureTimeString}
            durationInTraffic={durationInTraffic}
            arrivalTime={arrivalTimeString}
            travelMode={travelMode}
            routeColor={routeColor}
            typicalDuration={typicalDuration}
          ></ResultsCell>
        );
      })}
    </Fragment>
  );

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}

function ResultsCell({
  startingPoint,
  destination,
  departureTime,
  typicalDuration,
  durationInTraffic,
  arrivalTime,
  travelMode,
  routeColor
}) {
  const [selected, setSelected] = useState(false);

  return (
    <Fragment>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg '>
        <div onClick={() => setSelected(!selected)}>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='pr-4 text-gray-600 hover:text-black'>
                {selected ? (
                  <StyledRotatedArrow>
                    <ArrowForwardIosIcon
                      style={{ fontSize: 15 }}
                    ></ArrowForwardIosIcon>
                  </StyledRotatedArrow>
                ) : (
                  <ArrowForwardIosIcon
                    style={{ fontSize: 15 }}
                  ></ArrowForwardIosIcon>
                )}
              </div>
              <div className='text-2xl font-light'>{departureTime}</div>
            </div>
            <span className={`text-2xl text-${routeColor}-600`}>
              {durationInTraffic}
            </span>
          </div>
          <div className='flex items-center justify-end pl-8 text-gray-600'>
            <div>Arrive around {arrivalTime}</div>
          </div>
        </div>
        {selected ? (
          <ResultsCellSelected
            startingPoint={startingPoint}
            destination={destination}
            travelMode={travelMode}
          ></ResultsCellSelected>
        ) : null}
      </StyledListItem>
    </Fragment>
  );
}

function ResultsCellSelected({ startingPoint, destination, travelMode }) {
  let googleMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${startingPoint}&destination=${destination}&travelmode=${travelMode}`;

  return (
    <Fragment>
      <hr className='my-4'></hr>
      <div className='pl-8'>
        <div className='flex items-center'>
          <MapIcon className='mr-3'></MapIcon>
          <a href={googleMapUrl} target='_blank'>
            <span className='text-blue-600'>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

// Layout
function PageLayoutV2({ children }) {
  return (
    <div className='relative w-full max-w-screen-xl px-6 pt-8 pb-10 mx-auto'>
      <div className='-mx-6'>
        <div className='max-w-2xl px-6 mx-auto text-center sm:text-left'>
          {children}
        </div>
      </div>
    </div>
  );
}

function PageHeader({ children }) {
  return (
    <div id='content'>
      <div id='app' className='flex'>
        <div className='w-full pt-12 pb-16 lg:pt-28'>
          <div className='max-w-3xl mb-4'>
            <h1 className='text-3xl font-light'>When Should I Leave?</h1>
          </div>
          <div className=''>
            <div className='w-full max-w-3xl mx-auto'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getPercentDifference(x, y) {
  return (x / y - 1) * 100;
}

function getColorFromPercentDifference(percent) {
  if (percent < 0) {
    return 'red';
  }
  if (percent < 10) {
    return 'yellow';
  }
  if (percent >= 10) {
    return 'green';
  }
}

const StyledAction = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -100px;
  border-radius: 0;
  width: ${props => props.width}px;
  background-color: ${({ archiveAction }) =>
    archiveAction ? '#5c6bc0' : '#ef5350'};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 0;
`;
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

const StyledRotatedArrow = styled.div`
  transform: rotate(90deg);
`;
