import { MongoClient, ObjectId } from "mongodb";

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.CRUDDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    return client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
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

    client.close();
    return result;
  },

  updateById: async (id, updateData) => {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      }
    );

    client.close();
    return result;
  },

  findAll: async () => {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const products = await productsCollection.find().toArray();
    client.close();
    return products;
  },

  findById: async (id) => {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const product = await productsCollection.findOne({ _id: new ObjectId(id) });
    client.close();
    return product;
  },

  deleteById: async (id) => {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const result = await productsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    client.close();
    return result;
  },
};

export default ProductModel;
