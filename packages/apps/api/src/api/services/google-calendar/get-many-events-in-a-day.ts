import { google } from "googleapis";
import { googleCalendarCredentials as credentials } from "~api-root/config";
import type { IGetManyEventsReturnType } from "./types";

export default async function getManyEventsInADay(targetDate: string) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const startOfDay = new Date(targetDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(targetDate);
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const response = await calendar.events.list({
      calendarId: "primary", // Use 'primary' for the default calendar
      singleEvents: true,
      orderBy: "startTime",
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
    });

    const events = response.data.items;

    if (typeof events !== "undefined" && events?.length) {
      const sanitizedEvents = events.map((event) => ({
        id: event.id,
        created: event.created,
        summary: event.summary,
        description: event.description,
        start: event.start,
        end: event.end,
        extendedProperties: event.extendedProperties,
      }));

      const result: IGetManyEventsReturnType = {
        status: "OK",
        events: sanitizedEvents,
      };

      return result;
    } else {
      console.log("No events found for the specified date.");

      const result: IGetManyEventsReturnType = {
        status: "NOT_FOUND",
        events: [],
      };

      return result;
    }
  } catch (err) {
    console.error("Error fetching events:", err);

    const result: IGetManyEventsReturnType = {
      status: "BAD_REQUEST",
      events: [],
      errorMessage: typeof err === "string" ? err : "Unknown error",
    };

    return result;
  }
}
