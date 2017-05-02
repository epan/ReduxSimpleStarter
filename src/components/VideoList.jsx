import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onItemSelect }) => {
  return (
    <ul>
      {videos.map((video) => {
        return (
          <VideoListItem
            key={video.etag}
            video={video}
            onItemSelect={onItemSelect}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
