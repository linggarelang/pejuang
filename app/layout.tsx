import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "./providers/react-lenis";

import { GoogleAnalytics } from '@next/third-parties/google'

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const poppins = Poppins({
  variable: "--font-syne",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pejuang App",
  description: "App for coffee lovers to track their coffee journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}`}
    >
      <LenisProvider
        root
        options={{
          duration: 2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.2,
        }}
      >
        <body>
          <GoogleAnalytics gaId="G-MFS752DQ96" />

          {/* Navbar */}
          <header className="relative">
            <Navbar />
          </header>

          {/* Main Content */}
          <main className="relative min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-[#2f1b0c] text-[#f4f4f4] p-6">
            <Footer />
          </footer>
        </body>
      </LenisProvider>
    </html>
  );
};
