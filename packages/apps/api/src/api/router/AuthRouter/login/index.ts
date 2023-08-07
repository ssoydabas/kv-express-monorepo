import { createRouteAction } from "../../utils";
import { params, type ILoginParams } from "./params";
import { flow } from "./flow";
import { type LoginResults } from "./response";

export default createRouteAction<ILoginParams, LoginResults>({ flow, params });
