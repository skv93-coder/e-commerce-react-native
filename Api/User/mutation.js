import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CREATE_USER($user: signupDetails) {
    userCreate(user: $user) {
      user {
        name
        email
        mobile
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($user: loginDetails) {
    login(user: $user) {
      token
      user {
        name
      }
    }
  }
`;
