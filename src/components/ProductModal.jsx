// File: src/components/ProductModal.jsx

"use client";

import Image from "next/image";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800/90 backdrop-blur-sm rounded-2xl w-full max-w-4xl p-8 border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative w-full h-80 rounded-lg overflow-hidden border-2 border-blue-500/50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">{product.name}</h2>
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-4">Description</p>
            <div className="bg-black/30 p-4 rounded-lg mb-6">
              <p className="text-gray-300">{product.description}</p>
            </div>
            
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-4">How to Use</p>
            <div className="bg-black/30 p-4 rounded-lg mb-6">
              <p className="text-gray-300">{product.usage}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold text-blue-400">${product.price}</p>
              <p className="text-xs text-gray-500 mt-2">Product ID: {product._id}</p>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
