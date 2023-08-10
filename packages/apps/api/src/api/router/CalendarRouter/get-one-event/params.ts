import { useRequestParams } from "~api/services/validation";
import type { IGetOneEventBodyParams } from "./types";

export type IGetOneEventParams = IGetOneEventBodyParams;

export const params = useRequestParams<IGetOneEventBodyParams>({
  date: {
    in: "body",
    optional: true,
    isISO8601: {
      errorMessage: "Date must be a valid ISO8601 date",
      options: { strict: true },
    },
    toDate: true,
  },
});
