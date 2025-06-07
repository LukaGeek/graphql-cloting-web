import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation AddProduct(
    $name: String
    $image1: String
    $image2: String
    $image3: String
    $image4: String
    $price: String
    $type: String
    $brand: String
    $description: String
    $details: String
  ) {
    addProduct(
      name: $name
      image1: $image1
      image2: $image2
      image3: $image3
      image4: $image4
      price: $price
      type: $type
      brand: $brand
      description: $description
      details: $details
    ) {
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

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
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

export const GOOGLE_USER = gql`
  mutation GoogleUser(
    $token_id: String!
    $email: String!
    $name: String
    $image: String
  ) {
    GoogleUser(token_id: $token_id, email: $email, name: $name, image: $image) {
      id
      token_id
      email
      name
      image
    }
  }
`;

export const GITHUB_USER = gql`
  mutation GithubUser(
    $token_id: String!
    $email: String!
    $name: String
    $image: String
  ) {
    GithubUser(token_id: $token_id, email: $email, name: $name, image: $image) {
      id
      token_id
      email
      name
      image
    }
  }
`;

export const FACEBOOK_USER = gql`
  mutation FacebookUser(
    $token_id: String!
    $email: String!
    $name: String
    $image: String
  ) {
    FacebookUser(
      token_id: $token_id
      email: $email
      name: $name
      image: $image
    ) {
      id
      token_id
      email
      name
      image
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String
    $image1: String
    $image2: String
    $image3: String
    $image4: String
    $price: String
    $type: String
    $brand: String
    $description: String
    $details: String
  ) {
    updateProduct(
      id: $id
      name: $name
      image1: $image1
      image2: $image2
      image3: $image3
      image4: $image4
      price: $price
      type: $type
      brand: $brand
      description: $description
      details: $details
    ) {
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

export const ADD_TO_WHITELIST = gql`
  mutation AddToWhitelist($id: ID!, $name: String, $email: String) {
    addToWhitelist(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String, $email: String, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export const REMOVE_FROM_WHITELIST = gql`
  mutation RemoveFromWhitelist($email: String) {
    removeFromWhitelist(email: $email) {
      id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
