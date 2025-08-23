// File: app/login/page.jsx

"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-sand dark:bg-charcoal">
      <div className="text-center p-10 bg-white dark:bg-charcoal/50 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-charcoal dark:text-sand">
          Login to Earthen Canvas
        </h1>
        <p className="mb-8 text-charcoal/80 dark:text-sand/80">
          Sign in with your Google account to continue.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="px-6 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
