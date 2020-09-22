import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import { RemoveCircle } from '@material-ui/icons';

export default ({
  likes, messages, remove, shares,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="video-sidebar">
      <div className="video-sidebar-button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video-sidebar-button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="video-sidebar-button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
      {remove && (
        <div className="video-sidebar-button">
          <RemoveCircle fontSize="large" />
        </div>
      )}
    </div>
  );
};
