import { MongoClient } from "mongodb";

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.CRUDDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB.");
    return client;
  } catch (error) {
    console.log(error);
  }
};

const ProductModel = {
  create: async (productData) => {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const result = await productsCollection.insertOne({
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("Product Created:", result);
    client.close();
  },
};

export default ProductModel;
