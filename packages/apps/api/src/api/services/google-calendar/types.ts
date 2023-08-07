import { type calendar_v3 } from "googleapis";
// export interface IGoogleCalendarEventType {
//   kind: string;
//   etag: string;
//   id: string;
//   status: string;
//   htmlLink: string;
//   created: string;
//   updated: string;
//   summary: string;
//   description: string;
//   creator: {
//     email: string;
//     self: boolean;
//   };
//   organizer: {
//     email: string;
//     self: boolean;
//   };
//   start: { dateTime: string; timeZone: string };
//   end: { dateTime: string; timeZone: string };
//   iCalUID: string;
//   sequence: number;
//   extendedProperties: { public: object; private: object };
//   reminders: { useDefault: boolean; overrides: unknown[] };
//   eventType: string;
// }

export interface IGoogleCalendarEventType extends calendar_v3.Schema$Event {}

export interface IGetEventsReturnType {
  status: "OK" | "NOT_FOUND" | "BAD_REQUEST";
  events: IGoogleCalendarEventType[];
  errorMessage?: string;
}

export interface GoogleCalendarErrorResponseType {
  response: { statusText: string };
}
