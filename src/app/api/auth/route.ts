
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const runtime = "nodejs";

export async function GET() {
  const uri = process.env.MONGODB_URL;

  if (!uri) {
    return NextResponse.json(
      { ok: false, error: "MONGODB_URL is missing" },
      { status: 500 }
    );
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await client.db("Bazar-Dor-Database").command({ ping: 1 });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DB CHECK FAILED:", error);

    return NextResponse.json(
      { ok: false, error: "MongoDB connection failed" },
      { status: 500 }
    );
  } finally {
    await client.close().catch(() => {});
  }
}
