import type {
  IDeleteOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

export interface IDeleteManyEventsBodyParams {
  ids: string[];
}

export type DeleteManyEventsSuccessResponseBody = IDeleteOneResponse<string>;

export type DeleteManyEventsErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type DeleteManyEventsResponseType =
  | DeleteManyEventsSuccessResponseBody
  | DeleteManyEventsErrorResponseBody;
