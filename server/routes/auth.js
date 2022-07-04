import express from 'express';
import { signin, signup, getProfile, updateProfile } from "../controllers/user.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile/:id", getProfile);
router.post("/updateprofile/:id", updateProfile);

export default router;

