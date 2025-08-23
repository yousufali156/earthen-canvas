// app/layout.jsx
import "./globals.css";
import { playfair, raleway } from "./fonts";
import Providers from "@/src/components/Providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Earthen Canvas",
  description: "Handmade ceramics with earthy elegance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <body className="font-raleway">
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
