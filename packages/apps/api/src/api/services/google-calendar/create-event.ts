import { google } from "googleapis";
import { googleCalendarCredentials as credentials } from "~api-root/config";

import { getDateStrings } from "./utils";

interface IInsertCalendarEventOptions {
  name: string;
  email: string;
  mobile: string;
  date: string; // 2023-07-07T09:00:00+03:00
}

export default async function insertCalendarEvent({
  name,
  email,
  mobile,
  date,
}: IInsertCalendarEventOptions) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const [startingDateTime, endingDateTime] = getDateStrings(date);
  const event = {
    summary: "A Customer Request",
    description: `${name} requested to be contacted about their moving date. They can be contacted by email: ${email}, or mobile ${mobile}`,
    extendedProperties: {
      private: {
        name,
        email,
        mobile,
      },
    },
    start: {
      dateTime: startingDateTime,
    },
    end: {
      dateTime: endingDateTime,
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary", // Use 'primary' for the default calendar
      requestBody: event,
    });

    console.log("Event created: %s", response.data.htmlLink);
  } catch (err) {
    console.error(
      "There was an error contacting the Calendar service: " + (err as string)
    );
  }
}
