import type {
  Types as MongooseTypes,
  Document as MongooseDocument,
} from "mongoose";

export type Document<T> = MongooseDocument<MongooseTypes.ObjectId> &
  T & {
    _id: MongooseTypes.ObjectId;
  };
