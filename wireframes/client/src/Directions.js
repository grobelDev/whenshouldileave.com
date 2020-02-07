import React, { useState, useTransition, Suspense, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function Directions({ resource }) {
  return (
    <div>
      {/* <DirectionsWrapper resource={resource}></DirectionsWrapper> */}
      <SkeletonDirections></SkeletonDirections>
    </div>
  );
}

function DirectionsWrapper({ resource }) {
  return (
    <ErrorBoundary fallback={<div>Error in loading data</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <DirectionsDetail resource={resource}></DirectionsDetail>
      </Suspense>
    </ErrorBoundary>
  );
}

function SkeletonDirections() {
  return (
    <div>
      <div>sdf</div>
    </div>
  );
}

function DirectionsDetail({ resource }) {
  let results = resource.directions.read();
  let env = process.env.NODE_ENV || 'development';

  let startingPoint = results[0].query.origin;
  let destination = results[0].query.destination;

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

// export const StyledEmail = styled.div`
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   h3 {
//     font-weight: bold;
//     margin-bottom: 0.3rem;
//   }
// `;
