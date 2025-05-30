import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "./globals.css"; // Your own global styles (if any)
import AosInit from "./componenets/Aos";
import RecaptchaProvider from "./componenets/RecaptchaProvider";
import Script from "next/script";

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
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B92W7B7SNM"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B92W7B7SNM');`}
        </Script>
      </head>
      <body className={` ${inter.className} ${inter.variable} antialiased`}>
        <AosInit />
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
