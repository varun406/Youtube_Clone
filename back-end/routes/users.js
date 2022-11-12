import express from "express";
import {
  deleteUser,
  getUser,
  subscribedUser,
  unSubscribedUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, updateUser);

//GET USER
router.get("/", getUser);

//DELETE USER
router.delete("/:id", verifyToken, deleteUser);

// SUBSCRIBING USER
router.put("/sub/:id", verifyToken, subscribedUser);

//UNSUBSCRIBING USER
router.put("/unsub/:id", verifyToken, unSubscribedUser);

export default router;
