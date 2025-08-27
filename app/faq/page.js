"use client"; // This component is now interactive, so it must be a Client Component.

import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi"; // Plus and Minus icons

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account on Earthen Canvas?",
      answer: "You can easily create an account by clicking the 'Sign In' button and choosing to sign in with your Google account. We handle the rest automatically for a seamless experience!"
    },
    {
      question: "What kind of art can I upload?",
      answer: "You can upload digital paintings, traditional art scans, photography, 3D models, and more. We encourage creativity in all forms, but please ensure your work adheres to our community guidelines and does not contain any hateful or explicit content."
    },
    {
      question: "How does copyright work for my art?",
      answer: "You retain all copyrights to your work. By uploading to Earthen Canvas, you grant us a non-exclusive, worldwide, royalty-free license to display your art solely for the purpose of operating and promoting the platform. You can remove your art at any time."
    },
    {
      question: "Can I sell my art through Earthen Canvas?",
      answer: "Currently, Earthen Canvas is a platform for showcasing and sharing art. We are actively working on features that will allow artists to sell their work directly through the site in the near future. Stay tuned for updates!"
    },
    {
      question: "How do you feature artists on the homepage?",
      answer: "Our curation team regularly reviews new and popular artworks on the platform. We look for unique styles, high-quality submissions, and active community members. The best way to get noticed is to consistently upload your best work and engage with others."
    },
    {
      question: "What are the recommended image specifications for uploads?",
      answer: "For the best viewing experience, we recommend uploading images in JPG or PNG format, with a minimum width of 1200 pixels. While we don't have a strict file size limit, optimizing your images for the web (under 2MB) will ensure faster loading times for everyone."
    }
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {faq.question}
                </h2>
                <span className="text-blue-500">
                  {openIndex === index ? <FiMinus size={22} /> : <FiPlus size={22} />}
                </span>
              </button>
              
              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
            <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 
                           bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                           font-semibold rounded-full shadow-lg 
                           hover:from-blue-600 hover:to-purple-700 
                           hover:shadow-xl transform hover:-translate-y-1 
                           transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
                <FiArrowLeft className="mr-2 text-xl" />
                <span className="text-lg">Back to Home</span>
            </Link>
        </div>
      </div>
    </main>
  );
}