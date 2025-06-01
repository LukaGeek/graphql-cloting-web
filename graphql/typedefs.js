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
  }

  type Mutation{
    addProduct(id: ID!, name: String, image1: String,  image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    updateProduct(id: ID!, name: String, image1: String,  image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    deleteProduct(id: ID!): Product
    addUser(id: ID!, name: String, email: String, password: String): User
    deleteUser(id: ID!): User
    addToWhitelist(id: ID!, name: String, email: String): Whitelist
    removeFromWhitelist(id: ID!): Whitelist
  }
`;
