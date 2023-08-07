import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface ICreateEventBodyParams {
  name: string;
  email: string;
  mobile: string;
  date: string;
}

export type CreateEventSuccessResponseBody = ICreateOneResponse<string>;

export type CreateEventErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type CreateEventResponseType =
  | CreateEventSuccessResponseBody
  | CreateEventErrorResponseBody;
