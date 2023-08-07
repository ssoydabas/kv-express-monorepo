import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IForbiddenErrorResponse,
} from "~api/responses";

export interface IVerifyEmailBodyParams {
  token: string;
}

export interface IValidateEmailRecord {
  email: string;
  verifiedAt: Date;
}

export type VerifyEmailResponseType =
  | ICreateOneResponse<IValidateEmailRecord>
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IForbiddenErrorResponse;
