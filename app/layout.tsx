import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/chrome";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUMT | Chulalongkorn Management Trainee Club",
  description:
    "Connecting Chulalongkorn students with Management Trainee opportunities, industry leaders, and career-defining experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
