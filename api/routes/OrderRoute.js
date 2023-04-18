import express from "express";

const OrderRoute = express.Router();
import { registerOrder,getOrdersVheicle } from "../controllers/OrderController.js";

OrderRoute.post("/api/v1/order", registerOrder);
OrderRoute.get("/api/v1/orders/:id", getOrdersVheicle);

export default OrderRoute;
