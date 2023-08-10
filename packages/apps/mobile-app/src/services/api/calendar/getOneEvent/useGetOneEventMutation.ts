import type {
  IGetOneEventBodyParams,
  GetOneEventSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../../errors";
import { fetchApi } from "../../fetchers";

export type GetOneEventMutationOptions = UseMutationOptions<
  GetOneEventSuccessResponseBody,
  ApiError,
  IGetOneEventBodyParams
>;

const mutation = async () =>
  await fetchApi<GetOneEventSuccessResponseBody, IGetOneEventBodyParams>({
    url: "/calendar/get-one-event",
    method: "GET",
  });

export const useGetOneEventMutation = (
  options: GetOneEventMutationOptions = {}
) =>
  useMutation<GetOneEventSuccessResponseBody, ApiError, IGetOneEventBodyParams>(
    mutation,
    {
      ...options,
      mutationKey: ["get-one-event"],
    }
  );
