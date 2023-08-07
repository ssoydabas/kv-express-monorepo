import { model } from "mongoose";

import type { IUser, IUserModel } from "./UserTypes";
import UserSchema from "./UserSchema";

export default model<IUser, IUserModel>("User", UserSchema);
