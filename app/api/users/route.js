import { NextResponse } from "next/server";
import clientPromise from "@/components/lib/dbconnect";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("eartencanvas");
  const users = await db.collection("users").find({}).toArray();
  return NextResponse.json(users.map(u => ({ ...u, _id: u._id.toString() })));
}

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("eartencanvas");
  const r = await db.collection("users").insertOne(body);
  return NextResponse.json({ insertedId: r.insertedId.toString() }, { status: 201 });
}
