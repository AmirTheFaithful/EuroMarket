import { ObjectId } from "mongodb";

import { User, Users } from "../types/user.type";
import repository from "../repositories/user.repository";

class UserService {
  public async getAll(): Promise<Users> {
    const users: Users | null = await repository.getAll();

    if (!users) {
      return [];
    }

    return users;
  }

  public async getById(id: string): Promise<User | null> {
    const mongoId: ObjectId = new ObjectId(id);
    return await repository.getById(mongoId);
  }

  public async getByEmail(email: string): Promise<User | null> {
    return await repository.getByEmail(email);
  }

  public async createNew(data: Record<string, any>): Promise<User> {
    const newUser: User = await repository.createNew(data);
    return newUser;
  }

  public async updateById(
    id: string,
    data: Record<string, any>
  ): Promise<User | null> {
    const mongoId: ObjectId = new ObjectId(id);
    return await repository.updateById(mongoId, data);
  }

  public async updateByEmail(
    email: string,
    data: Record<string, any>
  ): Promise<User | null> {
    return await repository.updateByEmail(email, data);
  }

  public async deleteById(id: ObjectId): Promise<User | null> {
    return await repository.deleteById(id);
  }

  public async deleteByEmail(email: string): Promise<User | null> {
    return await repository.deleteByEmail(email);
  }
}

export default new UserService();
