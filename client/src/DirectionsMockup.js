import React from 'react';

export default function Results({ resource }) {
  return (
    <Layout>
      <DirectionsDetail></DirectionsDetail>
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <div className='relative w-full px-6 pt-5 pb-40 mx-auto max-w-screen-xl md:pb-24'>
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
                    <h1 className='text-3xl font-light'>Results</h1>
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
                    <div className='w-full max-w-3xl px-6 mx-auto'>
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

function DirectionsDetail() {
  return <div>Directions Detail</div>;
}

//   origin: '1600 Amphitheatre Parkway, Mountain View, CA',
//   destination: '1 Infinite Loop, Cupertino, CA 95014, USA',
