import { ObjectId } from "mongodb";
import { IResolvers } from "apollo-server-express";
import { Database, User } from "../../../lib/types";

export const userResolvers: IResolvers = {
  Query: {
    users: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<User[]> => {
      return await db.users.find({}).toArray();
    }
  },
  Mutation: {
    deleteUser: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<User> => {
      const deleteRes = await db.users.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete listing");
      }

      return deleteRes.value;
    }
  },
  User: {
    id: (user: User): string => user._id.toString()
  }
};
