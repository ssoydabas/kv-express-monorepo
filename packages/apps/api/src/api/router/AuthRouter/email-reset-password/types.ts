import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
} from "~api/responses";

export interface EmailResetPasswordBodyParams {
  email: string;
}

export type EmailResetPasswordSuccessResponse = ICreateOneResponse<string>;

export type EmailResetPasswordErrorResponse =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse;

export type EmailResetPasswordResponse =
  | EmailResetPasswordSuccessResponse
  | EmailResetPasswordErrorResponse;
