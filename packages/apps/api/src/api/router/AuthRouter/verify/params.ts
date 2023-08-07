import { useRequestParams } from "~api/services/validation";
import type { IVerifyEmailBodyParams } from "./types";

export type IVerifyEmailParams = IVerifyEmailBodyParams;

export const params = useRequestParams<IVerifyEmailParams>({
  token: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Token is required" },
    isLength: {
      errorMessage: "Token should be at least 8 chars long",
      options: { min: 8 },
    },
  },
});
