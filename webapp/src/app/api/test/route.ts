import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bloodyarkdb");

    const testData = await db.collection("test").find({}).limit(5).toArray();

    return NextResponse.json({
      status: "Connected successfully!",
      data: testData,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      {
        status: "Failed to connect.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
