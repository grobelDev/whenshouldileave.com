export function fetchData(startingPoint, destination, departureTime) {
  let directionsPromise = fetchDirections(startingPoint, destination);
  return {
    startingPoint,
    destination,
    departureTime,
    directions: wrapPromise(directionsPromise)
  };
}

function fetchDirections(startingPoint, destination) {
  return new Promise(function(resolve, reject) {
    let url = 'https://greenroads-server-65y3jirsha-uc.a.run.app';
    let testUrl = 'http://localhost:8080';

    let env = process.env.NODE_ENV || 'development';

    let currentUrl;

    env === 'development' ? (currentUrl = testUrl) : (currentUrl = url);

    let fetchUrl = new URL(currentUrl),
      params = { startingPoint: startingPoint, destination: destination };
    Object.keys(params).forEach(key =>
      fetchUrl.searchParams.append(key, params[key])
    );

    // fixes weird characters
    fetchUrl.href = encodeURI(fetchUrl);

    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(myJson => {
        resolve(myJson);
      })
      .catch(error => {
        reject('Error:', error);
      });
  });
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}
