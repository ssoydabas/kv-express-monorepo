import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
} from "~api/responses";

export interface ResetPasswordBodyParams {
  token: string;
  password: string;
}

export type ResetPasswordSuccessResponse = ICreateOneResponse<string>;

export type ResetPasswordErrorResponse =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse;

export type ResetPasswordResponse =
  | ResetPasswordSuccessResponse
  | ResetPasswordErrorResponse;
