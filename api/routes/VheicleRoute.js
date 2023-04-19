import express from "express";

const Vheicleroute = express.Router();
import { registerVheicle, getVheicles, deleteVheicle } from "../controllers/VheicleController.js";

Vheicleroute.post("/api/v1/vheicle", registerVheicle);
Vheicleroute.delete("/api/v1/vheicle/:id", deleteVheicle);
Vheicleroute.get("/api/v1/vheicles/:id", getVheicles);

export default Vheicleroute;
