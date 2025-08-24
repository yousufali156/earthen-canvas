// File: app/products/page.jsx

"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link"; 
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";



const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchProducts();
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Collection
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Handcrafted pottery for the modern home.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id || product._id} 
                product={product} 
                onClick={() => handleCardClick(product)} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No products found.
          </p>
        )}
      </main>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}