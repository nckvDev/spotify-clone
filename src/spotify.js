// https://developer.spotify.com/
// documentation/web-platback-sdk/quick-stert/#

export const authEndpoint = 'https://accounts.spotify.com/authorize/';
const redirectUri = 'http://localhost:3000/';
const clientId = 'bad0b7838ce845be96e85c83a2aaba9c';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      //   #accessToken=mysupersecretkey&name=nckvDev
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
