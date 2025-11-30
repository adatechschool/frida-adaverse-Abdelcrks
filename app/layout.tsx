import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { categories } from "@/src/db/schema";
import { AllCategories } from "./components/AllCategories";
import { db } from "@/src/db";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const allCategories = await db.select().from(categories);

  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-[linear-gradient(356deg,rgba(0,0,0,1)_0%,rgba(78,56,56,1)_100%,rgba(0,0,0,1)_100%)] text-white max-w-6xl mx-auto`}>
        <Header categories={allCategories}/>
        <main className="min-h-screen w-full">
        <div className="w-full max-w-6xl mx-auto">
          {children}
        </div>
        </main>
      </body>
    </html>
  );
}
