import { NextResponse } from "next/server";

const { default: connectMongoDB } = require("@/lib/mongodb");
const { default: ProductModel } = require("@/models/ProductModel");

export async function POST(req) {
  const { name, image, price, category } = await req.json();
  await connectMongoDB;
  await ProductModel.create({ name, image, price, category });

  return NextResponse.json(
    { message: "Product Successfully Created" },
    { status: 201 }
  );
}
export async function GET() {
  try {
    const client = await connectMongoDB();
    const db = client.db("nextjsdb");
    const productsCollection = db.collection("products");

    const products = await productsCollection.find().toArray();

    client.close();

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}