import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

export const GET_GAME = gql`
  query Game($id: ID!) {
    game(id: $id) {
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
