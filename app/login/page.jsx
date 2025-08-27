// File: app/login/page.jsx

"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-sand dark:bg-charcoal">
      <div className="text-center p-10 bg-white dark:bg-gray-800/50 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-charcoal dark:text-sand font-playfair">
          Welcome to Earthen Canvas
        </h1>
        <p className="mb-8 text-charcoal/80 dark:text-sand/80">
          Sign in with your Google account to continue.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-charcoal dark:text-sand font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <FcGoogle size={24} />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
