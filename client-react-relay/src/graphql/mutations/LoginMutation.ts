import { graphql } from "react-relay";

export const LOGIN_USER = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
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
