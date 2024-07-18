import { graphql } from "react-relay";

export const GET_ME = graphql`
  query GetMeQuery {
    me {
      id
      username
      email
    }
  }
`;
