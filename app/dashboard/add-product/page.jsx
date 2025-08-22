// File: app/dashboard/add-product/page.jsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "@/src/components/Navbar";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !image) {
        toast.error("Please fill out all fields.");
        return;
    }
    setIsLoading(true);
    const loadingToast = toast.loading("Adding your product...");

    // In a real application, you would make a POST request to your backend API.
    // For this mock setup, we'll simulate a delay.
    setTimeout(() => {
        toast.success("Product added successfully! (Mock)", {
            id: loadingToast,
        });
        router.push("/products");
        // No need to set isLoading to false since we are navigating away.
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-2xl mx-auto px-4 py-12 w-full">
            <div className="bg-cream p-8 rounded-2xl shadow-lg border border-sand/50">
                <h1 className="text-3xl font-playfair font-bold text-center text-charcoal mb-8">Add a New Creation</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Product Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-sand rounded-md shadow-sm focus:outline-none focus:ring-terracotta focus:border-terracotta"/>
                    </div>
                     <div>
                        <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-1">Description</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows="4" className="mt-1 block w-full px-3 py-2 border border-sand rounded-md shadow-sm focus:outline-none focus:ring-terracotta focus:border-terracotta"></textarea>
                    </div>
                     <div>
                        <label htmlFor="price" className="block text-sm font-medium text-charcoal mb-1">Price ($)</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-sand rounded-md shadow-sm focus:outline-none focus:ring-terracotta focus:border-terracotta"/>
                    </div>
                     <div>
                        <label htmlFor="image" className="block text-sm font-medium text-charcoal mb-1">Image URL</label>
                        <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} required placeholder="https://images.unsplash.com/..." className="mt-1 block w-full px-3 py-2 border border-sand rounded-md shadow-sm focus:outline-none focus:ring-terracotta focus:border-terracotta"/>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-terracotta hover:bg-charcoal disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta transition-colors">
                        {isLoading ? "Adding..." : "Add Product"}
                    </button>
                </form>
            </div>
        </main>
    </div>
  );
}
