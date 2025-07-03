import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LenisProvider from "./providers/react-lenis";

import { GoogleAnalytics } from '@next/third-parties/google'

const syne = Syne({
  variable: "--font-syne",
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
      className={`${syne.variable}`}
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
          <header>
            <Navbar />
          </header>

          <main>
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </body>
      </LenisProvider>
    </html>
  );
};
