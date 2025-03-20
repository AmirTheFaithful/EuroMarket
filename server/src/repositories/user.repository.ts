import { ObjectId } from "mongodb";

import { User, Users } from "../types/user.type";
import model from "../models/user.model";

class UserRepository {
  public async getAll(): Promise<Users> {
    return await model.find();
  }

  public async getById(id: ObjectId): Promise<User | null> {
    return await model.findById(id);
  }

  public async getByEmail(email: string): Promise<User | null> {
    return await model.findOne({ email });
  }

  public async createNew(data: Record<string, any>): Promise<User> {
    return new model(data).save();
  }

  public async updateById(
    id: ObjectId,
    data: Record<string, any>
  ): Promise<User | null> {
    return await model.findByIdAndUpdate(id, data);
  }

  public async updateByEmail(
    email: string,
    data: Record<string, any>
  ): Promise<User | null> {
    return await model.findByIdAndUpdate(email, data);
  }

  public async deleteById(id: ObjectId): Promise<User | null> {
    return await model.findByIdAndDelete(id);
  }

  public async deleteByEmail(email: string): Promise<User | null> {
    return await model.findOneAndDelete({ email });
  }
}

export default new UserRepository();
