import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCO39xg1DlMkMm2-3HiPNBpbUy7auggdEo';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('.container'))
