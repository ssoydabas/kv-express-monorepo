import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export default async function connect(mongodbUri: string) {
  return await mongoose.connect(mongodbUri);
}
