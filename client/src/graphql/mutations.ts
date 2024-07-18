import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;

export const START_GAME = gql`
  mutation StartGame($whiteId: ID!, $blackId: ID!) {
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

export const MAKE_MOVE = gql`
  mutation MakeMove($gameId: ID!, $move: String!) {
    makeMove(gameId: $gameId, move: $move) {
      id
      fen
      moves
    }
  }
`;
