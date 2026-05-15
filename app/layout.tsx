import type { Metadata } from "next";
import { Metamorphous } from 'next/font/google';
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notification from "./components/Notification";

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
          <Notification
            visible={true}
            message="Join the Cover Reveal Team! Singups close May 23rd."
            link="https://forms.gle/yDd6ZwfEWrzMdbC28"
            linkTitle="Singup here"
          />
        </header>

        <main>

          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html >
  );
}
