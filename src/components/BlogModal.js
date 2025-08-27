"use client";

import { FiX } from 'react-icons/fi';

export default function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose} 
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <FiX size={24} />
        </button>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{post.date}</p>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}