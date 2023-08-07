import { useRequestParams } from "~api/services/validation";
import type { IDeleteEventBodyParams } from "./types";

export type IDeleteEventParams = IDeleteEventBodyParams;

export const params = useRequestParams<IDeleteEventBodyParams>({
  id: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Event ID is required" },
  },
});
