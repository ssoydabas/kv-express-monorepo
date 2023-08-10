import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { GetOneEventResponseType } from "./types";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

export type GetOneEventResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  GetOneEventResponseType
>;

export const successResponse = (
  event: IGoogleCalendarSanitizedEventType
): GetOneEventResults => ({
  status: StatusCodes.OK,
  body: {
    record: event,
  },
});

export const notFoundResponse = (): GetOneEventResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: "There is no event available.",
  },
});
