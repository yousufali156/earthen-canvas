// File: app/page.jsx

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-charcoal mb-4">
              Earthen Canvas
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Discover the timeless beauty of handmade pottery, crafted with
              love and passion.
            </p>
            <Link
              href="/products"
              className="px-8 py-3 rounded-xl bg-terracotta text-white font-semibold hover:bg-charcoal transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Product Highlights Section (Placeholder) */}
        <section className="py-16 bg-sand/20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">Featured Products</h2>
                <p className="text-charcoal/70">Our finest collection will be displayed here soon.</p>
                {/* Product cards will be added here in the next step */}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}