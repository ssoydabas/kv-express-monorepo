import type { Model } from "mongoose";
import type { Document } from "~types/mongoose";

export interface IEvent {
  name: string;
  mobile: string;
  email: string;

  currentLocation: string;
  currentLocationPostCode: string;
  destinationLocation: string;
  destinationLocationPostCode: string;

  date: Date;

  createdAt: Date;
  updatedAt: Date;
}

export type IEventDocument = Document<IEvent>;

export type IEventModel = Model<IEventDocument>;
