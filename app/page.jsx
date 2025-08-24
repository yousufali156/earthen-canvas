// HomePage.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    // Add dark mode background to the main container
    <div className="flex flex-col min-h-screen bg-sand dark:bg-charcoal">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 bg-sand/20 dark:bg-charcoal/80">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-charcoal dark:text-sand mb-4">
              Earthen Canvas
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 dark:text-sand/80 mb-8">
              Discover the timeless beauty of handmade pottery, crafted with love and passion.
            </p>
            <Link
              href="/products"
              className="px-8 py-3 rounded-xl bg-terracotta text-white font-semibold hover:bg-charcoal transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold text-charcoal dark:text-sand mb-8">
              Featured Products
            </h2>
            <p className="text-charcoal/70 dark:text-sand/70">
              Our finest collection will be displayed here soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
