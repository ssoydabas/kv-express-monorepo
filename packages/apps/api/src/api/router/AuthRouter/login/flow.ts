import { UserModel } from "@kv-express/mongodb";
import { compare } from "bcrypt";

import { type RouteFlowType } from "../../utils";
import { createAccessToken } from "~api/services/auth/utils";
import { type ILoginParams } from "./params";
import {
  type LoginResults,
  successResponse,
  userNotFoundResponse,
  incorrectPasswordResponse,
} from "./response";

export const flow: RouteFlowType<ILoginParams, LoginResults> = async ({
  email,
  password,
}) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return userNotFoundResponse(email);
  }

  const isPasswordCorrect = await compare(password, user.password);

  if (!isPasswordCorrect) {
    return incorrectPasswordResponse();
  }

  const accessToken = createAccessToken(user._id.toString());

  return successResponse(accessToken);
};
