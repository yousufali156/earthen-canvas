// File: src/auth.js

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./components/lib/dbconnect";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Connects NextAuth to your MongoDB database to store user and session info
  adapter: MongoDBAdapter(clientPromise),
  
  // Configure authentication providers, in this case, only Google
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Specify custom pages, like a custom login page
  pages: {
    signIn: '/login',
  },

  // Use JSON Web Tokens for session management
  session: {
    strategy: "jwt",
  },

  // Callbacks are functions that are executed during the authentication process
  callbacks: {
    // This callback adds the user's unique ID to the session object
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
