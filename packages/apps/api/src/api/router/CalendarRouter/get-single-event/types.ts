import type {
  IGetOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetEventsBodyParams {}

export type GetEventsSuccessResponseBody = IGetOneResponse<string>;

export type GetEventsErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type GetEventsResponseType =
  | GetEventsSuccessResponseBody
  | GetEventsErrorResponseBody;
