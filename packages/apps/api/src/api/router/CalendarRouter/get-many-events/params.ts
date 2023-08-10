import { useRequestParams } from "~api/services/validation";
import type { IGetManyEventsBodyParams } from "./types";

export type IGetManyEventsParams = IGetManyEventsBodyParams;

export const params = useRequestParams<IGetManyEventsBodyParams>({});
