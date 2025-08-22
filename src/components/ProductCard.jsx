"use client";
import React from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="bg-[#F7F7F2] border border-[#E07A5F]/30 rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
            {/* Product Image */}
            <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Info */}
            <h2 className="text-xl font-semibold text-[#3D405B] mb-2 font-playfair">
                {product.name}
            </h2>
            <p className="text-[#3D405B]/80 flex-grow mb-3 font-raleway">
                {product.description.length > 80
                    ? product.description.slice(0, 80) + "..."
                    : product.description}
            </p>

            {/* Price & Button */}
            <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-[#E07A5F]">
                    ${product.price}
                </span>
                <Link
                    href={`/products/${product._id}`}
                    className="px-4 py-2 rounded-xl bg-[#E07A5F] text-white font-medium hover:bg-[#3D405B] transition"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}
