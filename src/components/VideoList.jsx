import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />;
      })}
    </ul>
  );
};

export default VideoList;
