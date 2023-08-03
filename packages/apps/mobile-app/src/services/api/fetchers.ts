import type { IGetOneResponse } from "~api/types";
import { apiUrl } from "~root/config";
import { ApiError, BadRequestError, type IBadRequestError } from "./errors";
import { type IApiQueryParams } from "./types";

export interface IFetchApiOptions<BodyType = unknown> {
  url: string;
  queryParams?: IApiQueryParams;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyType;
}

let accessToken: string | undefined;
export const setAccessToken = (newAccessToken: string | undefined) => {
  accessToken = newAccessToken;
};

export const fetchApi = async <ResponseType = unknown, BodyType = unknown>({
  url,
  queryParams,
  method = "GET",
  body,
}: IFetchApiOptions<BodyType>) => {
  const urlWithQueryParams = new URL(`${apiUrl}${url}`);

  for (const [key, value] of Object.entries(queryParams ?? {})) {
    urlWithQueryParams.searchParams.append(key, value.toString());
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(urlWithQueryParams.toString(), {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = (await response.json()) as Record<string, unknown>;

    if (response.status === 400) {
      throw new BadRequestError(
        error?.message as string,
        error?.errors as IBadRequestError[]
      );
    }

    const errorMessage = (error?.message as string) || response.statusText;

    throw new ApiError(errorMessage, response.status);
  }

  return await (response.json() as Promise<ResponseType>);
};

export const fetchApiSingle = async <RecordType = unknown, BodyType = unknown>(
  url: string,
  queryParams?: IApiQueryParams,
  body?: BodyType
) =>
  await fetchApi<IGetOneResponse<RecordType>, BodyType>({
    url,
    queryParams,
    body,
  });
