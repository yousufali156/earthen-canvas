import { Playfair_Display, Raleway } from "next/font/google";


export const playfair = Playfair_Display({
subsets: ["latin"],
variable: "--font-playfair",
display: "swap",
});


export const raleway = Raleway({
subsets: ["latin"],
variable: "--font-raleway",
display: "swap",
weight: ["300","400","500","600","700"]
});