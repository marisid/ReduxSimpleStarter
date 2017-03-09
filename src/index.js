import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './api_key.js';
import SearchBar from './components/search_bar';

// Create a new component and this component
// will create some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div> //this is JSX
  );
}

// Take this component's generated HTML and put
// it on the page (in the DOM) inside the container element
ReactDOM.render(<App />, document.querySelector('.container'));
