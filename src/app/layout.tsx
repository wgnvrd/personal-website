import type { Metadata } from "next";
import Head from "next/head";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Izzy Wagenvoord",
  description: "Izzy Wagenvoord's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
     <body className={`flex flex-col justify-center items-center ${spaceGrotesk.className} ${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
