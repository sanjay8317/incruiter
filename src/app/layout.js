import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/ui/JsonLd";
import { ThemeProvider } from "@/context/ThemeContext";
import ReduxProvider from "@/lib/redux/ReduxProvider";
import UTMHandler from "@/components/UTMHandler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * SEO Implementation:
 * - Default metadata for all pages
 * - Open Graph tags for social sharing
 * - Robots meta for search engine indexing
 * - JSON-LD structured data for Organization and Website
 */
export const metadata = {
  title: "InCruiter - AI Powered Hiring Platform",
  description: "AI-powered interview and hiring solutions for modern recruitment teams. Streamline recruitment with AI interviews, video platform, scheduling, and proctoring.",
  keywords: ["AI Hiring", "Interview Platform", "Video Interview", "Interview as a Service", "AI Recruiter", "Online Proctoring"],
  authors: [{ name: "InCruiter" }],
  openGraph: {
    title: "InCruiter - AI Powered Hiring Platform",
    description: "AI-powered interview and hiring solutions for modern recruitment teams.",
    type: "website",
    locale: "en_US",
    siteName: "InCruiter",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Viewport configuration for responsive design
 * - Ensures proper scaling on mobile devices
 */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ReduxProvider>
          <ThemeProvider>
            <UTMHandler />
            <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}