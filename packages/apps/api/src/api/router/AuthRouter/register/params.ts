import { useRequestParams } from "~api/services/validation";
import type { IRegisterBodyParams } from "./types";

export type IRegisterParams = IRegisterBodyParams;

export const params = useRequestParams<IRegisterParams>({
  email: {
    in: "body",
    isString: true,
    trim: true,
    escape: true,
    notEmpty: { errorMessage: "Email is required" },
    isEmail: { errorMessage: "Invalid email address" },
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
