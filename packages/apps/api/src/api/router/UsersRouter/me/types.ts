import type { IGetOneResponse } from "~api/responses";

export interface IMyUserRecord {
  email: string;

  name?: string;
  phone?: string;
  dateOfBirth?: Date;

  verifiedAt?: Date;
}

export type IMyUserSuccessResponse = IGetOneResponse<IMyUserRecord>;

export type IMyUserResponseType = IMyUserSuccessResponse;
