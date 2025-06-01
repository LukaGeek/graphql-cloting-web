import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      image1
      image2
      image3
      image4
      price
      type
      brand
      description
      details
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      name
      image1
      image2
      image3
      image4
      price
      type
      brand
      description
      details
    }
  }
`;

export const GET_USERS = gql`
  query User {
    user {
      id
      name
      email
    }
  }
`;

export const GET_WHITELIST = gql`
  query Whitelist {
    whitelist {
      id
      name
      email
    }
  }
`;
