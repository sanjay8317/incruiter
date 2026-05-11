"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/testimonials";

function AnimatedCounter({ value, label }) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value.includes("/")
    ? `${count.toFixed(1)}/5`
    : value.includes("%")
    ? `${Math.round(count)}%`
    : value.includes("+")
    ? `${Math.round(count)}+`
    : Math.round(count);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {displayValue}
      </div>
      <div className="mt-2 text-sm font-medium text-indigo-200 md:text-base">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats-section"
      className="bg-slate-900 py-16 md:py-24"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}