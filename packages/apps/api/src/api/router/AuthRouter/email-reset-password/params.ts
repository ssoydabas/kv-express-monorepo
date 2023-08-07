import { useRequestParams } from "~api-root/api/services/validation";
import type { EmailResetPasswordBodyParams } from "./types";

export type EmailResetPasswordParams = EmailResetPasswordBodyParams;

export const params = useRequestParams<EmailResetPasswordParams>({
  email: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Email is required" },
    isEmail: { errorMessage: "Invalid email address" },
  },
});
