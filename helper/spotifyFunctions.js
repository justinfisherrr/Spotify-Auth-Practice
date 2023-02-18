const SpotifyAPI = require("spotify-web-api-node");

async function getUser(auth_token) {
  var spotifyApi = new SpotifyAPI();
  spotifyApi.setAccessToken(auth_token);
  const result = await spotifyApi.getMe();
  return result.body;
}
async function getTopArtists(auth_token) {
  var spotifyApi = new SpotifyAPI();
  spotifyApi.setAccessToken(auth_token);
  const result = await spotifyApi.getMyTopArtists({ limit: 30 });
  return result.body;
}

async function getTopSongs(auth_token) {
  var spotifyApi = new SpotifyAPI();
  spotifyApi.setAccessToken(auth_token);
  const result = await spotifyApi.getMyTopTracks({ limit: 50 });
  return result.body;
}
async function getByUsername(auth_token, username) {
  var spotifyApi = new SpotifyAPI();
  spotifyApi.setAccessToken(auth_token);
  const result = await spotifyApi.getUser(username);
  return result.body;
}
async function anyFunction(auth_token) {
  var spotifyApi = new SpotifyAPI();
  spotifyApi.setAccessToken(auth_token);
  //Chose your function here
  const result = await spotifyApi.getUser();
  return result.body;
}
module.exports = {
  getUser,
  getTopArtists,
  getTopSongs,
  getByUsername,
  anyFunction,
};
