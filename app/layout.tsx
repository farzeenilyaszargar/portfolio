
import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const cursive = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-cursive",
});


export const metadata: Metadata = {
  title: "Farzeen Ilyas Zargar",
  description: "welcome to my portfolio website!",
  icons:'./favicon.ico',
  openGraph:{
    images:'', //after making!
  }

  
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={`${cursive.variable}`}>
        {children}
      </body>
    </html>
  );
}
