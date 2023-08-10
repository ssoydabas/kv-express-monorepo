import type {
  ICreateOneEventBodyParams,
  CreateOneEventSuccessResponseBody,
} from "~api/types";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { ApiError } from "../../errors";
import { fetchApi } from "../../fetchers";

export type CreateOneEventMutationOptions = UseMutationOptions<
  CreateOneEventSuccessResponseBody,
  ApiError,
  ICreateOneEventBodyParams
>;

const mutation = async (body: ICreateOneEventBodyParams) =>
  await fetchApi<CreateOneEventSuccessResponseBody, ICreateOneEventBodyParams>({
    url: "/calendar/create-one-event",
    method: "POST",
    body,
  });

export const useCreateOneEventMutation = (
  options: CreateOneEventMutationOptions = {}
) =>
  useMutation<
    CreateOneEventSuccessResponseBody,
    ApiError,
    ICreateOneEventBodyParams
  >(mutation, {
    ...options,
    mutationKey: ["create-one-event"],
  });
