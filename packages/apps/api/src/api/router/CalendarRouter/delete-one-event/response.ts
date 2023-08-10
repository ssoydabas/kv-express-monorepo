import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { DeleteOneEventResponseType } from "./types";

export type DeleteOneEventResults = IFlowResults<
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  DeleteOneEventResponseType
>;

export const successResponse = (): DeleteOneEventResults => ({
  status: StatusCodes.OK,
  body: {
    record: "Success!",
  },
});
