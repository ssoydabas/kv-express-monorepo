import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { CreateEventResponseType } from "./types";

export type CreateEventResults = IFlowResults<
  | StatusCodes.CREATED
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  CreateEventResponseType
>;

export const successResponse = (): CreateEventResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: "Success!",
  },
});
