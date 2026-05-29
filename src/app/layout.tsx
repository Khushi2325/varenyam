import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varenyam Industrial Suppliers | Premium Industrial & Corporate Solutions",
  description: "One Step Solutions for all your industrial and corporate needs. Premium B2B supplier of PPE, fire safety equipment, industrial safety shoes, and corporate supplies.",
  keywords: "Industrial Supplier, PPE Kits, Fire Safety Equipment, Corporate Needs, Safety Helmets, Reflective Jackets, Varenyam Industrial",
  openGraph: {
    title: "Varenyam Industrial Suppliers",
    description: "One Step Solutions for all your industrial and corporate needs.",
    type: "website",
  },
  icons: [
    {
      rel: 'icon',
      media: '(prefers-color-scheme: light)',
      type: 'image/png',
      url: '/assets/images/logo.png',
    },
    {
      rel: 'icon',
      media: '(prefers-color-scheme: dark)',
      type: 'image/png',
      url: '/assets/images/logo-white.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/assets/images/logo.png',
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-text-dark bg-background overflow-x-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
