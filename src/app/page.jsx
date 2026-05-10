import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import ProductsGrid from "@/components/sections/ProductsGrid";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

/**
 * SEO Implementation:
 * - Single H1 tag in Hero component
 * - Proper heading hierarchy (H2 for sections)
 * - Semantic HTML structure
 * - Descriptive section labels for screen readers
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <ProductsGrid />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}