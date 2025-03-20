import dotenv from "dotenv";

dotenv.config();

export const sys = {
  servPort: process.env.SERVER_PORT!,
  clntPort: process.env.CLIENT_PORT!,
  host: process.env.HOST!,
};

export const mongo = {
  uri: process.env.MONGO_URI!,
};
