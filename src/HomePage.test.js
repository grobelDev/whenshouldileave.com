import React, { Fragment, useRef, useEffect } from 'react';
import HomePage from './HomePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <HomePage />
    </Router>,
    div
  );
  // ReactDOM.unmountComponentAtNode(div);
});
