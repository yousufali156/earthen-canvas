// File: app/about/page.jsx

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sand dark:bg-charcoal">
      <Navbar />
      <main className="flex-grow pt-16"> 
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="bg-white dark:bg-gray-800/30 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-60 md:h-96 w-full">
              <Image 
                src="https://i.ibb.co/x8tgDZk7/Pottery-workshop.jpg"
                alt="Pottery workshop"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4 text-center">
                About Earthen Canvas
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
                Where Clay Transforms into Art
              </p>

              <div className="grid md:grid-cols-2 gap-10 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-gray-800 dark:text-white mb-3">Our Philosophy</h2>
                  <p>
                    Welcome to Earthen Canvas, founded on the principles of craftsmanship and natural beauty. We create unique, handmade ceramic pieces that bring warmth and elegance to your home. We believe in sustainable practices and the timeless appeal of objects made with care.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-gray-800 dark:text-white mb-3">Our Craft</h2>
                  <p>
                    Each item in our collection is a testament to the slow, mindful process of pottery. Every piece is shaped by hand, fired with passion, and finished with an attention to detail that ensures it is not just an object, but a piece of art with a soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
