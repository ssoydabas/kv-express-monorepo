import { type RouteFlowType } from "../../utils";
import { type ICreateEventParams } from "./params";
import { type CreateEventResults, successResponse } from "./response";

import { createCalendarEvent } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  ICreateEventParams,
  CreateEventResults
> = async ({ name, email, mobile, date }) => {
  await createCalendarEvent({ name, email, mobile, date });

  return successResponse();
};
