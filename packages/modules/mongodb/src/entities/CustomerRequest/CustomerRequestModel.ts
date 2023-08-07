import { model } from "mongoose";

import type {
  ICustomerRequest,
  ICustomerRequestModel,
} from "./CustomerRequestTypes";
import CustomerRequestSchema from "./CustomerRequestSchema";

export default model<ICustomerRequest, ICustomerRequestModel>(
  "CustomerRequest",
  CustomerRequestSchema
);
