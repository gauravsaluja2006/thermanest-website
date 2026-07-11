import type { Metadata } from "next";
import { Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { InfoBar } from "@/components/layout/InfoBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/ui/MobileCtaBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermanest.co.in";

const siteTitle = "ThermaNest | Premium Modular Prefab Spaces";
const siteDescription =
  "Dubai-engineered luxury modular homes, offices, resorts and farmhouses. Built in 20–40 days. Serving Delhi NCR, Punjab, Haryana and Himachal Pradesh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "ThermaNest",
    images: [
      {
        url: "/images/logo.png",
        width: 1408,
        height: 736,
        alt: "ThermaNest",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-[68px] md:pb-0">
        <InfoBar />
        <Navbar />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
