import { createRouteAction } from "../../utils";
import { params, type IGetEventsParams } from "./params";
import { flow } from "./flow";
import { type GetEventsResults } from "./response";

export default createRouteAction<IGetEventsParams, GetEventsResults>({
  flow,
  params,
});
