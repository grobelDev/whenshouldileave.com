import React from 'react';
import styled from 'styled-components';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

export function PageLayout({ children }) {
  return (
    <div className='relative w-full max-w-screen-xl pt-5 pb-40 mx-auto md:pb-24'>
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

export function PageHeader({ children }) {
  return (
    <div id='content'>
      <div id='app' className='flex'>
        <div className='w-full pt-12 pb-16 lg:pt-28'>
          <div className='max-w-3xl px-6 mx-auto mb-6'>
            <h1 className='text-3xl font-light'>Directions</h1>
            <div className='mt-2 text-gray-600'>May your roads be green.</div>

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

export function SearchLayout({ children }) {
  return (
    <StyledListItem className='p-4 pb-5 font-normal bg-gray-100 border shadow-lg md:rounded-lg'>
      {children}
    </StyledListItem>
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
