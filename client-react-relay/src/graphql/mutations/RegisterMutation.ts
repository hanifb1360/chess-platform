import { graphql } from "react-relay";

export const REGISTER_USER = graphql`
  mutation RegisterMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
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
