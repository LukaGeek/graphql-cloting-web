export const typeDefs = `#graphql
  type Product {
    id: String
    name: String
    image1: String
    image2: String
    image3: String
    image4: String
    price: String
    type: String
    brand: String
    description: String
    details: String
  }
  
  type User {
    id: String
    name: String
    email: String
    password: String
  }

  type GoogleUser {
    id: String
    token_id: String
    name: String
    email: String
    image: String
  }

  type GithubUser {
    id: String
    token_id: String
    name: String
    email: String
    image: String
  }

  type FacebookUser {
    id: String
    token_id: String
    name: String
    email: String
    image: String
  }

  type Whitelist {
    id: String
    name: String
    email: String
  }

  type Query {
    product(id: ID!): Product
    products: [Product]
    user: [User]
    whitelist: [Whitelist]
    googleUser: [GoogleUser]
    githubUser: [GithubUser]
    facebookUser: [FacebookUser]
  }

  type Mutation{
    addProduct(name: String, image1: String, image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    updateProduct(id: ID!, name: String, image1: String, image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    googleUser(token_id: String, name: String, email: String, image: String): GoogleUser
    githubUser(token_id: String, name: String, email: String, image: String): GithubUser
    facebookUser(token_id: String, name: String, email: String, image: String): FacebookUser
    deleteProduct(id: ID!): Product
    createUser(name: String, email: String, password: String): User
    deleteUser(id: ID!): User
    addToWhitelist(id: ID!, name: String, email: String): Whitelist
    removeFromWhitelist(email: String): Whitelist
  }
`;
