import { createRouteAction } from "../../utils";
import { params, type ResetPasswordParams } from "./params";
import { flow } from "./flow";
import type { ResetPasswordResults } from "./response";

export default createRouteAction<ResetPasswordParams, ResetPasswordResults>({
  flow,
  params,
});
