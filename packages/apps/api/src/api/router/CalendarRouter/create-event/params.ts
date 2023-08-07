import { useRequestParams } from "~api/services/validation";
import type { ICreateEventBodyParams } from "./types";

export type ICreateEventParams = ICreateEventBodyParams;

export const params = useRequestParams<ICreateEventBodyParams>({
  name: {
    in: "body",
    isString: true,
    optional: true,
    trim: true,
    escape: true,
  },
  email: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Email is required" },
    isEmail: { errorMessage: "Invalid email address" },
  },
  mobile: {
    in: "body",
    isString: true,
    optional: true,
    trim: true,
    escape: true,
    isMobilePhone: true,
  },
  date: {
    in: "body",
    optional: true,
    isISO8601: {
      errorMessage: "Date of birth must be a valid ISO8601 date",
      options: { strict: true },
    },
    toDate: true,
    custom: {
      errorMessage: "Date cannot be earlier than the current date.",
      options: (date: Date) => {
        const now = new Date();
        now.setSeconds(0);
        now.setMilliseconds(0);
        return date >= now;
      },
    },
  },
});
