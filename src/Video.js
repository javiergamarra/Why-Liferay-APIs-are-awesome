import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css';

export default ({
  creator, description, likes, messages, remove, shares, song, url,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };

  return (
    <div className="video">
      <video
        className="video-player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      />
      <VideoFooter creator={creator} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} remove={remove} shares={shares} />
    </div>
  );
};
