import { UserModel } from "@kv-express/mongodb";

import { type RouteFlowType } from "../../utils";
import { type IVerifyEmailParams } from "./params";
import {
  successResponse,
  userNotFoundResponse,
  emailAlreadyVerifiedResponse,
  type VerifyEmailResults,
} from "./response";

export const flow: RouteFlowType<
  IVerifyEmailParams,
  VerifyEmailResults
> = async ({ token }) => {
  const user = await UserModel.findOne({ verificationToken: token });

  if (!user) {
    return userNotFoundResponse();
  }

  if (user.verifiedAt) {
    return emailAlreadyVerifiedResponse(token);
  }

  user.verifiedAt = new Date();

  await user.save();

  return successResponse(user);
};
