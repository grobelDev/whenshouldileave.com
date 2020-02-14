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

export default function ResultsPage() {
  let { mode, startingPoint, destination } = useParams();

  // useEffect(() => {

  // }, [mode, startingPoint, destination]);

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

  // console.log('resource wrapper:', startingPoint, destination);
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

function ResultsDetail({ resource }) {
  let results = resource.directions.read();
  let env = process.env.NODE_ENV || 'development';

  // console.log(results);
  let startingPoint = results[0].query.origin;
  let destination = results[0].query.destination;

  // let startingPoint = 'startingPoint';
  // let destination = 'destination';

  return (
    <div>
      <div className='font-bold'>
        {startingPoint} -> {destination}
      </div>
      <div></div>
      <div>
        {results.map(result => {
          let time = result.query.departure_time;

          let currentTime = new Date(0);
          currentTime.setUTCSeconds(time);

          let currentTimeString = currentTime.toLocaleTimeString();

          let routes = result.json.routes;
          let route = routes[0];
          return (
            <RoutesDetail
              route={route}
              time={currentTimeString}
              key={`${route}/${currentTimeString}`}
            ></RoutesDetail>
          );
        })}
      </div>
      <div>{env === 'development' ? JSON.stringify(results) : null}</div>
    </div>
  );
}

function ResultsDetailV2({ resource }) {
  return <ResultsCells resource={resource}></ResultsCells>;
}

function ResultsCells({ resource }) {
  let results = resource.directions.read();
  let env = process.env.NODE_ENV || 'development';

  // console.log(results);
  // let startingPoint = results[0].query.origin;
  // let destination = results[0].query.destination;

  return (
    <Fragment>
      {/* <div>This trip takes 14 mins on average.</div> */}
      {results.map(result => {
        let startingPoint = result.query.origin;
        let destination = result.query.destination;

        let travelMode = result.query.mode;

        let departureTimeEpoch = result.query.departure_time;
        let departureTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
        departureTime.setUTCSeconds(departureTimeEpoch);
        let departureTimeString = formatAMPM(departureTime);
        // console.log(departureTimeReturn);
        // console.log(departureTimeString);

        let durationInTrafficObject =
          result.json.routes[0].legs[0].duration_in_traffic;
        let durationInTrafficEpoch = durationInTrafficObject.value;
        // let textInTraffic = durationInTrafficObject.text.split(' ')[0];
        // let durationInTrafficString = `${textInTraffic} min`;

        let durationInTraffic = durationInTrafficObject.text;

        let typicalDurationEpoch = result.json.routes[0].legs[0].duration.value;
        let percentDifference = getPercentDifference(
          typicalDurationEpoch,
          durationInTrafficEpoch
        );
        // let typicalDurationText = result.json.routes[0].legs[0].duration.text;
        // let typicalDurationStringValue = typicalDurationText.split(' ')[0];
        // let typicalDurationString = `${typicalDurationStringValue} min`;
        // let typicalDuration = typicalDurationText
        let typicalDuration = result.json.routes[0].legs[0].duration.text;

        let routeColor = getColorFromPercentDifference(percentDifference);

        console.log(routeColor);
        console.log(percentDifference);
        // console.log(typicalDuration);
        console.log(result);
        // console.log(durationInTrafficObject, minutesInTraffic, textInTraffic);
        // console.log(durationInTrafficString);

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

  // console.log(departureTime, durationInTraffic);

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
          {/* <div className='flex items-center justify-end pl-8 text-gray-600'>
            <div>Total Time is {typicalDuration}</div>
          </div> */}
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
        <div className='flex items-center pt-2'>
          <EmailIcon className='mr-3'></EmailIcon>
          <span className='text-blue-600'>Email results</span>
        </div>
        {/* <div className='flex items-center pt-2'>
          <NotificationsIcon className='mr-3'></NotificationsIcon>
          <span className='text-blue-600'>
            Set reminder to leave 10 minutes before.
          </span>
        </div> */}
        <div className='flex items-center pt-2'>
          <ShareIcon className='mr-3'></ShareIcon>{' '}
          <span className='text-blue-600'>Share</span>
        </div>
      </div>
    </Fragment>
  );
}

function RoutesDetail({ route, time }) {
  let legs = route.legs;
  let leg = legs[0];

  let distance = leg.distance;
  let duration = leg.duration;
  let durationInTraffic = leg.duration_in_traffic;

  let textResult = {
    distance: distance.text,
    duration: duration.text,
    durationInTraffic: durationInTraffic.text
  };

  return (
    <div className='p-2'>
      <div className='flex border-2'>
        <div className='flex flex-col px-2 py-1'>
          <div>Departure Time:</div>
          <div>{time}</div>
        </div>
        <div className='flex flex-col p-1'>
          <div>distance: {textResult.distance}</div>
          <div>duration: {textResult.duration}</div>
          <div>durationInTraffic: {textResult.durationInTraffic}</div>
        </div>
        <div>
          <div>Link:</div>
        </div>
      </div>
    </div>
  );
}

// Layout
function PageLayoutV2({ children }) {
  return (
    <div className='relative w-full max-w-screen-xl px-6 pt-16 pb-10 mx-auto md:pt-32 md:pb-24'>
      <div className='-mx-6 xl:flex'>
        <div className='max-w-2xl px-6 mx-auto text-left md:max-w-3xl'>
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
          <div className='max-w-3xl px-6 mx-auto mb-4'>
            <h1 className='text-3xl font-light'>When Should I Leave?</h1>
            {/* <div className='mt-2 text-gray-600'>May your roads be green.</div> */}

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

function DirectionsMockup({ resource }) {
  return (
    <Layout>
      {/* <DirectionsDetail></DirectionsDetail> */}
      {/* <DirectionsCells></DirectionsCells> */}
      <DirectionsCellsV3></DirectionsCellsV3>
      <DirectionsCellSelected></DirectionsCellSelected>
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <div className='relative w-full max-w-screen-xl pt-5 pb-40 mx-auto md:px-6 md:pb-24'>
      <div className='-mx-6'>
        <div className='max-w-2xl px-6 mx-auto text-left md:max-w-3xl'>
          <div
            id='content-wrapper'
            className='w-full min-h-screen lg:static lg:max-h-full lg:overflow-visible '
          >
            <div id='content'>
              <div id='app' className='flex'>
                <div className='w-full pt-12 pb-16 lg:pt-28'>
                  <div className='max-w-3xl px-6 mx-auto mb-6'>
                    <h1 className='text-3xl font-light'>
                      When Should I Leave?
                    </h1>
                    <div className='mt-2 text-gray-600'>
                      from{' '}
                      <span className='text-gray-900'>
                        1600 Amphitheatre Parkway, Mountain View, CA
                      </span>{' '}
                      <br />
                      to{' '}
                      <span className='text-gray-900'>
                        1 Infinite Loop, Cupertino, CA 95014, USA
                      </span>
                    </div>
                    <hr className='mt-4 mb-8 border-b-2 border-gray-200'></hr>
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
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectionsCellsV3() {
  return (
    <div>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg '>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>10:12 PM (Now)</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>40 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 10:52 PM</div>
        </div>
      </StyledListItem>

      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg '>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>10:30 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>57 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 11:27 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg '>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>11:00 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>1 h 10 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:40 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>11:30 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-green-600'>40 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:10 PM</div>
        </div>
      </StyledListItem>
    </div>
  );
}

function DirectionsCellsV2() {
  return (
    <div>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg md:mt-4'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>10:12 PM (Now)</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>40 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 10:52 PM</div>
        </div>
      </StyledListItem>

      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg md:mt-4'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>10:30 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>57 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 11:27 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg md:mt-4'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>11:00 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>1 h 10 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:40 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg md:mt-4'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>11:30 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-green-600'>40 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:10 PM</div>
        </div>
      </StyledListItem>
    </div>
  );
}

function DirectionsCellSelected() {
  return (
    <div>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg '>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <StyledRotatedArrow>
                <ArrowForwardIosIcon
                  style={{ fontSize: 15 }}
                ></ArrowForwardIosIcon>
              </StyledRotatedArrow>
            </div>
            <div className='text-2xl font-light'>12:00 PM</div>
          </div>
          <span className='text-2xl text-green-600'>35 min</span>
        </div>
        <div className='flex items-center justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:35 PM</div>
        </div>

        <hr className='my-4'></hr>
        <div className='pl-8'>
          <div className='flex items-center'>
            <MapIcon className='mr-3'></MapIcon>
            <span className='text-blue-600'>Open in Google Maps</span>
          </div>
          <div className='flex items-center pt-2'>
            <NotificationsIcon className='mr-3'></NotificationsIcon>
            <span className='text-blue-600'>
              Set reminder to leave 10 minutes before.
            </span>
          </div>
          <div className='flex items-center pt-2'>
            <ShareIcon className='mr-3'></ShareIcon>{' '}
            <span className='text-blue-600'>Share</span>
          </div>
        </div>
      </StyledListItem>
    </div>
  );
}

function DirectionsCells() {
  return (
    <div>
      <StyledListItem className='p-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <span className='text-2xl text-red-600'>1 h 5 min</span>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <div className='text-2xl font-light '>7:30 PM</div>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='pl-8 text-gray-600'>
          <div>via I-15 S</div>
          <div>Predicted best route, despite the usual traffic</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <span className='text-2xl text-green-600'>45 min</span>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <div className='text-2xl font-light'>8:00 PM</div>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='pl-8 text-gray-600'>
          {/* <div>via I-15 S</div> */}
          <div>Predicted best route, despite the usual traffic</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <span className='text-2xl text-yellow-600'>1 h</span>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <div className='text-2xl font-light '>8:30 PM</div>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='pl-8 text-gray-600'>
          <div>via I-15 S</div>
          <div>Predicted best route, despite the usual traffic</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <span className='text-2xl text-green-600'>50 m</span>
          </div>
          <div className='text-2xl font-light'>9:00 PM</div>
        </div>
        <div className='pl-12 text-gray-600'>
          <div className='flex justify-end'>Arrive around 9:45 PM</div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <span className='text-2xl text-green-600'>50 m</span>
          </div>
          <div className='text-2xl font-light'>9:30 PM</div>
        </div>

        <div className='text-gray-600'>
          {/* <div className=''>sdf</div> */}
          <div className='flex justify-between pl-12'>
            <div className='text-sm font-semibold text-blue-500'>DETAILS</div>
            <div>Arrive around 10:20 PM</div>
          </div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>
      <StyledListItemSelected className='p-4 mt-4 font-normal bg-gray-100 border border-l-4 rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <span className='text-2xl text-yellow-600'>1 h</span>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <div className='text-2xl font-light'>10:00 PM</div>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex justify-between pl-8 text-gray-600'>
          <div className='text-sm font-semibold text-blue-500'>DETAILS</div>
          <div>Predicted best route, despite the usual traffic</div>
        </div>
      </StyledListItemSelected>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <span className='text-2xl text-yellow-600'>1 h</span>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <div className='text-2xl font-light'>10:30 PM</div>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 11:30 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg md:mt-4'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>10:30 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>57 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 11:27 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          {/* <div className='leading-none'> */}
          <div className='flex items-center'>
            <div className='pr-4 text-gray-600 hover:text-black'>
              <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon>
            </div>
            <div className='text-2xl font-light'>11:00 PM</div>
          </div>

          {/* </div> */}
          {/* <div className='text-2xl font-light text-gray-600'>(44.2 miles)</div> */}
          <span className='text-2xl text-yellow-600'>1 h 10 min</span>

          {/* <div className='text-base font-normal'> */}
          {/* 7:45 PM */}
          {/* Data from the last {'count'} games. */}
          {/* </div> */}
        </div>
        <div className='flex justify-end pl-8 text-gray-600'>
          {/* <div className='text-sm font-semibold text-blue-500'>DETAILS</div> */}
          <div>Arrive around 12:40 PM</div>
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <div className='text-2xl font-light'>9:00 PM</div>
          </div>
          <span className='text-2xl text-green-600'>50 min</span>
        </div>
        <div className='pl-12 text-gray-600'>
          <div className='flex justify-beginning'>Arrive around 9:45 PM</div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border rounded-lg shadow-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <div className='text-2xl font-light'>9:00 PM</div>
          </div>
          <span className='text-2xl text-green-600'>50 min</span>
        </div>
        <div className='pl-12 text-gray-600'>
          <div className='flex justify-end'>Arrive around 9:45 PM</div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>

      <StyledListItem className='p-4 mt-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <div className='text-2xl font-light'>9:00 PM</div>
          </div>
          <span className='text-2xl text-green-600'>50 min</span>
        </div>
        <div className='pl-12 text-gray-600'>
          <div className='flex justify-beginning'>Arrive around 9:45 PM</div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>
      <StyledListItem className='p-4 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='pl-2 pr-4 text-gray-700'>
              <DriveEtaIcon style={{ fontSize: 25 }}></DriveEtaIcon>
              {/* <ArrowForwardIosIcon
                style={{ fontSize: 15 }}
              ></ArrowForwardIosIcon> */}
            </div>
            <div className='text-2xl font-light'>9:00 PM</div>
          </div>
          <span className='text-2xl text-green-600'>50 min</span>
        </div>
        <div className='pl-12 text-gray-600'>
          <div className='flex justify-beginning'>Arrive around 9:45 PM</div>
          {/* <div className='flex justify-end'>
            Predicted best route, despite the usual traffic
          </div> */}
        </div>
      </StyledListItem>
      {/* <ul ref={listRef}>
              {cellIds.map(id => {
                const isBeingDeleted = id === deletingId;
                const { avatar, title, message, profileImage } = cells[
                  id % cells.length
                ];
                return (
                  <ListItem
                    key={id}
                    profileImage={profileImage}
                    id={id}
                    isBeingDeleted={isBeingDeleted}
                    avatar={avatar}
                    title={title}
                    message={message}
                    name={name}
                    region={props.region}
                  />
                );
              })}
              <StyledCollapseHandler
                ref={collapseHandlerRef}
                exitDuration={exitDuration}
              />
            </ul> */}
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

const StyledEmail = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  h3 {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

const StyledAvatar = styled.div`
  background-color: #f3f3f3;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const StyledMoreAction = styled.button``;

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

const StyledListItemSelected = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #f3f3f3;
  h3 {
    margin-bottom: 0 !important;
  }
  border-left-color: #4299e1;
`;

const StyledRotatedArrow = styled.div`
  transform: rotate(90deg);
`;

const StyledListItemContainer = styled.li`
  position: ${props => (props.isBeingDeleted ? 'absolute' : 'relative')};
  width: 100%;
  ${props =>
    props.willTransform
      ? css`
          will-change: transform;
          > ${StyledListItem} {
            will-change: transform;
          }
          > ${StyledAction} {
            will-change: transform;
            > div {
              will-change: transform;
            }
          }
        `
      : ''}
  overflow: hidden;
`;

const StyledCollapseHandler = styled.div`
  will-change: transform;
  transition: transform ${props => props.exitDuration}ms ease-out;
`;

//   origin: '1600 Amphitheatre Parkway, Mountain View, CA',
//   destination: '1 Infinite Loop, Cupertino, CA 95014, USA',

// ARCHIVE:
