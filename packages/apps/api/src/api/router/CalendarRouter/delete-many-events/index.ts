import { createRouteAction } from "../../utils";
import { params, type IDeleteManyEventsParams } from "./params";
import { flow } from "./flow";
import { type DeleteManyEventsResults } from "./response";

export default createRouteAction<
  IDeleteManyEventsParams,
  DeleteManyEventsResults
>({
  flow,
  params,
});
