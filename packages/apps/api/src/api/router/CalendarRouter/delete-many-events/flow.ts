import { type RouteFlowType } from "../../utils";
import { type IDeleteManyEventsParams } from "./params";
import { type DeleteManyEventsResults, successResponse } from "./response";

import { deleteOneEvent } from "~api/services/google-calendar";

export const flow: RouteFlowType<
  IDeleteManyEventsParams,
  DeleteManyEventsResults
> = async ({ ids }) => {
  for (const id of ids) {
    await deleteOneEvent(id);
  }

  return successResponse();
};
