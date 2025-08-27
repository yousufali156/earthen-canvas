"use client";

import BlogModal from '@/components/BlogModal';
import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

// আপনার দেওয়া প্রোডাক্ট ডেটা থেকে ব্লগ পোস্ট তৈরি করা হয়েছে
const blogPosts = [
  {
    title: "The Heart of the Home: Our Traditional Clay Storage Jar",
    date: "August 28, 2025",
    excerpt: "Discover the timeless appeal of our handcrafted Clay Storage Jar, a perfect blend of rustic charm and modern utility for your kitchen...",
    imageUrl: "https://i.ibb.co/hRBPFr9N/Clay-Storage-Jar.jpg",
    tags: ["Kitchen", "Storage", "Traditional"],
    content: (
      <>
        <p>In a world of plastic and steel, there's a certain warmth and soulfulness that only traditional clay can bring to a home. Our Clay Storage Jar is more than just a container; it's a piece of heritage designed to keep your kitchen staples fresh the natural way.</p>
        <p>The porous nature of the clay allows for natural insulation, keeping grains, spices, or pickles cool and free from moisture. Its sturdy build and classic design make it a beautiful and functional centerpiece for any pantry. Embrace a healthier, more sustainable way of living with this rustic treasure.</p>
        <h3>Usage Tips:</h3>
        <ul>
            <li>Ideal for storing dry goods like rice, flour, and lentils.</li>
            <li>Ensure the lid is tightly sealed to maintain freshness.</li>
            <li>Clean with a soft, damp cloth. Avoid harsh detergents to preserve the natural clay surface.</li>
        </ul>
      </>
    )
  },
  {
    title: "A Touch of Elegance: The Hand-Painted Vase",
    date: "August 25, 2025",
    excerpt: "Each of our Hand-Painted Vases is a unique masterpiece, bringing vibrant color and cultural artistry into your living space...",
    imageUrl: "https://i.ibb.co/RG87D2dk/Hand-Painted-Vase.webp",
    tags: ["Decor", "Artistry", "Handmade"],
    content: (
      <>
        <p>Art should not be confined to a canvas. Our Hand-Painted Clay Vase is a testament to this belief, transforming an everyday object into a stunning piece of decor. Each vase is meticulously painted by skilled artisans, featuring traditional motifs that tell a story of culture and craftsmanship.</p>
        <p>Whether holding a bouquet of fresh flowers or standing alone as a decorative accent, this vase brings a burst of color and personality to any room. It's a perfect way to celebrate art in your daily life and support traditional craft forms.</p>
        <h3>Care Instructions:</h3>
        <p>To preserve the intricate, hand-painted details, gently clean the vase with a soft, dry cloth. Avoid using water or harsh chemical cleaners on the exterior surface.</p>
      </>
    )
  },
  {
    title: "Quiet Mornings with the Perfect Pottery Tea Set",
    date: "August 22, 2025",
    excerpt: "Elevate your tea-drinking ritual with our elegant Pottery Tea Set. Designed for quiet moments of reflection and connection...",
    imageUrl: "https://i.ibb.co/kFyNsk0/Pottery-Tea-Set.jpg",
    tags: ["Lifestyle", "Tea", "Relaxation"],
    content: (
      <>
        <p>There is a special kind of peace found in the ritual of making and drinking tea. Our Pottery Tea Set is crafted to enhance that experience. Complete with a beautifully balanced teapot and two perfectly sized cups, this set is an invitation to slow down and savor the moment.</p>
        <p>The earthy texture and minimalist design provide a tactile pleasure, making each sip feel special. It’s perfect for sharing a quiet conversation with a loved one or enjoying a moment of solitude. This tea set isn't just serveware; it's an experience.</p>
        <h3>Getting Started:</h3>
        <p>Before your first use, rinse the teapot and cups with warm water. This set is ideal for brewing all types of tea. After use, hand wash gently without harsh soaps and allow it to air dry completely.</p>
      </>
    )
  },
  {
    title: "Invite Nature In: The Charming Clay Bird House",
    date: "August 19, 2025",
    excerpt: "Create a welcoming sanctuary for your feathered friends with our beautifully crafted Clay Bird House. A delightful addition to any garden...",
    imageUrl: "https://i.ibb.co/qLTRfc4n/Clay-Bird-House.webp",
    tags: ["Garden", "Nature", "Outdoor"],
    content: (
        <>
            <p>Bring life and song to your garden with our eco-friendly Clay Bird House. It provides a safe and insulated shelter for small birds, protecting them from predators and the elements. The natural clay material helps keep the interior cool in summer and warm in cooler months.</p>
            <p>Its simple, elegant design blends seamlessly with nature, making it a beautiful decorative piece as well as a functional home for birds. Hang it from a tree branch or a hook in a quiet corner of your garden and enjoy the delightful sight of birds making it their home.</p>
        </>
    )
  },
  {
    title: "Naturally Cool: The Earthen Water Bottle",
    date: "August 16, 2025",
    excerpt: "Ditch the plastic and embrace a healthier, more sustainable way to hydrate with our Earthen Water Bottle. Experience the natural coolness...",
    imageUrl: "https://i.ibb.co/mKzv8ym/Earthen-Water-Bottle.webp",
    tags: ["Health", "Eco-Friendly", "Lifestyle"],
    content: (
        <>
            <p>Rediscover the ancient wisdom of storing water in clay. Our Earthen Water Bottle keeps water naturally cool through the principle of evaporation, without needing any electricity. The clay also imparts a subtle, earthy flavor that is incredibly refreshing.</p>
            <p>By choosing this bottle, you're not only opting for a healthier lifestyle by avoiding plastics but also making an environmentally conscious choice. It's perfect for daily use at home, in the office, or for yoga sessions.</p>
        </>
    )
  },
  {
    title: "A Warm Glow: The Intricate Decorative Lamp",
    date: "August 13, 2025",
    excerpt: "Illuminate your space with the warm, inviting light of our Decorative Clay Lamp. Its detailed cutwork casts mesmerizing patterns...",
    imageUrl: "https://i.ibb.co/Ps7BqJMd/Decorative-Lamp.jpg",
    tags: ["Decor", "Lighting", "Festive"],
    content: (
        <>
            <p>Create a magical ambiance in any room with this exquisite clay lamp. Handcrafted with intricate cutwork, it allows light from a simple tea light or LED candle to filter through, casting beautiful, dancing shadows on your walls.</p>
            <p>This lamp is perfect for festive occasions, meditation spaces, or simply creating a cozy and relaxing atmosphere on a quiet evening. It serves as a stunning piece of art even when unlit, showcasing the skill of its maker.</p>
        </>
    )
  },
  // আপনি এখানে এই প্যাটার্ন অনুসরণ করে বাকি প্রোডাক্ট যোগ করতে পারবেন
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Stories from the Canvas
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover the inspiration and craftsmanship behind our creations.
            </p>
          </div>
          
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="group flex flex-col bg-white dark:bg-gray-800/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {post.imageUrl && (
                  <div className="flex-shrink-0">
                    <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button onClick={() => openModal(post)} className="text-left">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {post.title}
                      </h2>
                    </button>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{post.excerpt}</p>
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={() => openModal(post)} 
                      className="text-teal-600 dark:text-teal-400 font-semibold inline-flex items-center text-sm"
                    >
                      <span>Read the full story</span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <FiArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <BlogModal post={selectedPost} onClose={closeModal} />
    </>
  );
}