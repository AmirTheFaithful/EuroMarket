import { Request, Response } from "express";

import userUseCase from "../use-cases/user.use-case";
import { asyncHandler } from "../utils/asyncHandler";
import { User, Users } from "../types/user.type";

class UserController {
  public getUsers = asyncHandler(async (req: Request, res: Response) => {
    const data: User | Users = await userUseCase.get(req.query);
    res.status(200).json({ data, message: "Fetch success." });
  });
}

export default new UserController();
