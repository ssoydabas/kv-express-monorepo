import { Router } from "express";

import me from "./me";

const router = Router();

// GET /api/v1/users/me
router.get("/me", me);

export default router;
