import { createRouteAction } from "../../utils";
import { params, type IVerifyEmailParams } from "./params";
import { flow } from "./flow";
import { type VerifyEmailResults } from "./response";

export default createRouteAction<IVerifyEmailParams, VerifyEmailResults>({
  flow,
  params,
});
