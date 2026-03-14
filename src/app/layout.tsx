import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "527 Coffee | Iconic Cafe in Serang",
  description: "A premium lifestyle cafe in Serang, Banten. Perfect for working, hanging out, and enjoying coffee until late night.",
  icons: {
    icon: "/images/favicon/527.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased selection:bg-sage selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
