/**
 * JSON-LD Structured Data Component
 * Adds Organization schema for SEO
 */

export function OrganizationSchema({
  name = "InCruiter",
  url = "https://incruiter-liard.vercel.app",
  logo = "https://incruiter-liard.vercel.app/logo.png",
  description = "AI-powered interview and hiring solutions for modern recruitment teams.",
  email = "hello@incruiter.com",
  telephone = "+1 (234) 567-890",
  address = {
    streetAddress: "548 Market Street, Suite 12345",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94104",
    addressCountry: "US",
  },
  sameAs = [],
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    email,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    sameAs,
    areaServed: "Worldwide",
    serviceType: "AI-Powered Hiring Platform",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema for search engines
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InCruiter",
    url: "https://incruiter-liard.vercel.app",
    
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://incruiter-liard.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * SoftwareApplication Schema for product pages
 */
export function SoftwareApplicationSchema({
  name,
  description,
  price,
  priceCurrency = "USD",
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}