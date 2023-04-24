import express from "express";

import { getAllConversations, createConversation } from "../controllers/ConversationController.js";
const ConversationRoute = express.Router();

ConversationRoute.get("/api/v1/conversation/:id", getAllConversations);
ConversationRoute.post("/api/v1/conversation", createConversation);

export default ConversationRoute;