import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { GetEventsResponseType } from "./types";

export type GetEventsResults = IFlowResults<
  | StatusCodes.CREATED
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  GetEventsResponseType
>;

export const successResponse = (): GetEventsResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: "Success!",
  },
});
