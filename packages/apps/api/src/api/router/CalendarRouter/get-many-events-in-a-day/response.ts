import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { GetManyEventsInADayResponseType } from "./types";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

export type GetManyEventsInADayResults = IFlowResults<
  StatusCodes.OK | StatusCodes.BAD_REQUEST | StatusCodes.NOT_FOUND,
  GetManyEventsInADayResponseType
>;

export const successResponse = (
  events: IGoogleCalendarSanitizedEventType[]
): GetManyEventsInADayResults => ({
  status: StatusCodes.OK,
  body: { records: events },
});

export const notFoundResponse = (): GetManyEventsInADayResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: "There is no event available.",
  },
});

export const badRequestError = (
  errorMessage: string
): GetManyEventsInADayResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: errorMessage,
  },
});
