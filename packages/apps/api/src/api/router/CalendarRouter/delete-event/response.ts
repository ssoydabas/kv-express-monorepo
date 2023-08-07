import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { DeleteEventResponseType } from "./types";

export type DeleteEventResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  DeleteEventResponseType
>;

export const successResponse = (): DeleteEventResults => ({
  status: StatusCodes.OK,
  body: {
    record: "Success!",
  },
});
