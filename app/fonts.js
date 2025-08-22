// app/fonts.js
import { Playfair_Display, Raleway } from "next/font/google";

// Playfair Display font
export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700"], // optional, specify weights if needed
});

// Raleway font
export const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});
