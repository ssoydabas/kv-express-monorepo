import { createRouteAction } from "../../utils";
import { params, type IRegisterParams } from "./params";
import { flow } from "./flow";
import { type RegisterResults } from "./response";

export default createRouteAction<IRegisterParams, RegisterResults>({
  flow,
  params,
});
