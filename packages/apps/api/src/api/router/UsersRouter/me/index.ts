import { createRouteAction } from "~api/router/utils";

import { params, type IMyUserParams } from "./params";
import { flow } from "./flow";
import { type IMyUserFlowResults } from "./response";

export default createRouteAction<IMyUserParams, IMyUserFlowResults>({
  flow,
  params,
});
