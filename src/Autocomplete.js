import { useCallback, useEffect, useRef, useState } from 'react';
// import { debounce } from 'lodash';

export default function useAddressPredictions(input) {
  const [predictions, setPredictions] = useState([]);

  const autocomplete = useRef();

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService();
  }

  function getPlacePredictions(input) {
    autocomplete.current.getPlacePredictions({ input }, predictions => {
      setPredictions(predictions.map(prediction => prediction.description));
    });
  }

  // const debouncedGetPlacePredictions = useCallback(
  //   debounce(getPlacePredictions, 500),
  //   []
  // );

  useEffect(() => {
    getPlacePredictions(input);
    // debouncedGetPlacePredictions(input);
  }, [input]);

  return predictions;
}
