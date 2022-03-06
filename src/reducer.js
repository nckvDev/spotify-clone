export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQANFHSdKHM6GyJFxptDe2TlKdNjiIXmxWQuITOqtFd3mEEt0VYqShi44Gig3c9AwXV-TwAU2XmukaErTvk9LMXMJ1WpacqMabufOpVqA7iCY5neaRuISRF-CMobQOPZ9-_GRcyuu596K9AevNkwbqwqDKhQSLsuoFjOjnccQ4tALVbUmMCz'
};

const reducer = (state, action) => {
  console.log('action', action);

  // Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
