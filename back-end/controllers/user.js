import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json(user);
  } catch (error) {
    next(createError(error.message));
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body },
      },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    next(createError(error.message));
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(createError(error.message));
  }
};

export const subscribedUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $addToSet: { subscribedUsers: req.params.id },
      },
      { new: true }
    );
    await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } });
    res.status(200).json(user);
  } catch (error) {
    next(createError(error.message));
  }
};

export const unSubscribedUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $pull: { subscribedUsers: req.params.id },
      },
      { new: true }
    );
    await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } });
    res.status(200).json(user);
  } catch (error) {
    next(createError(error.message));
  }
};
