import { connectToDatabase } from "@/lib/mongodbForWl";
import Whitelist from "@/models/Whitelist";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, email } = await req.json();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const newWhitelistUser = new Whitelist({ name, email });
    await newWhitelistUser.save();

    return Response.json({ message: "User added to whitelist" });
  } catch (error) {
    return Response.json({ error: "Error adding user" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const whitelistedUsers = await Whitelist.find({}, "name email");

    return NextResponse.json(whitelistedUsers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch whitelisted users" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectToDatabase();
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    await Whitelist.findOneAndDelete({ email });

    return Response.json({ message: "User removed from whitelist" });
  } catch (error) {
    return Response.json({ error: "Error removing user" }, { status: 500 });
  }
}
