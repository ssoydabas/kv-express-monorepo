import { useRequestParams } from "~api/services/validation";
import type { IGetEventsBodyParams } from "./types";

export type IGetEventsParams = IGetEventsBodyParams;

export const params = useRequestParams<IGetEventsBodyParams>({});
