import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetManyEventsBodyParams {}

export type GetManyEventsSuccessResponseBody =
  IGetManyResponse<IGoogleCalendarSanitizedEventType>;

export type GetManyEventsErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type GetManyEventsResponseType =
  | GetManyEventsSuccessResponseBody
  | GetManyEventsErrorResponseBody;
