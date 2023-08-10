import { useRequestParams } from "~api/services/validation";
import type { IDeleteOneEventBodyParams } from "./types";

export type IDeleteOneEventParams = IDeleteOneEventBodyParams;

export const params = useRequestParams<IDeleteOneEventBodyParams>({
  id: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Event ID is required" },
  },
});
