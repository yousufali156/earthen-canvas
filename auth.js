import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


export const {
    handlers, // { GET, POST }
    auth, // server-side session
    signIn, // server action
    signOut, // server action
} = NextAuth({
    providers: [Google],
    session: { strategy: "jwt" },
});