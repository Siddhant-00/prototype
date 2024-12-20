import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhant Portfolio",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className }>
        <div className="w-full overflow-x-hidden">
        <Navbar/>
        </div>
     
        {children}
        <div className="w-full overflow-x-hidden">
        <Footer/>
        </div>
       
      </body>
    
    </html>
  );
}
