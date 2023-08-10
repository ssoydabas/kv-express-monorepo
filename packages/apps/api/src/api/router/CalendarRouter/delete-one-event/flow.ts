import { type RouteFlowType } from "../../utils";
import { type IDeleteOneEventParams } from "./params";
import { type DeleteOneEventResults, successResponse } from "./response";

import { deleteOneEvent } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IDeleteOneEventParams,
  DeleteOneEventResults
> = async ({ id }) => {
  await deleteOneEvent(id);

  return successResponse();
};
