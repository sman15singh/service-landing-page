import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Free Digital Marketing Consultation for Futsal Business Owners",
    template: "%s | Sailendra Man Singh"
  },
  description:
    "Get a free 1:1 digital marketing consultation and a customized marketing strategy built for your futsal business.",
  openGraph: {
    title: "Fill More Futsal Booking Slots With a Customized Digital Marketing Strategy",
    description:
      "Book a free consultation call and receive clear recommendations for your futsal business.",
    url: "/",
    siteName: "Sailendra Man Singh",
    images: [
      {
        url: "/sailendra-logo.png",
        width: 400,
        height: 400,
        alt: "Sailendra Man Singh logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Consultation for Futsal Business Owners",
    description:
      "Receive a customized digital marketing strategy built for your futsal business.",
    images: ["/sailendra-logo.png"]
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  metadataBase: new URL(siteUrl)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
