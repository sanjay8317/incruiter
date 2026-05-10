import Link from "next/link";
import { ArrowRight, Check, Headphones, Bot, Video, Calendar, Shield, Search, Zap } from "lucide-react";
import { products } from "@/data/products";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "Products - InCruiter | Complete Hiring Solutions",
  description: "Explore InCruiter's suite of AI-powered hiring products including IncServe, IncBot, IncVid, IncFeed, IncProctor, and IncScreen.",
};

const iconMap = {
  HeadphonesIcon: Headphones,
  BotIcon: Bot,
  VideoIcon: Video,
  CalendarIcon: Calendar,
  ShieldIcon: Shield,
  SearchIcon: Search,
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-indigo-100 md:text-xl">
              Comprehensive AI-powered hiring solutions designed to transform every aspect of your recruitment process
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {products.map((product, index) => {
              const Icon = iconMap[product.icon] || Search;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                      <Icon className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                      {product.fullDescription}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                      >
                        Request Demo <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Preview Card */}
                  <Card className={isEven ? "lg:ml-auto" : "lg:mr-auto"} padding="lg">
                    <div className="rounded-lg bg-slate-50 p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                            <Zap className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <div className="h-4 w-32 rounded bg-slate-200"></div>
                            <div className="mt-1 h-3 w-24 rounded bg-slate-100"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                            <Check className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <div className="h-4 w-28 rounded bg-slate-200"></div>
                            <div className="mt-1 h-3 w-20 rounded bg-slate-100"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                            <Zap className="h-5 w-5 text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <div className="h-4 w-36 rounded bg-slate-200"></div>
                            <div className="mt-1 h-3 w-28 rounded bg-slate-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Compare Products
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find the perfect solution for your hiring needs
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">IncServe</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">IncBot</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">IncVid</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">IncProctor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 text-slate-600">AI-Powered Screening</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Video Interviews</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center">-</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Automated Scheduling</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Proctoring</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Analytics Dashboard</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-emerald-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}