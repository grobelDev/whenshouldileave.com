import React, { Fragment, useRef, useEffect } from 'react';
import ResultsPage from './ResultsPage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <ResultsPage />
    </Router>,
    div
  );
  // ReactDOM.unmountComponentAtNode(div);
});
