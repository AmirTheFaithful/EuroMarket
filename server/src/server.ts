import { Server, createServer } from "http";

import app from "./setup/app";
import { sys } from "./config/env";
import { connectDB } from "./config/mongo";
import { createLogger, transports, Logger } from "winston";

const server: Server = createServer(app());

const startServer = async () => {
  await connectDB();
  server.listen(sys.servPort, () => {
    console.log(`Serving API requests at ${sys.host}:${sys.servPort}.`);
  });
};

// A tool for handling connection errors by logging it.
const logger: Logger = createLogger({
  level: "error",
  transports: [new transports.Console()],
});

startServer().catch((error: Error) => {
  logger.error(
    `An ${error.name} occurred when connecting to the DB: ${error.message}.`
  );
  process.exit(1);
});
