import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ProductCard from "@/src/components/ProductCard";

async function getProducts() {
  // This fetch call runs on the server
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      cache: 'no-store' // Ensures fresh data on every request
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold text-center text-charcoal mb-10">
          Our Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}