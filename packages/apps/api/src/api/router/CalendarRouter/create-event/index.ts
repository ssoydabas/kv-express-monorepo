import { createRouteAction } from "../../utils";
import { params, type ICreateEventParams } from "./params";
import { flow } from "./flow";
import { type CreateEventResults } from "./response";

export default createRouteAction<ICreateEventParams, CreateEventResults>({
  flow,
  params,
});
