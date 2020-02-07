// from App.js
<form onSubmit={handleSubmit}>
  {/* <GooglePlacesAutocomplete
  id={'startingPointAutocomplete'}
  inputClassName='w-full border-2 h-12 border-blue-600 rounded-lg px-3'
  suggestionsClassNames={{
    container: 'text-blue-600',
    suggestion: 'text-blue-600',
    suggestionActive: 'text-blue-600'
  }}
  placeholder='Starting Point'
  onSelect={handleStartingInput}
/> */}
  {/* <GooglePlacesAutocomplete
  id={'destinationAutocomplete'}
  inputClassName='w-full border-2 h-12 border-blue-600 rounded-lg px-3 mt-8'
  suggestionsClassNames={{
    container: 'text-blue-600',
    suggestion: 'text-blue-600',
    suggestionActive: 'text-blue-600'
  }}
  placeholder='Destination'
  onSelect={handleDestinationInput}
/> */}
  {/* <div className='w-full h-12 px-3 mt-8 border-2 border-blue-600 rounded-lg'> */}
  <MaterialAutocomplete
    label='Starting Point'
    // onSelect={handleDestinationInput}
    setInput={setStartingPoint}
    onChange={handleStartingInput}
    // handleInput={handleStartingInput}
  ></MaterialAutocomplete>
  {/* </div> */}
  {/* <div className='w-full h-12 px-3 mt-8 border-2 border-blue-600 rounded-lg'> */}
  <div className='pt-4'>
    <MaterialAutocomplete
      label='Destination'
      // onSelect={handleDestinationInput}
      setInput={setDestination}
      // handleInput={handleDestinationInput}
    ></MaterialAutocomplete>
  </div>
  {/* </div> */}
  <button
    type='submit'
    value='Submit'
    className='px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
  >
    Submit
  </button>
</form>;
