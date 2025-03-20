import { Request, Response } from "express";

import service from "../services/user.service";
import { NotFoundError } from "../errors/http-errors";
import { User, Users } from "../types/user.type";

interface Queries {
  id?: string;
  email?: string;
}

class UserUseCase {
  private async getById(id: string): Promise<never | User> {
    const user: User | null = await service.getById(id);

    if (!user) {
      throw new NotFoundError();
    }

    return user;
  }

  private async getByEmail(email: string): Promise<never | User> {
    const user: User | null = await service.getByEmail(email);

    if (!user) {
      throw new NotFoundError();
    }

    return user;
  }

  private async getAll(): Promise<User | Users> {
    const users: Users = await service.getAll();
    return users;
  }

  public async get(input: Queries) {
    const { id, email } = input;

    if (id) {
      return await this.getById(id);
    }

    if (email) {
      return await this.getByEmail(email);
    }

    return await this.getAll();
  }
}

export default new UserUseCase();
