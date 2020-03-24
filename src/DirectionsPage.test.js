import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  useHistory
} from 'react-router-dom';
import DirectionsPage from './DirectionsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DirectionsPage></DirectionsPage>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
