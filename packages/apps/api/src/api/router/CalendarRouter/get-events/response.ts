import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { GetEventsResponseType } from "./types";
import type { IGoogleCalendarEventType } from "~api/services/google-calendar/types";

export type GetEventsResults = IFlowResults<
  StatusCodes.OK | StatusCodes.BAD_REQUEST | StatusCodes.NOT_FOUND,
  GetEventsResponseType
>;

export const successResponse = (
  events: IGoogleCalendarEventType[]
): GetEventsResults => ({
  status: StatusCodes.OK,
  body: { records: events },
});

export const notFoundResponse = (): GetEventsResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: "There is no event available.",
  },
});

export const badRequestError = (errorMessage: string): GetEventsResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: errorMessage,
  },
});
