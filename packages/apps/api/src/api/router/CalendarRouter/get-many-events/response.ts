import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { GetManyEventsResponseType } from "./types";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

export type GetManyEventsResults = IFlowResults<
  StatusCodes.OK | StatusCodes.BAD_REQUEST | StatusCodes.NOT_FOUND,
  GetManyEventsResponseType
>;

export const successResponse = (
  events: IGoogleCalendarSanitizedEventType[]
): GetManyEventsResults => ({
  status: StatusCodes.OK,
  body: { records: events },
});

export const notFoundResponse = (): GetManyEventsResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: "There is no event available.",
  },
});

export const badRequestError = (
  errorMessage: string
): GetManyEventsResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: errorMessage,
  },
});
