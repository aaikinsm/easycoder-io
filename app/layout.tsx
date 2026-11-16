import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Easy Coder — Learn coding with ease",
    template: "%s · Easy Coder",
  },
  description: site.description,
  applicationName: "Easy Coder",
  keywords: [
    "learn python",
    "learn java",
    "learn web development",
    "coding app",
    "Easy Coder",
    "AI coding tutor",
  ],
  openGraph: {
    title: "Easy Coder — Learn coding with ease",
    description: site.description,
    url: site.url,
    siteName: "Easy Coder",
    images: [{ url: "/logo.png", width: 277, height: 270, alt: "Easy Coder" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Easy Coder — Learn coding with ease",
    description: site.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
