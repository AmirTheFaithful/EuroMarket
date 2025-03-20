import { Schema, model } from "mongoose";

import { User } from "../types/user.type";

const UserSchema = new Schema<User>({
  meta: {
    firstname: { type: String, required: true, selected: false },
    lastname: { type: String, required: true, selected: false },
  },
  auth: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, selected: false },
  },
  location: {
    country: { type: String, required: true, selected: false },
    city: { type: String, required: true, selected: false },
  },
});

const userModel = model<User>("User", UserSchema);

export default userModel;
