import { Router } from "express";

import login from "./login";
import register from "./register";
import verify from "./verify";
import emailResetPassword from "./email-reset-password";
import resetPassword from "./reset-password";

const router = Router();

// POST /api/v1/auth/login
router.post("/login", login);
// POST /api/v1/auth/register
router.post("/register", register);
// POST /api/v1/auth/verify
router.post("/verify", verify);
// POST /api/v1/auth/email-reset-password
router.post("/email-reset-password", emailResetPassword);
// POST /api/v1/auth/reset-password
router.post("/reset-password", resetPassword);

export default router;
