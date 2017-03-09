import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUc1KgnryFWxLDU_7MQad7iHxXo6bGn7Y';

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
