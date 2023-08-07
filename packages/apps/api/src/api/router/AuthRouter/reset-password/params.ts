import { useRequestParams } from "~api/services/validation";
import type { ResetPasswordBodyParams } from "./types";

export type ResetPasswordParams = ResetPasswordBodyParams;

export const params = useRequestParams<ResetPasswordParams>({
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
  password: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    isLength: {
      errorMessage: "Password should be at least 8 characters long",
      options: {
        min: 8,
      },
    },
  },
});
