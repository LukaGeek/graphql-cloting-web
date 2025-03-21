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

  type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Mutation{
    addProduct(id: ID!, name: String, image1: String,  image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    updateProduct(id: ID!, name: String, image1: String,  image2: String, image3: String, image4: String, price: String, type: String, brand: String, description: String, details: String): Product
    deleteProduct(id: ID!): Product
  }
`;
