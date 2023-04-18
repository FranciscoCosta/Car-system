import express from "express";

const Vheicleroute = express.Router();
import { registerVheicle, getVheicles } from "../controllers/VheicleController.js";

Vheicleroute.post("/api/v1/vheicle", registerVheicle);
Vheicleroute.get("/api/v1/vheicles/:id", getVheicles);

export default Vheicleroute;
