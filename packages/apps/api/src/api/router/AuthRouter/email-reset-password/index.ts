import { createRouteAction } from "../../utils";
import { params, type EmailResetPasswordParams } from "./params";
import { flow } from "./flow";
import type { EmailResetPasswordResults } from "./response";

export default createRouteAction<
  EmailResetPasswordParams,
  EmailResetPasswordResults
>({ flow, params });
