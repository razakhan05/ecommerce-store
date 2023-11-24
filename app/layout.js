import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Providers } from "@/store/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super Kicks",
  description: "one stop store to get your all trending sneakers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
