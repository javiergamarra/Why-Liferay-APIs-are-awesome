import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import {Link} from 'react-router-dom';

export default ({creator, description, song}) => (
  <div className="video-footer">
    <div className="video-footer-text">
      <h3>
        <Link to={`/${creator.id}`}>
          @{creator.name}
        </Link>
      </h3>
      <p>{description}</p>
      <div className="video-footer-ticker">
        <MusicNoteIcon className="video-footer-icon"/>
        <Ticker mode="smooth">
          {() => <p>{song}</p>}
        </Ticker>
      </div>
    </div>
    <img
      className="video-footer-record"
      src="/disk.png"
      alt=""
    />
  </div>
);
