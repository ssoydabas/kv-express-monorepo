import type {
  IDeleteOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface IDeleteEventBodyParams {
  id: string;
}

export type DeleteEventSuccessResponseBody = IDeleteOneResponse<string>;

export type DeleteEventErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type DeleteEventResponseType =
  | DeleteEventSuccessResponseBody
  | DeleteEventErrorResponseBody;
