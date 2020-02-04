const express = require('express');
const cors = require('cors');

const directions = require('./directions.js');
const results = require('./results.js');

// var inputs = {
//   origin: '1600 Amphitheatre Parkway, Mountain View, CA',
//   destination: '1 Infinite Loop, Cupertino, CA 95014, USA',
//   mode: 'driving',
//   departure_time: 'now'
// };

const app = express();

let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use(cors());
} else {
  let corsOptions = {
    origin: 'https://client-gmhtsvfjha-uc.a.run.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));
}

app.get('/', async (req, res) => {
  try {
    // let startingPoint = decodeURIComponent(req.query.startingPoint);
    // let destination = decodeURIComponent(req.query.destination);

    // let inputs = {
    //   origin: startingPoint,
    //   destination: destination,
    //   mode: 'driving',
    //   departure_time: 'now'
    // };

    // let result = await directions.getDirections(inputs);
    let response = await results.getResults(req);
    let sanitizedResponse = response.map(direction => {
      let newDirection = direction;
      delete newDirection['requestUrl'];
      delete newDirection['query'].key;
      return newDirection;
    });

    // console.log(sanitizedResponse);

    res.status(200).send(sanitizedResponse);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(8080, err => {
  console.log('Listening on port 8080');
});
