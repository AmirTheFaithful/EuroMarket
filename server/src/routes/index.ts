import { Router } from "express";

import { userRoutes } from "./user.routes";

const router: Router = Router();

export const centralRouter = (): Router => {
  userRoutes(router);

  return router;
};
