import { UserModel } from "@kv-express/mongodb";

import mailing from "~api/services/mailing";

import type { RouteFlowType } from "~api/router/utils";
import {
  hashPassword,
  createVerificationToken,
  createAccessToken,
} from "~api/services/auth/utils";
import type { IRegisterBodyParams } from "./types";
import {
  emailAlreadyExistsResponse,
  successResponse,
  type RegisterResults,
} from "./response";

export const flow: RouteFlowType<
  IRegisterBodyParams,
  RegisterResults
> = async ({ email, password }) => {
  const doesUserExist = await UserModel.exists({ email });

  if (doesUserExist) {
    return emailAlreadyExistsResponse(email);
  }

  const user = await UserModel.create({
    email,
    password: await hashPassword(password),
    verificationToken: createVerificationToken(),
  });

  await mailing.sendEmailVerification({
    email,
    verificationToken: user.verificationToken,
  });

  const accessToken = createAccessToken(user._id.toString());

  return successResponse(accessToken);
};
