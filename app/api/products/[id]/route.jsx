const { default: connectMongoDB } = require("@/lib/mongodb");
const { default: ProductModel } = require("@/models/ProductModel");
const { NextResponse } = require("next/server");

export async function GET(request, { params }) {
    const { id } = params
    await connectMongoDB
    const product = await ProductModel.findOne({_id: id})
    
    return NextResponse.json({ product }, { status: 200 })
}