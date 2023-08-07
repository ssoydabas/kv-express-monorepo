import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { EmailResetPasswordResponse } from "./types";

export type EmailResetPasswordResults = IFlowResults<
  StatusCodes.CREATED | StatusCodes.BAD_REQUEST | StatusCodes.NOT_FOUND,
  EmailResetPasswordResponse
>;

export const successResponse = (email: string): EmailResetPasswordResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: `Email with reset password URL sent to ${email}`,
  },
});

export const userNotFoundResponse = (
  email: string
): EmailResetPasswordResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: `User with email ${email} not found`,
  },
});
