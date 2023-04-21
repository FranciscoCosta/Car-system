import express from "express";

const OrderRoute = express.Router();
import { registerOrder,getOrdersVheicle,getOrdersClientVheicle,getOrdersMechanicVheicle,getOrderInfo, updateOrder } from "../controllers/OrderController.js";

OrderRoute.post("/api/v1/order", registerOrder);
OrderRoute.put("/api/v1/order/:id", updateOrder);
OrderRoute.get("/api/v1/info/:id", getOrderInfo);
OrderRoute.get("/api/v1/orders/:id", getOrdersVheicle);
OrderRoute.get("/api/v1/orders/client/:id", getOrdersClientVheicle);
OrderRoute.get("/api/v1/orders/mechanic/:id", getOrdersMechanicVheicle);

export default OrderRoute;
