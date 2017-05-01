import React from 'react';
import ReactDOM from 'react-dom';
import YOUTUBE_API_KEY from '../env/youtube-api-key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

YTSearch({key: YOUTUBE_API_KEY, term: 'surfing'}, data => console.log(data));

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
