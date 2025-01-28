import { NextResponse } from "next/server";
import User from "@/models/UserSchema";
import connectToDatabase from "@/lib/mongodb";

export async function POST(request) {
  const { name, email } = await request.json();

  try {
    await connectToDatabase();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      email,
    });

    await newUser.save();

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: `Something went wrong: ${error.message}` },
      { status: 500 }
    );
  }
}
