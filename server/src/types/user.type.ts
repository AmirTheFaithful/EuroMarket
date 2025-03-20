import { Document } from "mongoose";

export interface User extends Document {
  meta: {
    firstname: string;
    lastname: string;
  };
  auth: {
    email: string;
    password: string;
  };
  location?: {
    country: string;
    city: string;
  };
}

export type Users = Array<User>;
