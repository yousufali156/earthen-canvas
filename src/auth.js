import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/dbconnect"; // Corrected: Using path alias for robustness

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Use the MongoDB adapter to store user and session data in your database.
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // The secret is automatically read from the AUTH_SECRET environment variable in your .env.local file.
  // There is no need to explicitly define it here.

  // Optional: You can specify custom pages for sign-in, sign-out, errors, etc.
  pages: {
    signIn: '/login',
  },

  // Optional: Callbacks are used to control what happens during authentication events.
  callbacks: {
    async session({ session, user }) {
      // Add the user's ID to the session object to make it available on the client side.
      session.user.id = user.id;
      return session;
    },
  },
});