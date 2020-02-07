import React, {
  useState,
  useTransition,
  Suspense,
  useEffect,
  ErrorBoundary
} from 'react';
import styled from 'styled-components';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MaterialAutocomplete from './MaterialAutocomplete';

import { fetchData } from './api';
import Results from './Results';
import DirectionsMockup from './DirectionsMockup';
import SelectionMockup from './SelectionMockup';
// If you want to use the provided css
// import 'react-google-places-autocomplete/dist/assets/index.css';
// const initialResource = fetchData(
//   '3225 N Harbor Dr, San Diego, CA 92101',
//   '1 Infinite Loop, Cupertino, CA 95014, USA'
// );

export default function App() {
  // const [resource, setResource] = useState(initialResource);
  const [resource, setResource] = useState();

  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);
  // const [startTransition, isPending] = useTransition({
  //   // Wait 10 seconds before fallback
  //   timeoutMs: 1000
  // });

  //     startTransition(() => {
  //       setResource(newResource);
  //     });

  // useEffect(() => {
  //   if (!startingPoint || !destination) {
  //     return;
  //   }

  //   setResource(fetchData(startingPoint, destination));
  // }, [startingPoint, destination]);

  function handleStartingInput(input) {
    // console.log(input);
    // let _startingPoint = input.description
    // setStartingPoint(_startingPoint)
    // console.log(input);
    // let startingPoint = input.description;
    // setStartingPoint(startingPoint);
    // let destination = '1 Infinite Loop, Cupertino, CA 95014, USA';
    // setResource(fetchData(startingPoint, destination));
    console.log(input);
  }

  function handleDestinationInput(input) {
    let destination = input.description;
    setDestination(destination);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.description);
    // console.log(event);
    if (!startingPoint || !destination) {
      console.log('no startingPoint or destination');
      return;
    }
    setResource(fetchData(startingPoint, destination));
  }

  return (
    <div>
      <div>
        <div id='header'>
          <div className='pt-24 bg-gray-100 lg:pt-0'>
            <div className='fixed inset-x-0 top-0 z-50 flex items-center min-w-0 bg-gray-100 border-b-2 border-gray-200 lg:border-b-0 lg:static'>
              <div className='relative w-full px-6 mx-auto max-w-screen-xl'>
                <div className='flex flex-col justify-center h-12 '>
                  <div className='flex items-center -mx-6'>
                    <div className='pl-6 pr-6 lg:w-1/4 xl:w-1/5'>
                      <div className='flex items-center'>
                        <a href='/' className='flex items-center'>
                          {/* <img
                            className='w-auto h-12 pr-1'
                            src='https://i.imgur.com/2mdtBD3.png'
                            alt='grobelDevIcon'
                          ></img> */}
                          <div className='text-2xl text-blue-800 font-regular md:block'>
                            Green Roads
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='flex justify-end flex-grow'>
                      <div className='flex items-center justify-start px-6 text-gray-500'>
                        <a
                          href='https://github.com/grobelDev'
                          className='flex items-center block mr-5 text-gray-500 hover:text-gray-700'
                        >
                          <svg
                            className='w-5 h-5 fill-current'
                            viewBox='0 0 20 20'
                          >
                            <path d='M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0'></path>
                          </svg>
                        </a>
                        <a
                          href='https://twitter.com/grobelDev'
                          className='flex items-center block mr-5 text-gray-500 hover:text-gray-700'
                        >
                          <svg
                            className='w-5 h-5 fill-current'
                            viewBox='0 0 20 20'
                          >
                            <path d='M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84'></path>
                          </svg>
                        </a>
                        <a
                          href='https://www.linkedin.com/in/harrison-chung-8073b5197/'
                          className='flex items-center block text-gray-500 hover:text-gray-700'
                        >
                          <svg
                            className='w-5 h-5 fill-current'
                            viewBox='0 0 24 24'
                          >
                            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <GooglePlacesAutocomplete
                  className='flex flex-grow'
                  onSelect={console.log}
                /> */}
                {/* <div>sdf</div> */}
              </div>
            </div>
            <div className='relative w-full px-6 pt-16 pb-10 mx-auto max-w-screen-xl md:pt-32 md:pb-24'>
              <div className='-mx-6 xl:flex'>
                <div className='max-w-2xl px-6 mx-auto text-left md:text-center xl:text-left md:max-w-3xl'>
                  <h1 className='text-3xl font-light leading-tight sm:text-4xl md:text-5xl xl:text-4xl'>
                    Find the best time to leave <br></br>
                    <span className='font-normal text-blue-500 sm:block'>
                      with the lowest traffic.
                    </span>
                  </h1>
                  <p className='mt-6 leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-lg'>
                    Green Roads will give you an hour by hour breakdown of
                    traffic.<br></br>
                    Driving is better with the road to yourself. <br></br>
                    {/* <br></br>
                    Put in some locations for your directions. <br></br>
                    Look at the hour by hour breakdown of traffic results.
                    <br></br>Choose the best time to leave. <br></br>
                    Efficiently drive to your destination.
                    <br></br> */}
                  </p>
                  <div className='py-8'>
                    <form onSubmit={handleSubmit}>
                      {/* <GooglePlacesAutocomplete
                        id={'startingPointAutocomplete'}
                        inputClassName='w-full border-2 h-12 border-blue-600 rounded-lg px-3'
                        suggestionsClassNames={{
                          container: 'text-blue-600',
                          suggestion: 'text-blue-600',
                          suggestionActive: 'text-blue-600'
                        }}
                        placeholder='Starting Point'
                        onSelect={handleStartingInput}
                      /> */}
                      {/* <GooglePlacesAutocomplete
                        id={'destinationAutocomplete'}
                        inputClassName='w-full border-2 h-12 border-blue-600 rounded-lg px-3 mt-8'
                        suggestionsClassNames={{
                          container: 'text-blue-600',
                          suggestion: 'text-blue-600',
                          suggestionActive: 'text-blue-600'
                        }}
                        placeholder='Destination'
                        onSelect={handleDestinationInput}
                      /> */}
                      {/* <div className='w-full h-12 px-3 mt-8 border-2 border-blue-600 rounded-lg'> */}
                      <MaterialAutocomplete
                        label='Starting Point'
                        // onSelect={handleDestinationInput}
                        setInput={setStartingPoint}
                        onChange={handleStartingInput}
                        // handleInput={handleStartingInput}
                      ></MaterialAutocomplete>
                      {/* </div> */}
                      {/* <div className='w-full h-12 px-3 mt-8 border-2 border-blue-600 rounded-lg'> */}
                      <div className='pt-4'>
                        <MaterialAutocomplete
                          label='Destination'
                          // onSelect={handleDestinationInput}
                          setInput={setDestination}
                          // handleInput={handleDestinationInput}
                        ></MaterialAutocomplete>
                      </div>
                      {/* </div> */}
                      <button
                        type='submit'
                        value='Submit'
                        className='px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-8 border-b-2 border-gray-200'></hr>
            {/* <Results resource={resource}></Results> */}
            <SelectionMockup></SelectionMockup>
            <DirectionsMockup></DirectionsMockup>
          </div>
        </div>
      </div>
    </div>
  );
}

// const AnimatedA = styled.a`
//   transform: translate(0px, 0px);
//   transition-duration: 0.2s;
//   :hover {
//     transform: translate(2px, 0px);
//   }
// `;
