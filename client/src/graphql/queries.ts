import { gql } from "@apollo/client";

export const GAME_UPDATED = gql`
  subscription GameUpdated($gameId: ID!) {
    gameUpdated(gameId: $gameId) {
      id
      moves
    }
  }
`;

export const MAKE_MOVE = gql`
  mutation MakeMove($gameId: ID!, $move: String!) {
    makeMove(gameId: $gameId, move: $move) {
      id
      moves
    }
  }
`;
