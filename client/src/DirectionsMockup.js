import React from 'react';
import styled, { css } from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShareIcon from '@material-ui/icons/Share';
import MapIcon from '@material-ui/icons/Map';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Results({ resource }) {
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
    <div className='relative w-full pt-5 pb-40 mx-auto md:px-6 max-w-screen-xl md:pb-24'>
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
