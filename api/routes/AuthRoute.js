import express from "express";

const Authroute = express.Router();
import { verifyInputs, verifyRegister } from "../middlewares/AuthMiddleware.js";
import { registerUser, loginUser } from "../controllers/AuthController.js";

Authroute.post("/api/v1/register", verifyInputs, verifyRegister, registerUser);
Authroute.post("/api/v1/login", loginUser);

export default Authroute;
