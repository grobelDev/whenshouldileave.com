import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { fetchData } from './api';

import Navbar from './Navbar';
import HomePage from './HomePage';
import DirectionsPage from './DirectionsPage';
import ResultsPage from './ResultsPage';

import SplashPageMockup from './SplashPageMockup';
import DirectionsMockup from './DirectionsMockup';
import ResultsMockup from './ResultsMockup';

const routes = [
  {
    path: '/SplashPageMockup',
    component: SplashPageMockup,
    title: 'SplashPage Mockup'
  },
  {
    path: '/DirectionsMockup',
    component: DirectionsMockup,
    title: 'DirectionsPage Mockup'
  },
  {
    path: '/ResultsMockup',
    component: ResultsMockup,
    title: 'ResultsPage Mockup'
  }
];

/**
 * Central Controller of the Application.
 * Routing with <Router /> is in index.js.
 *
 */
export default function App() {
  const [resource, setResource] = useState();

  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);

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
      <Navbar>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/directions'>
            <DirectionsPage />
          </Route>
          <Route path='/results/:mode/:startingPoint/:destination'>
            <ResultsPage />
          </Route>
          <Route exact path='/wireframes'>
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
            <DirectionsMockup></DirectionsMockup>
          </Route>
          <Route path='/DirectionsMockup'>
            <DirectionsMockup></DirectionsMockup>
          </Route>
          <Route path='/ResultsMockup'>
            <ResultsMockup></ResultsMockup>
          </Route>
          <Route path='/'>
            <div>404 Error (The requested page could not be found).</div>
          </Route>
        </Switch>
      </Navbar>
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
