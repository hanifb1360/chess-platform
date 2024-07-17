import { IResolvers } from "@graphql-tools/utils";
import User, { IUser } from "../models/User";
import Game from "../models/Game";

interface Context {
  user?: IUser;
}

const Query: IResolvers<any, Context> = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return await User.findById(user._id);
    },
    game: async (_, { id }) => {
      return await Game.findById(id).populate("white black");
    },
  },
};

export default Query;
