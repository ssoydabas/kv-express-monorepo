import type {
  IGetManyEventsBodyParams,
  GetManyEventsSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../../errors";
import { fetchApi } from "../../fetchers";

export type GetManyEventsMutationOptions = UseMutationOptions<
  GetManyEventsSuccessResponseBody,
  ApiError,
  IGetManyEventsBodyParams
>;

const mutation = async () =>
  await fetchApi<GetManyEventsSuccessResponseBody, IGetManyEventsBodyParams>({
    url: "/calendar/get-many-events",
    method: "GET",
  });

export const useGetManyEventsMutation = (
  options: GetManyEventsMutationOptions = {}
) =>
  useMutation<
    GetManyEventsSuccessResponseBody,
    ApiError,
    IGetManyEventsBodyParams
  >(mutation, {
    ...options,
    mutationKey: ["get-many-events"],
  });
