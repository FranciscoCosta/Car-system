import express from "express";

import { getAllConversations, createConversation, getConversation } from "../controllers/ConversationController.js";
const ConversationRoute = express.Router();

ConversationRoute.get("/api/v1/conversation/:id", getAllConversations);
ConversationRoute.post("/api/v1/conversation", createConversation);
ConversationRoute.get("/api/v1/conversation/order/:id", getConversation);
export default ConversationRoute;