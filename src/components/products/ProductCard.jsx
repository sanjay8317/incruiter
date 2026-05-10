"use client";

import Link from "next/link";
import {
  Headphones,
  Bot,
  Video,
  Calendar,
  Shield,
  Search,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/ui/Card";

const iconMap = {
  HeadphonesIcon: Headphones,
  BotIcon: Bot,
  VideoIcon: Video,
  CalendarIcon: Calendar,
  ShieldIcon: Shield,
  SearchIcon: Search,
};

export default function ProductCard({ product }) {
  const Icon = iconMap[product.icon] || Search;

  return (
    <Card className="group relative h-full" padding="lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 transition-colors group-hover:bg-indigo-600">
        <Icon className="h-6 w-6 text-indigo-600 transition-colors group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-slate-600">{product.shortDescription}</p>
      <Link
        href={`/products#${product.id}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700"
      >
        {product.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}