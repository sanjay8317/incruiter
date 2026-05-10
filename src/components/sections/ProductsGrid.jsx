"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsGrid() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="products-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete Hiring Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to transform your recruitment process from start to finish
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}