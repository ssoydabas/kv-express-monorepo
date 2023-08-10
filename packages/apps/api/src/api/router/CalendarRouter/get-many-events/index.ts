import { createRouteAction } from "../../utils";
import { params, type IGetManyEventsParams } from "./params";
import { flow } from "./flow";
import { type GetManyEventsResults } from "./response";

export default createRouteAction<IGetManyEventsParams, GetManyEventsResults>({
  flow,
  params,
});
