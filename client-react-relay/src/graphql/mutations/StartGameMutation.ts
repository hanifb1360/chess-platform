import { graphql } from "react-relay";

export const START_GAME = graphql`
  mutation StartGameMutation($whiteId: ID!, $blackId: ID!) {
    startGame(whiteId: $whiteId, blackId: $blackId) {
      id
      white {
        id
        username
      }
      black {
        id
        username
      }
      moves
    }
  }
`;
