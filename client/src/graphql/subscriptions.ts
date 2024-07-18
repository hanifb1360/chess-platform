import { gql } from "@apollo/client";

export const GAME_UPDATED = gql`
  subscription OnGameUpdated($gameId: ID!) {
    gameUpdated(gameId: $gameId) {
      id
      fen
      moves
    }
  }
`;
