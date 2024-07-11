import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motocross Website",
  description: "Rent or Buy the Moto of Your Dreams!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-whiteBg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
