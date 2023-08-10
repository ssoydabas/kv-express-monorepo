import { useCallback, useEffect, useState } from "react";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

import { useGetManyEventsMutation } from "./useGetManyEventsMutation";

import type { IGetManyEventsBodyParams } from "~api/types";

export const useGetManyEventsCallback = () => {
  const [events, setEvents] = useState<IGoogleCalendarSanitizedEventType[]>([]);

  const getManyEventsMutation = useGetManyEventsMutation({
    onSuccess: ({ records }) => {
      setEvents(records);
    },
  });

  const getManyEvents = useCallback(
    (params: IGetManyEventsBodyParams) => {
      getManyEventsMutation.mutate(params);
    },
    [getManyEventsMutation]
  );

  useEffect(() => {
    if (!getManyEventsMutation.isSuccess || getManyEventsMutation.isError)
      getManyEvents({});
  }, [getManyEventsMutation.isSuccess, getManyEventsMutation.isError]);

  return { events, isLoading: getManyEventsMutation.isLoading };
};
