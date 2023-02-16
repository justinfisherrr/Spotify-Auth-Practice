const express = require("express");
const router = express.Router();
const {
  getUser,
  getTopArtists,
  getTopSongs,
  getByUsername,
} = require("../helper/spotifyFunctions");

router.get("/users/:auth", async (req, res) => {
  const results = await getUser(req.params.auth);
  res.send(results);
});
router.get("/artists/:auth", async (req, res) => {
  const results = await getTopArtists(req.params.auth);
  res.send(results);
});
router.get("/songs/:auth", async (req, res) => {
  const results = await getTopSongs(req.params.auth);
  res.send(results);
});
router.get("/get_username/:auth/:username", async (req, res) => {
  const results = await getByUsername(req.params.auth, req.params.username);
  res.send(results);
});

module.exports = { router };
