import { useRequestParams } from "~api/services/validation";
import type { ICreateOneEventBodyParams } from "./types";

export type ICreateOneEventParams = ICreateOneEventBodyParams;

export const params = useRequestParams<ICreateOneEventBodyParams>({
  name: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Name is required" },
  },
  email: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    isEmail: { errorMessage: "Invalid email address" },
  },
  mobile: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    isMobilePhone: { options: ["nl-NL"] },
    errorMessage: "Phone number must be a valid Netherlands phone number",
  },
  currentLocation: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Current location is required" },
  },
  currentLocationPostCode: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Current location post code is required" },
  },
  destinationLocation: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Destination location is required" },
  },
  destinationLocationPostCode: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Destionation location post code is required" },
  },
  date: {
    in: "body",
    isISO8601: {
      errorMessage: "Date must be a valid ISO8601 date",
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
