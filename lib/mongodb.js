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
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
