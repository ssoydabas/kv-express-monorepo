import { useCallback, useEffect, useState } from "react";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

import { useGetManyEventsInADayMutation } from "./getManyEventsInADayMutation";

import type { IGetManyEventsInADayBodyParams } from "~api/types";

export const useGetManyEventsInADayCallback = (date: string) => {
  const [events, setEvents] = useState<IGoogleCalendarSanitizedEventType[]>([]);

  const getManyEventsInADayMutation = useGetManyEventsInADayMutation({
    onSuccess: ({ records }) => {
      setEvents(records);
    },
  });

  const getManyEventsInADay = useCallback(
    (params: IGetManyEventsInADayBodyParams) => {
      getManyEventsInADayMutation.mutate(params);
    },
    [getManyEventsInADayMutation]
  );

  useEffect(() => {
    getManyEventsInADay({ date });
  }, []);

  return { events, isLoading: getManyEventsInADayMutation.isLoading };
};
