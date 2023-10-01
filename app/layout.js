import NavBar from "@/common/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dereja.com",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
