import type { Model } from "mongoose";
import type { Document } from "~types/mongoose";

export interface IUser {
  email: string;
  password: string;

  verificationToken: string;
  resetPasswordToken?: string;

  name?: string;
  phone?: string;
  dateOfBirth?: Date;

  createdAt: Date;
  updatedAt: Date;
  verifiedAt?: Date;
}

export type IUserDocument = Document<IUser>;

export type IUserModel = Model<IUserDocument>;
