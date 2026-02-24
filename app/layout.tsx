import type { Metadata } from "next";
import { Metamorphous } from 'next/font/google';
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const metamorphous = Metamorphous({
  subsets: ['latin'], // required
  weight: '400',      // optional, depends on font
});

export const metadata: Metadata = {
  title: "Nicole D. Hansen",
  description: "Author website for Nicole D. Hansen, author of the Elven Wastelands series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={metamorphous.className} >
         <header>
          <Header />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
