import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './tailwind.css';

import App from './App';

ReactDOM.render(
  <Router>
    <Helmet>
      <meta charSet='utf-8' />
      <title>When Should I Leave</title>
      <link rel='canonical' href='http://whenshouldileave.com' />
    </Helmet>

    <App />
  </Router>,
  document.getElementById('root')
);
