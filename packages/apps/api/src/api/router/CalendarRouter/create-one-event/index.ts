import { createRouteAction } from "../../utils";
import { params, type ICreateOneEventParams } from "./params";
import { flow } from "./flow";
import { type CreateOneEventResults } from "./response";

export default createRouteAction<ICreateOneEventParams, CreateOneEventResults>({
  flow,
  params,
});
