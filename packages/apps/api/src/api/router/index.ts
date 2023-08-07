import { Router } from "express";

import { isDevelopment } from "../../config";

import AuthRouter from "./AuthRouter";
import UserRouter from "./UsersRouter";
import CalendarRouter from "./CalendarRouter";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);
router.use("/calendar", CalendarRouter);

if (isDevelopment) {
  router.get("/error", () => {
    throw new Error("Testing error handling in development mode");
  });
}

export default router;
