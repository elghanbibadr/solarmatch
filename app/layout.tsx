import type { Metadata, Viewport } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "./globals.css"; // Your own global styles (if any)
import AosInit from "./componenets/Aos";
import RecaptchaProvider from "./componenets/RecaptchaProvider";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "(c) SolarMatch",
 
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
        className={` ${epilogue.className} ${epilogue.variable} antialiased`}
      >
        <AosInit />
        <RecaptchaProvider>

        {children}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
