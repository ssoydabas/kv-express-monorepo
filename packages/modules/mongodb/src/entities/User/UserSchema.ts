import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },

    verificationToken: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    resetPasswordToken: {
      type: String,
      index: true,
    },
    verifiedAt: {
      type: Date,
    },

    name: {
      type: String,
    },

    phone: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default UserSchema;
