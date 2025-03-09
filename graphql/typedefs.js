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
    addProduct(image:String, title: String): Product
    updateProduct(id: ID!, image: String, title: String): Product
    deleteProduct(id: ID!): Product
  }
`;
