import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface ILoginBodyParams {
  email: string;
  password: string;
}

export type LoginSuccessResponseBody = ICreateOneResponse<string>;

export type LoginErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type LoginResponseType =
  | LoginSuccessResponseBody
  | LoginErrorResponseBody;
