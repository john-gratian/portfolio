import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Human Behavior Specialist in UX Design",
  description:
    "UX Designer with a Masters in Clinical Psychology — applying behavioral science, cognitive psychology, and research-driven insights to create impactful digital experiences.",
  keywords: ["UX Design", "Behavioral Design", "Psychology in UX", "Human Behavior", "Cognitive Psychology", "User Research", "Product Design", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
