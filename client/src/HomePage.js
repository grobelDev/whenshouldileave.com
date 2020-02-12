import React, { Fragment, useRef, useEffect } from 'react';

import HomePageHero from './HomePageHero';
import DirectionsPage from './DirectionsPage';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = fun => useEffect(fun, []);

export default function HomePage() {
  const myRef = useRef(null);
  const isInitialMount = useRef(true);

  useMountEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log('scrolling');
      scrollToRef(myRef);
    }
  });

  function handleScroll() {
    scrollToRef(myRef);
  }

  return (
    <Fragment>
      <HomePageHero handleScroll={handleScroll}></HomePageHero>
      <div ref={myRef}>
        <DirectionsPage></DirectionsPage>
      </div>
    </Fragment>
  );
}
