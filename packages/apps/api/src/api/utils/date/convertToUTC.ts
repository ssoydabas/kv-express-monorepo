export default function toUTC(dateString: string) {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();

  const utcDate = new Date(
    Date.UTC(year, month, day, hours, minutes, seconds, milliseconds)
  );

  return utcDate.toISOString();
}
