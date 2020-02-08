import React, { Fragment } from 'react';

import HomePageHero from './HomePageHero';
import DirectionsPage from './DirectionsPage';

export default function HomePage() {
  return (
    <Fragment>
      <HomePageHero></HomePageHero>
      <DirectionsPage></DirectionsPage>
    </Fragment>
  );
}
