import { type RouteFlowType } from "../../utils";
import { type IGetEventsParams } from "./params";
import { type GetEventsResults, successResponse } from "./response";

import {
  getCalendarEvents,
  createCalendarEvent,
  deleteCalendarEvent,
} from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IGetEventsParams,
  GetEventsResults
  // eslint-disable-next-line no-empty-pattern
> = async ({}) => {
  await getCalendarEvents();

  return successResponse();
};
