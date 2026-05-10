"use client";

import { companies } from "@/data/products";

export default function TrustedCompanies() {
  return (
    <section className="bg-slate-50 py-12 md:py-16" aria-labelledby="trusted-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p id="trusted-heading" className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider">
          Trusted by leading companies worldwide
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-bold text-slate-600 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-600">
                {company.logo}
              </div>
              <span className="text-lg font-semibold text-slate-700">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}