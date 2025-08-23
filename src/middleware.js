// src/middleware.js
import { auth } from "@/auth";

export default auth((req) => {
  // যদি ইউজার লগইন করা না থাকে এবং সুরক্ষিত পেজে যেতে চায়
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    // তাকে লগইন পেজে পাঠিয়ে দেওয়া হবে
    return Response.redirect(new URL("/login", req.nextUrl.origin));
  }
});

export const config = {
  // dashboard এবং এর ভেতরের সব পেজ এই middleware দ্বারা সুরক্ষিত থাকবে
  matcher: ["/dashboard/:path*"],
};