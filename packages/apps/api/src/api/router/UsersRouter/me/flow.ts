import { type RouteFlowType } from "~api/router/utils";

import { type IMyUserParams } from "./params";
import { type IMyUserFlowResults, successResponse } from "./response";

export const flow: RouteFlowType<IMyUserParams, IMyUserFlowResults> = ({
  user,
}) => {
  if (user === undefined || user === null) {
    throw new Error("User not loaded in request");
  }

  return successResponse(user);
};
