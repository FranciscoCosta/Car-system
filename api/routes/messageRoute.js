import express from "express";

import {
  createMessage,
  getMessages,
} from "../controllers/MessageController.js";
const messageRoute = express.Router();

messageRoute.post("/api/v1/message", createMessage);
messageRoute.get("/api/v1/message/:id", getMessages);

export default messageRoute;
