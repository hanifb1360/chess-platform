import { IResolvers } from "@graphql-tools/utils";
import Game from "../models/Game";

const Query: IResolvers = {
  Query: {
    game: async (_, { gameId }) => {
      return await Game.findById(gameId).populate("white black");
    },
  },
};

export default Query;
