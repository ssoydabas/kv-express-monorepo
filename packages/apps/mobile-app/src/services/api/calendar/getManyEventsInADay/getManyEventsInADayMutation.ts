import type {
  IGetManyEventsInADayBodyParams,
  GetManyEventsInADaySuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../../errors";
import { fetchApi } from "../../fetchers";

export type GetManyEventsMutationOptions = UseMutationOptions<
  GetManyEventsInADaySuccessResponseBody,
  ApiError,
  IGetManyEventsInADayBodyParams
>;

const mutation = async (body: IGetManyEventsInADayBodyParams) =>
  await fetchApi<
    GetManyEventsInADaySuccessResponseBody,
    IGetManyEventsInADayBodyParams
  >({
    url: "/calendar/get-many-events-in-a-day",
    method: "POST",
    body,
  });

export const useGetManyEventsInADayMutation = (
  options: GetManyEventsMutationOptions = {}
) =>
  useMutation<
    GetManyEventsInADaySuccessResponseBody,
    ApiError,
    IGetManyEventsInADayBodyParams
  >(mutation, {
    ...options,
    mutationKey: ["get-many-events-in-a-day"],
  });
