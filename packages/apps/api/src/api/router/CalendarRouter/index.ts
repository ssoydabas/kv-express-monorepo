import { Router } from "express";

import getEvents from "./get-events";
import createEvent from "./create-event";
import deleteEvent from "./delete-event";

const router = Router();

// GET /api/calendar/get-events
router.get("/get-events", getEvents);

// POST /api/calendar/create-event
router.post("/create-event", createEvent);

// POST /api/calendar/delete-event
router.delete("/delete-event", deleteEvent);

export default router;
