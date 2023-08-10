import { Router } from "express";

import getManyEvents from "./get-many-events";
import getManyEventsInADay from "./get-many-events-in-a-day";
import getOneEvent from "./get-one-event";
import createOneEvent from "./create-one-event";
import deleteOneEvent from "./delete-one-event";
import deleteManyEvents from "./delete-many-events";

const router = Router();

// GET /api/calendar/get-many-events
router.get("/get-many-events", getManyEvents);

// POST /api/calendar/get-many-events-in-a-day
router.post("/get-many-events-in-a-day", getManyEventsInADay);

// POST /api/calendar/get-one-event
router.get("/get-one-event", getOneEvent);

// POST /api/calendar/create-event
router.post("/create-one-event", createOneEvent);

// DELETE /api/calendar/delete-event
router.delete("/delete-one-event", deleteOneEvent);

// DELETE /api/calendar/delete-many-events
router.delete("/delete-many-events", deleteManyEvents);

export default router;
