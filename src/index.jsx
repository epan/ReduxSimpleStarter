import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/VideoList';
import SearchBar from './components/search_bar';

import YOUTUBE_API_KEY from '../env/youtube-api-key';

class App extends Component {
  constructor () {
    super();

    this.state = {
      videos: []
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
