import { useMemo } from "react";

export default function useIntlDate(date: Date) {
  return useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  }, [date]);
}
