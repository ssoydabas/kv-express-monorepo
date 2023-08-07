import { type RouteFlowType } from "../../utils";
import { type IGetEventsParams } from "./params";
import {
  type GetEventsResults,
  successResponse,
  notFoundResponse,
  badRequestError,
} from "./response";

import { getCalendarEvents } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IGetEventsParams,
  GetEventsResults
  // eslint-disable-next-line no-empty-pattern
> = async ({}) => {
  const { status, events, errorMessage } = await getCalendarEvents();

  if (status === "NOT_FOUND") {
    return notFoundResponse();
  }

  if (status === "BAD_REQUEST") {
    return badRequestError(errorMessage as string);
  }

  return successResponse(events);
};
