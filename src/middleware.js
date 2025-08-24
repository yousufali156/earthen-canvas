// File: src/middleware.js

import { auth } from "@/auth";

export default auth((req) => {
  // Check if the user is trying to access a protected route (`/dashboard`)
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");
  
  // Check if the user is authenticated
  const isAuthenticated = !!req.auth;

  // If trying to access a protected route without being authenticated...
  if (isProtectedRoute && !isAuthenticated) {
    // ...redirect them to the login page.
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// This config specifies that the middleware should only run on dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
