import { google } from "googleapis";
import { googleCalendarCredentials as credentials } from "~api-root/config";

export default async function deleteOneEvent(eventId: string) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    await calendar.events.delete({
      calendarId: "primary", // Use 'primary' for the default calendar
      eventId,
    });

    console.log("Event deleted: %s", eventId);
  } catch (err) {
    console.error(
      "There was an error contacting the Calendar service: " + (err as string)
    );
  }
}
