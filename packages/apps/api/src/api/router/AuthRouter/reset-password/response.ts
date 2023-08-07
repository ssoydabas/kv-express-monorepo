import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { ResetPasswordResponse } from "./types";

export type ResetPasswordResults = IFlowResults<
  StatusCodes.CREATED | StatusCodes.BAD_REQUEST | StatusCodes.NOT_FOUND,
  ResetPasswordResponse
>;

export const successResponse = (accessToken: string): ResetPasswordResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: accessToken,
  },
});

export const userNotFoundResponse = (): ResetPasswordResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: "User not found",
  },
});
