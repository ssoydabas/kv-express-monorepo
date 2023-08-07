import type { Model } from "mongoose";
import type { Document } from "~types/mongoose";

export interface ICustomerRequest {
  currentLocationAddress: string;
  currentLocationPostCode: string;
  destinationLocationAdress: string;
  destinationLocationPostCode: string;
  movingDate: Date;
  customerName: string;
  customerPhone: string;
  customerEmail: string;

  createdAt: Date;
  updatedAt: Date;
}

export type ICustomerRequestDocument = Document<ICustomerRequest>;

export type ICustomerRequestModel = Model<ICustomerRequestDocument>;
