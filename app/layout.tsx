import type { Metadata } from "next";
import { Noto_Serif_SC} from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  variable: "--font-mine",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Farzeen Ilyas Zargar",
  description: "Check It Out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
