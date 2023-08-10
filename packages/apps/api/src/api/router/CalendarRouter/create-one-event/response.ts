import { StatusCodes } from "http-status-codes";

import { type IFlowResults } from "~api/router/utils";

import type { CreateOneEventResponseType } from "./types";

export type CreateOneEventResults = IFlowResults<
  | StatusCodes.CREATED
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED,
  CreateOneEventResponseType
>;

export const successResponse = (): CreateOneEventResults => ({
  status: StatusCodes.CREATED,
  body: {
    record: "Success!",
  },
});

export const eventAlreadyExistsResponse = (
  date: string
): CreateOneEventResults => ({
  status: StatusCodes.BAD_REQUEST,
  body: {
    message: "Bad Request",
    errors: [
      {
        msg: "Date is already occupied with another event",
        param: "date",
        location: "body",
        value: date,
      },
    ],
  },
});

export const emailAlreadyExistsResponse = (
  email: string
): CreateOneEventResults => ({
  status: StatusCodes.BAD_REQUEST,
  body: {
    message: "Bad Request",
    errors: [
      {
        msg: "Your request is present in out databases. Check out your mailbox if you want to cancel it.",
        param: "email",
        location: "body",
        value: email,
      },
    ],
  },
});
