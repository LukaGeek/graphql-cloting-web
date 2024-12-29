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
    const products = await ProductModel.findAll();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const result = await ProductModel.deleteById(id);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "No product found with the given ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
