import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    currentLocationAddress: {
      type: String,
      required: true,
    },
    currentLocationPostCode: {
      type: String,
      required: true,
    },
    destinationLocationAdress: {
      type: String,
      index: true,
    },
    destinationLocationPostCode: {
      type: Date,
    },
    movingDate: {
      type: String,
    },
    customerEmail: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default UserSchema;
