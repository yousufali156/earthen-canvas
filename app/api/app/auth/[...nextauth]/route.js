// app/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import { authOptions } from "../auth.config"; // path ঠিক রাখো

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
