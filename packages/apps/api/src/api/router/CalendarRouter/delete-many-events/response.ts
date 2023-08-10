import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { DeleteManyEventsResponseType } from "./types";

export type DeleteManyEventsResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  DeleteManyEventsResponseType
>;

export const successResponse = (): DeleteManyEventsResults => ({
  status: StatusCodes.OK,
  body: {
    record: "Success!",
  },
});
