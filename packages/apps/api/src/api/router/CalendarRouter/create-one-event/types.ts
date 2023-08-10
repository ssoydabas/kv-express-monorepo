import type {
  ICreateOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface ICreateOneEventBodyParams {
  name: string;
  email: string;
  mobile: string;
  currentLocation: string;
  currentLocationPostCode: string;
  destinationLocation: string;
  destinationLocationPostCode: string;
  date: string;
}

export type CreateOneEventSuccessResponseBody = ICreateOneResponse<string>;

export type CreateOneEventErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type CreateOneEventResponseType =
  | CreateOneEventSuccessResponseBody
  | CreateOneEventErrorResponseBody;
