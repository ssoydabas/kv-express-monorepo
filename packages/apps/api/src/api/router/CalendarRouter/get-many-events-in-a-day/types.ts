import type {
  IGetManyResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";

import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

export interface IGetManyEventsInADayBodyParams {
  date: string;
}

export type GetManyEventsInADaySuccessResponseBody =
  IGetManyResponse<IGoogleCalendarSanitizedEventType>;

export type GetManyEventsInADayErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type GetManyEventsInADayResponseType =
  | GetManyEventsInADaySuccessResponseBody
  | GetManyEventsInADayErrorResponseBody;
