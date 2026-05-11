/**
 * Performance Optimization:
 * - Enable image optimization
 * - Configure external image domains if needed
 * - Enable React strict mode for better development experience
 */
const nextConfig = {
  reactStrictMode: true,

  /**
   * ✅ Disable Next.js dev indicator (the "N" logo)
   */
  devIndicators: {
    buildActivity: false,
  },

  /**
   * SEO & Performance:
   * - Powered by header for security (optional)
   * - trailingSlash: false for cleaner URLs
   */
  poweredByHeader: false,

  /**
   * Image optimization configuration
   * - Enable modern image formats
   * - Configure device sizes for responsive images
   */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;