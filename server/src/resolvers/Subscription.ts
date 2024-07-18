import { IResolvers } from "@graphql-tools/utils";
import { pubsub, GAME_UPDATED } from "../services/pubsub";

const Subscription: IResolvers = {
  Subscription: {
    gameUpdated: {
      subscribe: () => pubsub.asyncIterator([GAME_UPDATED]),
    },
  },
};

export default Subscription;
