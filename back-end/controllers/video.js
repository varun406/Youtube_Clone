import Video from "../models/Video.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const getVideo = async (req, res, next) => {
  try {
    const videos = await Video.find({});
    res.status(200).json(videos);
  } catch (error) {
    next(createError(error.message));
  }
};

export const addVideo = async (req, res, next) => {
  try {
    const newvideo = await new Video({ userId: req.user.id, ...req.body });

    await newvideo.save((err) => {
      if (err) return next(err);
    });

    res.status(200).json(newvideo);
  } catch (error) {
    next(createError(error.message));
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );

    res.status(200).json(updatedVideo);
  } catch (error) {
    next(createError(error.message));
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json("video deleted");
  } catch (error) {
    next(createError(error.message));
  }
};

export const randomVideos = async (req, res, next) => {
  try {
    const randomVideos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(randomVideos);
  } catch (error) {
    next(createError(error.message));
  }
};

export const trendVideos = async (req, res, next) => {
  try {
    const trendingVideos = await Video.find({}).sort({ views: -1 });
    res.status(200).json(trendingVideos);
  } catch (error) {
    next(createError(error.message));
  }
};

export const likeVideo = async (req, res, next) => {
  try {
    const likeVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.user.id }, $pull: { dislikes: req.user.id } },
      { new: true }
    );
    res.status(200).json(likeVideo);
  } catch (error) {
    next(createError(error.message));
  }
};

export const dislikeVideo = async (req, res, next) => {
  try {
    const dislikeVideo = await Video.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { dislikes: req.user.id }, $pull: { likes: req.user.id } },
      { new: true }
    );
    res.status(200).json(dislikeVideo);
  } catch (error) {
    next(createError(error.message));
  }
};

export const search = async (req, res, next) => {
  const q = req.query.q;
  try {
    const searchVideo = await Video.find({
      title: { $regex: q, $options: "i" },
    });
    res.status(200).json(searchVideo);
  } catch (error) {
    next(createError(error.message));
  }
};

export const subVideo = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { subscribedUsers } = user;

    const list = await Promise.all(
      subscribedUsers.map(async (channelId) => {
        return await Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createAt));
  } catch (error) {
    next(createError(error.message));
  }
};

export const getSelectedVideo = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    res.status(200).json(video);
  } catch (error) {
    next(createError(error.message));
  }
};
