// File: app/api/products/route.js


import { NextResponse } from "next/server";
// Corrected the import path to point to the correct location
import clientPromise from "@/components/lib/dbconnect";
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eartencanvas");
    const products = await db.collection("products").find({}).toArray();
    
    // No _id conversion is needed as it's already a string in your DB
    return NextResponse.json(products);
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST handler to add a new product
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, image, usage } = body;

    if (!name || !description || !price || !image) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("eartencanvas");
    
    const result = await db.collection("products").insertOne({
      name,
      description,
      price,
      image,
      usage,
    });

    return NextResponse.json({ message: "Product added successfully", productId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Failed to add product:", error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
