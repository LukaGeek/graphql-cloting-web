import { MongoClient } from "mongodb";

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.CRUDDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB.");
    client.close();
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
