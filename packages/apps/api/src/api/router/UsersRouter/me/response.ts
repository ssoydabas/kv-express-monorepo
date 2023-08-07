import { StatusCodes } from "http-status-codes";
import type { IUser } from "@kv-express/mongodb";

import { type IFlowResults } from "~api/router/utils";

import type { IMyUserResponseType } from "./types";

export type IMyUserFlowResults = IFlowResults<
  StatusCodes.OK,
  IMyUserResponseType
>;

export const successResponse = (user: IUser): IMyUserFlowResults => ({
  status: StatusCodes.OK,
  body: {
    record: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      verifiedAt: user.verifiedAt,
    },
  },
});
