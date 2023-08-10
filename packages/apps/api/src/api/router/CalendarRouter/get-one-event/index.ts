import { createRouteAction } from "../../utils";
import { params, type IGetOneEventParams } from "./params";
import { flow } from "./flow";
import { type GetOneEventResults } from "./response";

export default createRouteAction<IGetOneEventParams, GetOneEventResults>({
  flow,
  params,
});
