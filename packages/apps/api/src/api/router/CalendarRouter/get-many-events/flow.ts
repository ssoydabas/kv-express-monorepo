import { type RouteFlowType } from "../../utils";
import { type IGetManyEventsParams } from "./params";
import {
  type GetManyEventsResults,
  successResponse,
  notFoundResponse,
  badRequestError,
} from "./response";
import { type IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

import { getManyEvents } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IGetManyEventsParams,
  GetManyEventsResults
  // eslint-disable-next-line no-empty-pattern
> = async ({}) => {
  const { status, events, errorMessage } = await getManyEvents();

  if (status === "NOT_FOUND") {
    return notFoundResponse();
  }

  if (status === "BAD_REQUEST") {
    return badRequestError(errorMessage as string);
  }

  const sanitizedEvents = events.map((event) => {
    const id = event.id;
    const start = event.start;
    const end = event.end;
    const details = event.extendedProperties?.private;

    return {
      id,
      start,
      end,
      details,
    };
  });

  return successResponse(
    sanitizedEvents as IGoogleCalendarSanitizedEventType[]
  );
};
