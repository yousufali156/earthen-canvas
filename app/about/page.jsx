// File: app/about/page.jsx

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6 text-center">About Earthen Canvas</h1>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Welcome to Earthen Canvas, where clay transforms into art. Founded on the principles of craftsmanship and natural beauty, we create unique, handmade ceramic pieces that bring warmth and elegance to your home. Each item is a testament to the slow, mindful process of pottery, shaped by hand and fired with passion. We believe in sustainable practices and the timeless appeal of objects made with care.
        </p>
      </main>
      <Footer />
    </div>
  );
}
