import { google } from "googleapis";
import { googleCalendarCredentials as credentials } from "~api-root/config";
import type { IGetOneEventReturnType } from "./types";

export default async function getOneEvent(startDate: string) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    const response = await calendar.events.list({
      calendarId: "primary",
      singleEvents: true,
      orderBy: "startTime",
      timeMin: startDate,
      maxResults: 1,
    });

    const events = response.data.items;

    if (typeof events !== "undefined" && events?.length) {
      const event = events[0];

      const sanitizedEvent = {
        id: event.id,
        created: event.created,
        summary: event.summary,
        description: event.description,
        start: event.start,
        end: event.end,
        extendedProperties: event.extendedProperties,
      };

      const result: IGetOneEventReturnType = {
        status: "OK",
        event: sanitizedEvent,
      };

      return result;
    } else {
      console.log("No upcoming events found.");

      const result: IGetOneEventReturnType = {
        status: "NOT_FOUND",
      };

      return result;
    }
  } catch (err) {
    console.error("Error fetching events:", err);

    const result: IGetOneEventReturnType = {
      status: "BAD_REQUEST",
      errorMessage: typeof err === "string" ? err : "Unknown error",
    };

    return result;
  }
}
