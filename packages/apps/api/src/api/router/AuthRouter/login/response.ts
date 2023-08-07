import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { LoginResponseType } from "./types";

export type LoginResults = IFlowResults<
  | StatusCodes.CREATED
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  LoginResponseType
>;

export const successResponse = (token: string): LoginResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: token,
  },
});

export const userNotFoundResponse = (email: string): LoginResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: `User with email ${email} not found`,
  },
});

export const incorrectPasswordResponse = (): LoginResults => ({
  status: StatusCodes.UNAUTHORIZED,
  body: {
    message: "Incorrect password",
  },
});
