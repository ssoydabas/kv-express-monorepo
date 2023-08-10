import { createRouteAction } from "../../utils";
import { params, type IGetManyEventsInADayParams } from "./params";
import { flow } from "./flow";
import { type GetManyEventsInADayResults } from "./response";

export default createRouteAction<
  IGetManyEventsInADayParams,
  GetManyEventsInADayResults
>({
  flow,
  params,
});
