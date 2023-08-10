import { Schema } from "mongoose";

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    date: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
    currentLocationPostCode: {
      type: String,
      required: true,
    },
    destinationLocation: {
      type: String,
      index: true,
    },
    destinationLocationPostCode: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default EventSchema;
