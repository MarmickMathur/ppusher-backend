const express = require("express");
const router = express();
const { deserializeUserCustom } = require("../middlewares");
const {
  addSong,
  removeSong,
  deletePlayList,
  starPlayList,
  unstarPlaylist,
  getPlaylist,
  makePlaylists,
  sendUser,
} = require("../controllers/userFunc");

router.get("/playlist", getPlaylist);
router.post("/starPlaylist", starPlayList);
router.post("/unstarPlaylist", unstarPlaylist);
router.post("/deletePlaylist", deletePlayList);
router.post("/makePlaylist", makePlaylists);
router.post("/addsong", addSong);
router.post("/removesong", removeSong);
router.get("/user", deserializeUserCustom, sendUser);

module.exports = router;
