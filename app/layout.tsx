import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { categories } from "@/src/db/schema";
import { db } from "@/src/db";
import { ThemeProvider } from "./components/theme-provider";


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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} bg-white text-black max-w-full mx-auto   dark:bg-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
        <Header categories={allCategories}/>
        <main className="min-h-screen w-full">
        <div className="w-full max-w-6xl mx-auto">
          {children}
        </div>
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
