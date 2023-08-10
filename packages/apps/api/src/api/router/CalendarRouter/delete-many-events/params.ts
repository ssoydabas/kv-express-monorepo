import { useRequestParams } from "~api/services/validation";
import type { IDeleteManyEventsBodyParams } from "./types";

export type IDeleteManyEventsParams = IDeleteManyEventsBodyParams;

export const params = useRequestParams<IDeleteManyEventsBodyParams>({
  ids: {
    in: "body",
    isArray: {
      options: { min: 1 },
      errorMessage: "IDs should be an array",
    },
    custom: {
      options: (ids) => {
        if (!Array.isArray(ids)) {
          throw new Error("IDs should be an array");
        }
        if (ids.some((id) => typeof id !== "string")) {
          throw new Error("Every ID in the array should be a string");
        }
        return true;
      },
    },
    notEmpty: { errorMessage: "Event IDs are required" },
  },
});
