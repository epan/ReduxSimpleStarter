import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/VideoList';
import SearchBar from './components/search_bar';
import VideoDetail from './components/VideoDetail';

import YOUTUBE_API_KEY from '../env/youtube-api-key';

class App extends Component {
  constructor () {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYouTube('surfing');
  }

  searchYouTube (term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    return (
      <div className="container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
