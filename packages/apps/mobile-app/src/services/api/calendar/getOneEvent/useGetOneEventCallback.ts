import { useCallback } from "react";

import { useGetOneEventMutation } from "./useGetOneEventMutation";

import type { IGetOneEventBodyParams } from "~api/types";

export const useGetOneEventCallback = () => {
  const getOneEventMutation = useGetOneEventMutation({
    onSuccess: ({ record }) => {
      console.log(record);
    },
  });

  const getManyEvents = useCallback(
    (params: IGetOneEventBodyParams) => {
      getOneEventMutation.mutate(params);
    },
    [getOneEventMutation]
  );

  return { getManyEvents };
};
