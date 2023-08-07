import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { IGoogleCalendarEventType } from "~api/services/google-calendar/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetEventsBodyParams {}

export type GetEventsSuccessResponseBody =
  IGetManyResponse<IGoogleCalendarEventType>;

export type GetEventsErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type GetEventsResponseType =
  | GetEventsSuccessResponseBody
  | GetEventsErrorResponseBody;
