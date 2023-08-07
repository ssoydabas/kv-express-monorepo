import { type RouteFlowType } from "../../utils";
import { type IDeleteEventParams } from "./params";
import { type DeleteEventResults, successResponse } from "./response";

import { deleteCalendarEvent } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IDeleteEventParams,
  DeleteEventResults
> = async ({ id }) => {
  await deleteCalendarEvent(id);

  return successResponse();
};
