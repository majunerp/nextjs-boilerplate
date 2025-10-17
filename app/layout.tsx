import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tipcalculator.page'),
  title: {
    default: "Tip Calculator - Fast & Easy Tip Calculator",
    template: "%s | TipCalculator.page"
  },
  description: "Free tip calculator. Calculate tips, split bills, and determine gratuity for any service. Simple, fast, accurate.",
  keywords: ["tip calculator", "calculate tip", "bill splitter", "gratuity calculator", "tip percentage"],
  authors: [{ name: "TipCalculator.page" }],
  creator: "TipCalculator.page",
  publisher: "TipCalculator.page",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tipcalculator.page",
    title: "Tip Calculator - Fast & Easy Tip Calculator",
    description: "Free tip calculator. Calculate tips, split bills, and determine gratuity for any service.",
    siteName: "TipCalculator.page",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tip Calculator - Fast & Easy Tip Calculator",
    description: "Free tip calculator. Calculate tips, split bills, and determine gratuity for any service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5XC900ZSSP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5XC900ZSSP');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
