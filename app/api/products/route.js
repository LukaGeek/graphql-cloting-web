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
  await connectMongoDB();
  const products = await ProductModel.find();

  return NextResponse.json({ products });
}
