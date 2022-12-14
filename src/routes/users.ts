import express from "express";
import { updateUserProfile } from "../controller/updateProfile";
import {
  Register,
  verifyUser,
  Login,
  resendOTP,
  getAllUsers,
  getSingleUser,
} from "../controller/userController";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/signup", Register);
router.post("/verify/:signature", verifyUser);
router.post("/login", Login);
router.get("/resend-otp/:signature", resendOTP);
router.get("/get-all-users", getAllUsers);
router.get("/get-user/:id", auth, getSingleUser);
router.patch("/update-user", auth, updateUserProfile);

export default router;
