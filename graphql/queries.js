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
      password
    }
  }
`;

export const GET_GOOGLE_USER = gql`
  query GoogleUser {
    googleUser {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const GET_GITHUB_USER = gql`
  query GithubUser {
    githubUser {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const GET_FACEBOOK_USER = gql`
  query FacbookUser {
    facebookUser {
      id
      token_id
      name
      email
      image
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
