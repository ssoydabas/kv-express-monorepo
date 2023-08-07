/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { google } from "googleapis";
import { googleCalendarCredentials as credentials } from "~api-root/config";
import type { IGetEventsReturnType } from "./types";

export default async function getCalendarEvents() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    const response = await calendar.events.list({
      calendarId: "primary", // Use 'primary' for the default calendar
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items;

    if (typeof events !== "undefined" && events?.length) {
      const sanitizedEvents: typeof events = [];
      for (const {
        id,
        created,
        summary,
        description,
        start,
        end,
        extendedProperties,
      } of events) {
        sanitizedEvents.push({
          id,
          created,
          summary,
          description,
          start,
          end,
          extendedProperties,
        });
      }

      const result: IGetEventsReturnType = {
        status: "OK",
        events: sanitizedEvents,
      };

      return result;
    } else {
      console.log("No upcoming events found.");

      const result: IGetEventsReturnType = {
        status: "NOT_FOUND",
        events: [],
      };

      return result;
    }
  } catch (err) {
    console.error("Error fetching events:", err);

    const result: IGetEventsReturnType = {
      status: "BAD_REQUEST",
      events: [],
      errorMessage: typeof err === "string" ? err : "Unknown error",
    };

    return result;
  }
}
