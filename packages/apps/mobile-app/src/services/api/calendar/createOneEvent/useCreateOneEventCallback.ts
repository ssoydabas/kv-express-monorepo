import { useCallback } from "react";
import { useCreateOneEventMutation } from "./useCreateOneEventMutation";

import type { ICreateOneEventBodyParams } from "~api/types";

export const useCreateOneEventCallback = (closeModal: () => void) => {
  const createOneEventMutation = useCreateOneEventMutation({
    onSuccess: () => {
      closeModal();
    },
  });

  const createOneEvent = useCallback(
    (params: ICreateOneEventBodyParams) => {
      createOneEventMutation.mutate(params);
    },
    [createOneEventMutation]
  );

  return {
    createOneEvent,
    ...createOneEventMutation,
  };
};
