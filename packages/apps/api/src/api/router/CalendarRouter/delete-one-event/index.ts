import { createRouteAction } from "../../utils";
import { params, type IDeleteOneEventParams } from "./params";
import { flow } from "./flow";
import { type DeleteOneEventResults } from "./response";

export default createRouteAction<IDeleteOneEventParams, DeleteOneEventResults>({
  flow,
  params,
});
