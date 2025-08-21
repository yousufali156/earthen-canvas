import "./globals.css";
import { playfair, raleway } from "./../app/fonts";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";


export const metadata = {
    title: "Pottery Store",
    description: "Handmade ceramics with earthy elegance",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
            <body className="font-raleway">
                <ThemeProvider>
                    {children}
                    <Toaster position="top-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}