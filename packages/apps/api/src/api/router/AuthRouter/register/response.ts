import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { RegisterResponseType } from "./types";

export type RegisterResults = IFlowResults<
  StatusCodes.CREATED | StatusCodes.BAD_REQUEST,
  RegisterResponseType
>;

export const successResponse = (token: string): RegisterResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: token,
  },
});

export const emailAlreadyExistsResponse = (email: string): RegisterResults => ({
  status: StatusCodes.BAD_REQUEST,
  body: {
    message: "Bad Request",
    errors: [
      {
        msg: "User with this email already exists",
        param: "email",
        location: "body",
        value: email,
      },
    ],
  },
});
