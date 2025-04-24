import type { Metadata, Viewport } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "./globals.css"; // Your own global styles (if any)
import AosInit from "./componenets/Aos";
import RecaptchaProvider from "./componenets/RecaptchaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolarMatch™",
 
  description:
    "Find your Solar Match by Comparing Obligation-Free Solar Quotes! Only takes 60 seconds to compare the best Solar Deals!",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale:1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={` ${inter.className} ${inter.variable} antialiased`}
      >
        <AosInit />
        <RecaptchaProvider>

        {children}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
