import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [state, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user,
          });
        })
        .catch((error) => console.log('error', error));

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('4GbJRuMWmbr1to7F6EbcjZ').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {state?.token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
