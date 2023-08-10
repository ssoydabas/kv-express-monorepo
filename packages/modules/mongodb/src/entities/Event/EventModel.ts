import { model } from "mongoose";

import type { IEvent, IEventModel } from "./EventTypes";
import EventSchema from "./EventSchema";

export default model<IEvent, IEventModel>("Event", EventSchema);
