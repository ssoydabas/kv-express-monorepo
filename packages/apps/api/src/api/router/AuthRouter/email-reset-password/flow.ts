import { UserModel } from "@kv-express/mongodb";

import { kvExpressMailing } from "~api/services/mailing";

import { type RouteFlowType } from "../../utils";
import { createResetPasswordToken } from "~api/services/auth/utils";
import type { EmailResetPasswordParams } from "./params";
import {
  successResponse,
  userNotFoundResponse,
  type EmailResetPasswordResults,
} from "./response";

export const flow: RouteFlowType<
  EmailResetPasswordParams,
  EmailResetPasswordResults
> = async ({ email }) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return userNotFoundResponse(email);
  }

  const token = createResetPasswordToken();

  user.resetPasswordToken = token;

  await user.save();

  await kvExpressMailing.sendResetPasswordEmail({ email, token });

  return successResponse(user.email);
};
