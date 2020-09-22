import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Video from './Video';
import './App.css';
import UserProfile from './UserProfile';

export default () => {
  const [videos, setVideos] = useState(FAKE_VIDEOS);

  useEffect(() => {
    const endpoint = new URL('http://localhost:8080/o/headless-delivery/v1.0/asset-libraries/MyAssetLibrary/content-elements');

    endpoint.searchParams.append('aggregationTerms', 'userName');
    endpoint.searchParams.append('filter', 'keywords/any(k:k eq \'tiktok\')');
    endpoint.searchParams.append('nestedFields', 'contentValue');

    fetch(
      endpoint,
      { headers: { Authorization: 'Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0', 'X-Accept-All-Languages': true } },
    ).then(
      (data) => data.json(),
    ).then(
      (json) => {
        console.log(json);
        setVideos(
          json.items.map(
            (document) => {
              const url = document.content.contentValue ? `data:video/mp4;base64,${document.content.contentValue}` : `http://localhost:8080/${document.content.contentFields[0].contentFieldValue.document.contentUrl}`;
              return ({
                creator: document.content.creator,
                song: document.title_i18n[window.navigator.language || 'en-US'],
                remove: document.content.actions.delete,
                url,
              });
            },
          ),
        );
      },
    );
  }, []);

  return (
    <div className="app">
      <div className="app-videos">
        <Router>
          <Switch>
            <Route exact path="/">
              {videos.map(
                ({
                  creator = {}, description, likes = 0, messages = "", remove, shares = 0, song, url,
                }) => (
                  <Video
                    creator={creator}
                    description={description}
                    key={url}
                    likes={likes}
                    messages={messages}
                    remove={remove}
                    shares={shares}
                    song={song}
                    url={url}
                  />
                ),
              )}
            </Route>
            <Route path="/:creatorId">
              <UserProfile />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const FAKE_VIDEOS = [{
  channel: 'channel1',
  description: 'Description',
  likes: 0,
  messages: 'Messages',
  remove: false,
  shares: 0,
  song: 'Song 1',
  url: 'http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
}, {
  channel: 'channel2',
  description: 'Description',
  likes: 0,
  messages: 'Messages',
  remove: false,
  shares: 0,
  song: 'Song 2',
  url: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
}];
