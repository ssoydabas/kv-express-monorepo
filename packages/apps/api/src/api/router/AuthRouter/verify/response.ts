import { StatusCodes } from "http-status-codes";
import { type IUserDocument } from "@kv-express/mongodb";

import { type IFlowResults } from "~api/router/utils";

import type { IValidateEmailRecord, VerifyEmailResponseType } from "./types";

export type VerifyEmailResults = IFlowResults<
  | StatusCodes.CREATED
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.FORBIDDEN,
  VerifyEmailResponseType
>;

export const documentToRecord = (
  document: IUserDocument
): IValidateEmailRecord => ({
  email: document.email,
  verifiedAt: document.verifiedAt ?? new Date(),
});

export const successResponse = (
  document: IUserDocument
): VerifyEmailResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: documentToRecord(document),
  },
});

export const userNotFoundResponse = (): VerifyEmailResults => ({
  status: StatusCodes.NOT_FOUND,
  body: {
    message: `User not found`,
  },
});

export const emailAlreadyVerifiedResponse = (
  token: string
): VerifyEmailResults => ({
  status: StatusCodes.BAD_REQUEST,
  body: {
    message: `Token is used or expired`,
    errors: [
      {
        msg: `Token is used or expired`,
        param: "token",
        location: "body",
        value: token,
      },
    ],
  },
});
