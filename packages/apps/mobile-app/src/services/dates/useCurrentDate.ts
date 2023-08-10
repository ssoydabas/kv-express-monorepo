import { useState, useEffect } from "react";

export default function useCurrentDate(): Date {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setCurrentDate(today);
  }, []);

  return currentDate;
}
