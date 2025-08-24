"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [usage, setUsage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !imageFile) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Uploading image & adding product...");

    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        { method: "POST", body: formData }
      );
      const imgbbData = await imgbbRes.json();
      if (!imgbbData.success) throw new Error("Image upload failed");

      const imageUrl = imgbbData.data.url;

      // Send product data to API route
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image: imageUrl, usage }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("✅ Product added successfully!", { id: loadingToast });
      router.push("/products");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add product", { id: loadingToast });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-2xl mx-auto px-4 py-12 mt-10 w-full">
        <div className="p-8 rounded-2xl shadow-lg border bg-base-100 dark:bg-gray-800 transition-colors">
          <h1 className="text-3xl font-bold text-center mb-8">Add a New Creation</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full p-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm mb-1">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="input input-bordered w-full p-1"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Image (Required)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                required
                className="input w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Usage (Optional)</label>
              <input
                type="text"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                className="input input-bordered w-full p-2"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-md shadow-sm text-white bg-green-600 hover:bg-green-500 disabled:bg-gray-400 transition-colors"
            >
              {isLoading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
