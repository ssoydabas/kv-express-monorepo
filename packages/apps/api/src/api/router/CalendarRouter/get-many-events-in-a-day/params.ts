import { useRequestParams } from "~api/services/validation";
import type { IGetManyEventsInADayBodyParams } from "./types";

export type IGetManyEventsInADayParams = IGetManyEventsInADayBodyParams;

export const params = useRequestParams<IGetManyEventsInADayBodyParams>({
  date: {
    in: "body",
    isISO8601: {
      errorMessage: "Date must be a valid ISO8601 date",
      options: { strict: true },
    },
    toDate: true,
  },
});
