import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newImage1: image1,
    newImage2: image2,
    newImage3: image3,
    newImage4: image4,
    newPrice: price,
    newType: type,
    newBrand: brand,
    newDescription: description,
    newDetails: details,
  } = await request.json();

  try {
    const updateResult = await ProductModel.updateById(id, {
      name,
      image1,
      image2,
      image3,
      image4,
      price,
      type,
      brand,
      description,
      details,
    });
    if (updateResult.modifiedCount === 0) {
      return NextResponse.json(
        { message: "No product found to update" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
