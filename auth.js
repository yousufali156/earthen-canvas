import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
    handlers, // { GET, POST }
    auth,     // server-side session
    signIn,   // server action
    signOut,  // server action
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: { strategy: "jwt" },
});
