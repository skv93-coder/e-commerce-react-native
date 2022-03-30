import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query ExampleQuery {
    products {
      id
      name
    }
  }
`;
