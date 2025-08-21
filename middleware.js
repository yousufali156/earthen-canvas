import { auth } from "@/auth";


export default auth((req) => {
    const isAuthed = !!req.auth;
    const { pathname, origin } = req.nextUrl;


    if (pathname.startsWith("/dashboard") && !isAuthed) {
        return Response.redirect(new URL("/login", origin));
    }
});


export const config = {
    matcher: ["/dashboard/:path*"],
};