import { type RouteFlowType } from "../../utils";
import { type IGetManyEventsInADayParams } from "./params";
import {
  type GetManyEventsInADayResults,
  successResponse,
  notFoundResponse,
  badRequestError,
} from "./response";
import { type IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

import { getManyEventsInADay } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IGetManyEventsInADayParams,
  GetManyEventsInADayResults
> = async ({ date }) => {
  const { status, events, errorMessage } = await getManyEventsInADay(date);

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
