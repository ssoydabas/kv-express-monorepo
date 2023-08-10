import type {
  IDeleteOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface IDeleteOneEventBodyParams {
  id: string;
}

export type DeleteOneEventSuccessResponseBody = IDeleteOneResponse<string>;

export type DeleteOneEventErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type DeleteOneEventResponseType =
  | DeleteOneEventSuccessResponseBody
  | DeleteOneEventErrorResponseBody;
