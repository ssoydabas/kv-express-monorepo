import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
} from "~api/responses";

export interface IRegisterBodyParams {
  email: string;
  password: string;
}

export type RegisterSuccessResponseBody = ICreateOneResponse<string>;

export type RegisterResponseType =
  | RegisterSuccessResponseBody
  | IBadRequestErrorResponse;
