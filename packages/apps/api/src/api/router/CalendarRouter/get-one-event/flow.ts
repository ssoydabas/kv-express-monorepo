import { type RouteFlowType } from "../../utils";
import { type IGetOneEventParams } from "./params";
import {
  type GetOneEventResults,
  successResponse,
  notFoundResponse,
} from "./response";

import { getOneEvent } from "~api/services/google-calendar";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

export const flow: RouteFlowType<
  IGetOneEventParams,
  GetOneEventResults
> = async ({ date }) => {
  const { event } = await getOneEvent(date);

  if (!event) {
    return notFoundResponse();
  }

  const sanitizedEvent = {
    id: event.id,
    start: event.start,
    end: event.end,
    details: event.extendedProperties?.private,
  };

  return successResponse(sanitizedEvent as IGoogleCalendarSanitizedEventType);
};
