// File: app/contact/page.jsx

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6">Get in Touch</h1>
        <p className="text-lg text-charcoal/80 mb-4">
          Have a question or a custom request? We'd love to hear from you.
        </p>
        <a href="mailto:hello@earthencanvas.com" className="text-xl text-terracotta hover:underline font-semibold">
          hello@earthencanvas.com
        </a>
      </main>
      <Footer />
    </div>
  );
}
