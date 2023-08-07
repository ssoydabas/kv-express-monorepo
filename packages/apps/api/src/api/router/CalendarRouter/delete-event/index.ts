import { createRouteAction } from "../../utils";
import { params, type IDeleteEventParams } from "./params";
import { flow } from "./flow";
import { type DeleteEventResults } from "./response";

export default createRouteAction<IDeleteEventParams, DeleteEventResults>({
  flow,
  params,
});
