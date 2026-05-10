"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join hundreds of companies transforming their hiring with InCruiter
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 stagger-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full" padding="lg">
              <Quote className="h-8 w-8 text-indigo-200" />
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}