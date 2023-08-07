import { UserModel } from "@kv-express/mongodb";

import { type RouteFlowType } from "../../utils";

import { hashPassword, createAccessToken } from "~api/services/auth/utils";

import type { ResetPasswordParams } from "./params";
import {
  successResponse,
  userNotFoundResponse,
  type ResetPasswordResults,
} from "./response";

export const flow: RouteFlowType<
  ResetPasswordParams,
  ResetPasswordResults
> = async ({ token, password }) => {
  const user = await UserModel.findOne({ resetPasswordToken: token });

  if (!user) {
    return userNotFoundResponse();
  }

  user.password = await hashPassword(password);
  user.resetPasswordToken = undefined;

  await user.save();

  const accessToken = createAccessToken(user._id.toString());

  return successResponse(accessToken);
};
