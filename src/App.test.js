import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
  // ReactDOM.unmountComponentAtNode(div);
});

// ReactDOM.render(
//   <Router>
//     <Helmet>
//       <meta charSet='utf-8' />
//       <title>When Should I Leave</title>
//       <link rel='canonical' href='http://whenshouldileave.com' />
//     </Helmet>

//     <App />
//   </Router>,
//   document.getElementById('root')
// );
