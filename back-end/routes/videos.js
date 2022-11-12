import express from "express";
import {
  addVideo,
  deleteVideo,
  dislikeVideo,
  getSelectedVideo,
  getVideo,
  likeVideo,
  randomVideos,
  search,
  subVideo,
  trendVideos,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//GET VIDEO
router.get("/", getVideo);

//ADD VIDEO
router.post("/", verifyToken, addVideo);

//UPDATE VIDEO
// router.put("/:id", verifyToken, updateVideo);

//SPECIFIC VIDEO
router.put("/:id", getSelectedVideo);

//DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo);

//RANDOM VIDEO
router.get("/rand", randomVideos);

//TREND VIDEO
router.get("/trend", trendVideos);

//LIKE VIDEO
router.put("/like/:id", verifyToken, likeVideo);

//DISLIKE VIDEO
router.put("/dislike/:id", verifyToken, dislikeVideo);

//GET BY TAGS VIDEO
router.get("/");

//SEARCH VIDEO
router.get("/serach", verifyToken, search);

//SUBSCRIBER VIDEO
router.get("/subvideo", verifyToken, subVideo);

export default router;
