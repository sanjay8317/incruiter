"use client";

import { faqs } from "@/data/faq";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about InCruiter
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 rounded-xl bg-white p-4 shadow-lg shadow-slate-200/50 md:p-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}