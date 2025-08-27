"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { EmblaCarousel, EmblaCarouselChild } from '@/components/Carousel';
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";

// Your product data
const products = [
  { "_id": "65d8a3b3f8b9c2a1b0e6d5d4", "name": "Clay Storage Jar", "price": 48, "image": "https://i.ibb.co/hRBPFr9N/Clay-Storage-Jar.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5d2", "name": "Clay Bird House", "price": 32, "image": "https://i.ibb.co/qLTRfc4n/Clay-Bird-House.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c7", "name": "Decorative Lamp", "price": 30, "image": "https://i.ibb.co/Ps7BqJMd/Decorative-Lamp.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5cd", "name": "Earthen Water Bottle", "price": 16, "image": "https://i.ibb.co/mKzv8ym/Earthen-Water-Bottle.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c2", "name": "Ceramic Plate", "price": 15, "image": "https://i.ibb.co/zWBwzYHt/Ceramic-Plate.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c3", "name": "Pottery Mug", "price": 12, "image": "https://i.ibb.co/Ndk1F0XN/Pottery-Mug.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c4", "name": "Flower Pot", "price": 20, "image": "https://i.ibb.co/27SvzDpd/Flower-Pot.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c5", "name": "Clay Bowl", "price": 10, "image": "https://i.ibb.co/pjrcWRLz/Clay-Bowl.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c6", "name": "Earthen Jug", "price": 18, "image": "https://i.ibb.co/gM2N0kLQ/Earthen-Jug.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c8", "name": "Clay Sculpture", "price": 45, "image": "https://i.ibb.co/f5DgLN9/Clay-Sculpture.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c9", "name": "Serving Tray", "price": 22, "image": "https://i.ibb.co/nq8dMCvp/Serving-Tray.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5ca", "name": "Mini Pot Set", "price": 28, "image": "https://i.ibb.co/K4hVT1C/Mini-Pot-Set.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5cb", "name": "Clay Candle Holder", "price": 14, "image": "https://i.ibb.co/v6ZQ3rDM/Clay-Candle-Holder.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5cc", "name": "Hand Painted Vase", "price": 35, "image": "https://i.ibb.co/RG87D2dk/Hand-Painted-Vase.webp" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5ce", "name": "Clay Incense Holder", "price": 9, "image": "https://i.ibb.co/zVT3TFb4/Clay-Incense-Holder.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5cf", "name": "Serving Bowl Set", "price": 26, "image": "https://i.ibb.co/XrGRL1vw/Serving-Bowl-Set.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5d0", "name": "Traditional Clay Plate", "price": 13, "image": "https://i.ibb.co/mKNjvnV/Traditional-Clay-Plate.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5d1", "name": "Clay Wall Hanging", "price": 40, "image": "https://i.ibb.co/j9FK3m1x/Clay-Wall-Hanging.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5d3", "name": "Pottery Tea Set", "price": 55, "image": "https://i.ibb.co/kFyNsk0/Pottery-Tea-Set.jpg" },
  { "_id": "65d8a3b3f8b9c2a1b0e6d5c1", "name": "Clay Vase", "price": 25, "image": "https://i.ibb.co/Qjxd1jTM/Clay-Vase.jpg" }
];


// Replicated testimonials to reach 15 for better carousel effect
const allTestimonials = [
  { name: "Anika Rahman", text: "The tea set is a masterpiece. It has completely transformed my morning ritual. So elegant and well-crafted!" },
  { name: "Farhan Ahmed", text: "I bought a decorative lamp, and the patterns it casts are mesmerizing. It adds such a warm, magical glow to my room." },
  { name: "Samira Chowdhury", text: "My pottery mug is my new favorite. You can feel the quality and the love that went into making it. Truly a piece of art!" },
  { name: "Rashed Khan", text: "The clay water bottle keeps water so cool and fresh. A beautiful and healthy alternative to plastic." },
  { name: "Nadia Islam", text: "I ordered a set of serving bowls, and they are perfect for every occasion. Simple, elegant, and very durable." },
  { name: "Tanvir Hasan", text: "The hand-painted vase I received is stunning. It's a true centerpiece and a conversation starter." },
  { name: "Fatima Akter", text: "I love my clay storage jar! It's not only functional but also adds a beautiful rustic touch to my kitchen." },
  { name: "Imran Hossain", text: "The mini pot set is perfect for my succulents. They look so charming on my desk." },
  { name: "Jannatul Ferdous", text: "This is not just pottery; it's a story. The craftsmanship is evident in every single piece. Highly recommended." },
  { name: "Saifuddin Mahmud", text: "I gifted a clay sculpture to my parents, and they were overjoyed. It's a unique and thoughtful piece of art." },
  { name: "Ayesha Siddika", text: "The quality of the ceramic plates is top-notch. They make everyday meals feel like a special occasion." },
  { name: "Mizanur Rahman", text: "The earthen jug gives water a refreshing, earthy taste that is simply unparalleled. A wonderful product." },
  { name: "Sharmin Sultana", text: "My clay birdhouse is now home to a family of sparrows. It brings so much joy and life to my garden." },
  { name: "Kamrul Islam", text: "The customer service was as excellent as their products. A truly wonderful experience from start to finish." },
  { name: "Sumaiya Khatun", text: "I bought a wall hanging, and it has become the focal point of my living room. The details are incredible." },
];

// Replicated workshop images to reach 15 for better carousel effect
const allWorkshopImages = [
  "https://i.ibb.co/hRBPFr9N/Clay-Storage-Jar.jpg",   // Clay Storage Jar
  "https://i.ibb.co/qLTRfc4n/Clay-Bird-House.webp",    // Clay Bird House
  "https://i.ibb.co/Ps7BqJMd/Decorative-Lamp.jpg",     // Decorative Lamp
  "https://i.ibb.co/mKzv8ym/Earthen-Water-Bottle.webp",// Earthen Water Bottle
  "https://i.ibb.co/zWBwzYHt/Ceramic-Plate.jpg",       // Ceramic Plate
  "https://i.ibb.co/Ndk1F0XN/Pottery-Mug.webp",        // Pottery Mug
  "https://i.ibb.co/27SvzDpd/Flower-Pot.webp",         // Flower Pot
  "https://i.ibb.co/pjrcWRLz/Clay-Bowl.webp",          // Clay Bowl
  "https://i.ibb.co/gM2N0kLQ/Earthen-Jug.webp",        // Earthen Jug
  "https://i.ibb.co/f5DgLN9/Clay-Sculpture.jpg",       // Clay Sculpture
  "https://i.ibb.co/nq8dMCvp/Serving-Tray.jpg",        // Serving Tray
  "https://i.ibb.co/K4hVT1C/Mini-Pot-Set.jpg",         // Mini Pot Set
  "https://i.ibb.co/v6ZQ3rDM/Clay-Candle-Holder.jpg",  // Clay Candle Holder
  "https://i.ibb.co/RG87D2dk/Hand-Painted-Vase.webp", // Hand Painted Vase
  "https://i.ibb.co/zVT3TFb4/Clay-Incense-Holder.jpg", // Clay Incense Holder
  "https://i.ibb.co/XrGRL1vw/Serving-Bowl-Set.jpg",    // Serving Bowl Set
  "https://i.ibb.co/mKNjvnV/Traditional-Clay-Plate.jpg", // Traditional Clay Plate
  "https://i.ibb.co/j9FK3m1x/Clay-Wall-Hanging.jpg",   // Clay Wall Hanging
  "https://i.ibb.co/kFyNsk0/Pottery-Tea-Set.jpg",      // Pottery Tea Set
  "https://i.ibb.co/Qjxd1jTM/Clay-Vase.jpg"            // Clay Vase
];



export default function HomePage() {
  const defaultCarouselOptions = { loop: true };
  const autoplayOptions = { playOnInit: true, delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true };

  return (
    <div className="flex flex-col min-h-screen bg-sand dark:bg-charcoal">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541186245259-016452c8b417?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div> {/* Overlay for better text readability */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
              Earthen Canvas
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
              Discover the timeless beauty of handmade pottery, crafted with love and passion in the heart of Namuja, Bangladesh.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 
                         bg-gradient-to-r from-terracotta to-orange-600 text-white 
                         font-bold rounded-full shadow-lg text-lg
                         hover:from-orange-600 hover:to-terracotta 
                         hover:shadow-xl transform hover:-translate-y-1 
                         transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-terracotta/50"
            >
              Explore Our Artisan Collection
            </Link>
          </div>
        </section>

        {/* About Us Summary Section (Enhanced) */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-1">
              <img src="https://i.ibb.co/f5DgLN9/Clay-Sculpture.jpg" alt="Potter at work in Namuja" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
            </div>
            <div className="text-center md:text-left md:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-6">
                Crafted from Earth, Shaped by the Soul of Namuja
              </h2>
              <p className="text-charcoal/80 dark:text-sand/80 mb-4 leading-relaxed text-lg">
                Earthen Canvas was born from a profound love for traditional craftsmanship and the timeless beauty of the earth. Each piece in our collection is more than an object; it's a narrative handcrafted by skilled artisans from **Namuja, Rajshahi Division, Bangladesh**.
              </p>
              <p className="text-charcoal/80 dark:text-sand/80 mb-6 leading-relaxed text-lg">
                We believe that the items we live with should be soulful, sustainable, and beautiful. By choosing our pottery, you are not just acquiring a unique piece of art—you are supporting a legacy of ancestral skills, fostering economic growth, and empowering a community of creators in Bangladesh.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-orange-600 dark:text-amber-500 hover:underline text-lg">
                Discover Our Full Story <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Carousel */}
        <section className="py-16 md:py-24 bg-sand/50 dark:bg-charcoal/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-12">Our Handpicked Creations</h2>
            <EmblaCarousel options={defaultCarouselOptions} autoplayOptions={autoplayOptions}>
              {products.map((product) => (
                <EmblaCarouselChild key={product._id} className="embla__slide--products">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                    <img src={product.image} alt={product.name} className="h-56 w-full object-cover rounded-lg mb-4 shadow-md" />
                    <h3 className="text-xl font-semibold text-charcoal dark:text-sand mb-2">{product.name}</h3>
                    <p className="text-lg font-bold text-terracotta dark:text-amber-400 mt-auto">${product.price.toFixed(2)}</p>
                    <Link href={`/products/${product._id}`} className="mt-4 inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </Link>
                  </div>
                </EmblaCarouselChild>
              ))}
            </EmblaCarousel>
          </div>
        </section>

        {/* How It's Made Section (Enhanced) */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-12">The Journey: From Earth to Your Home</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="text-6xl text-terracotta mb-6">①</div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-sand mb-3">Sourcing Nature's Best</h3>
                <p className="text-charcoal/70 dark:text-sand/70 leading-relaxed">We meticulously select the finest natural clay from local sources in Namuja, ensuring purity and superior texture for every creation.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl text-terracotta mb-6">②</div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-sand mb-3">Artisanal Craftsmanship</h3>
                <p className="text-charcoal/70 dark:text-sand/70 leading-relaxed">Each piece is skillfully shaped by hand on the potter's wheel, embodying generations of artistic heritage and individual passion.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl text-terracotta mb-6">③</div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-sand mb-3">Fired & Finished with Care</h3>
                <p className="text-charcoal/70 dark:text-sand/70 leading-relaxed">The creations are then traditionally fired, and often glazed, transforming raw clay into durable, beautiful, and functional art for your everyday life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Words from Our Community (Testimonials Carousel) */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-sand/40 to-sand/20 dark:from-charcoal/60 dark:to-charcoal/40">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-14 relative inline-block">
              Inspiring Feedback from Our Valued Customers
              <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-terracotta rounded-full transform -translate-x-1/2"></span>
            </h2>

            {/* Carousel */}
            <EmblaCarousel
              options={defaultCarouselOptions}
              autoplayOptions={{ ...autoplayOptions, delay: 5000 }}
            >
              {allTestimonials.map((testimonial, index) => (
                <EmblaCarouselChild
                  key={index}
                  className="embla__slide--testimonials px-4"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/40 p-8 md:p-10 rounded-2xl shadow-xl h-full flex flex-col justify-between transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

                    {/* Quote Icon */}
                    <div className="text-terracotta/70 text-4xl mb-4">“</div>

                    {/* Testimonial Text */}
                    <p className="text-lg leading-relaxed text-charcoal/80 dark:text-sand/80 italic mb-8">
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col items-center mt-auto">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full border-2 border-terracotta mb-3 object-cover"
                        />
                      )}
                      <cite className="block font-semibold text-charcoal dark:text-sand not-italic text-base">
                        – {testimonial.name}
                      </cite>
                      {testimonial.role && (
                        <span className="text-sm text-charcoal/60 dark:text-sand/60 mt-1">
                          {testimonial.role}
                        </span>
                      )}
                    </div>
                  </div>
                </EmblaCarouselChild>
              ))}
            </EmblaCarousel>
          </div>
        </section>


        {/* A Glimpse of Our Workshop (Image Carousel) */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-12">Behind the Scenes: Our Artisans at Work</h2>
            <EmblaCarousel options={defaultCarouselOptions} autoplayOptions={{ ...autoplayOptions, delay: 4000 }}>
              {allWorkshopImages.map((src, index) => (
                <EmblaCarouselChild key={index} className="embla__slide--workshop">
                  <img src={src} alt={`Workshop view ${index + 1}`} className="h-64 md:h-80 w-full object-cover rounded-xl shadow-md" />
                </EmblaCarouselChild>
              ))}
            </EmblaCarousel>
            {/* <div className="mt-10">
              <Link href="/gallery" className="inline-flex items-center gap-2 font-semibold text-orange-600 dark:text-amber-500 hover:underline text-lg">
                View Full Gallery <FiArrowRight className="ml-1" />
              </Link>
            </div> */}
          </div>
        </section>

        {/* Newsletter Signup (Enhanced) */}
        <section className="py-16 md:py-24 bg-terracotta/10 dark:bg-amber-900/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal dark:text-sand mb-4">Join Our Earthen Canvas Family</h2>
            <p className="text-charcoal/80 dark:text-sand/80 mb-8 text-lg">
              Subscribe to our newsletter for exclusive insights into new collections, special artisan stories from Namuja, and unique offers.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <div className="relative flex-grow">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xl" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-charcoal dark:text-sand focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md text-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}