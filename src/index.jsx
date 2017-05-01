import React from 'react';
import ReactDOM from 'react-dom';
import YOUTUBE_API_KEY from '../env/youtube-api-key';

import SearchBar from './components/search_bar';

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
