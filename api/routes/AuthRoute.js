import express from "express";

const Authroute = express.Router();
import { verifyInputs, verifyRegister } from "../middlewares/AuthMiddleware.js";
import { registerUser } from "../controllers/AuthController.js";

Authroute.post("/api/v1/register", verifyInputs, verifyRegister, registerUser);

export default Authroute;
