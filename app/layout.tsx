import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import { LayoutProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <p>© 2024</p>
        <Footer />
      </body>
    </html>
  );
}
