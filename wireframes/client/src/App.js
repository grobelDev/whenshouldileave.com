import React, {
  useState,
  // useTransition,
  // Suspense,
  // useEffect,
  // ErrorBoundary,
  Fragment
} from 'react';
import styled from 'styled-components';

import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import MaterialAutocomplete from './MaterialAutocomplete';

import { fetchData } from './api';
// import Results from './Results';

import SplashPageMockup from './SplashPageMockup';
import DirectionsMockup from './DirectionsMockup';
import SelectionMockup from './SelectionMockup';

const routes = [
  {
    path: '/SplashPageMockup',
    component: SplashPageMockup,
    title: 'SplashPage Mockup'
  },
  {
    path: '/SelectionMockup',
    component: SelectionMockup,
    title: 'SelectionPage Mockup'
  },
  {
    path: '/DirectionsMockup',
    component: DirectionsMockup,
    title: 'DirectionsPage Mockup'
  }
  // { path: '/music-drawer', component: MusicDrawer, title: 'Music drawer' },

  // { path: '/photo-grid', component: PhotoGrid, title: 'Photo Grid' },
  // { path: '/notification', component: Notification, title: 'Notification' }
];

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
    console.log(input);
  }

  function handleDestinationInput(input) {
    let destination = input.description;
    setDestination(destination);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!startingPoint || !destination) {
      console.log('no startingPoint or destination');
      return;
    }
    setResource(fetchData(startingPoint, destination));
  }

  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <StyledNav>
            <h1>Wireframe Components</h1>
            <ul>
              {routes.map(r => (
                <li key={r.title}>
                  <Link to={r.path}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </StyledNav>
        </Route>
        <Route path='/SplashPageMockup'>
          <SplashPageMockup></SplashPageMockup>
        </Route>
        <Route path='/SelectionMockup'>
          <SelectionMockup></SelectionMockup>
        </Route>
        <Route path='/DirectionsMockup'>
          <DirectionsMockup></DirectionsMockup>
        </Route>
      </Switch>
    </Fragment>
  );
}

const StyledNav = styled.nav`
  padding: 1.5rem;
  li {
    display: block;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  h1 {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;
