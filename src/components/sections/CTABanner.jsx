"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title = "Ready to Transform Your Hiring?",
  subtitle = "Join 500+ companies already using InCruiter to find better talent, faster.",
}) {
  return (
    <section
      className="hero-gradient relative overflow-hidden py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-600 transition-all hover:bg-indigo-50 hover:shadow-xl hover:shadow-white/20"
            >
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}