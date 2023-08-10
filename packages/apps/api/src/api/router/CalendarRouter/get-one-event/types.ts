import type {
  IGetOneResponse,
  IBadRequestErrorResponse,
  INotFoundErrorResponse,
  IUnauthorizedErrorResponse,
} from "~api/responses";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetOneEventBodyParams {
  date: string;
}

export type GetOneEventSuccessResponseBody =
  IGetOneResponse<IGoogleCalendarSanitizedEventType>;

export type GetOneEventErrorResponseBody =
  | IBadRequestErrorResponse
  | INotFoundErrorResponse
  | IUnauthorizedErrorResponse;

export type GetOneEventResponseType =
  | GetOneEventSuccessResponseBody
  | GetOneEventErrorResponseBody;
