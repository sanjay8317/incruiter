import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, Building, Globe } from "lucide-react";
import Card from "@/components/ui/Card";
import { faqs } from "@/data/faq";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "Pricing - InCruiter | Flexible Plans for Every Team",
  description: "Choose the perfect plan for your hiring needs. Flexible pricing with no hidden fees. Start your free trial today.",
};

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small teams getting started with AI-powered hiring",
    icon: Sparkles,
    features: [
      "Up to 10 users",
      "50 interviews/month",
      "Video interviews",
      "Basic scheduling",
      "Email support",
    ],
    notIncluded: [
      "AI-powered screening",
      "Proctoring",
      "Analytics dashboard",
      "API access",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "999",
    description: "For growing companies ready to transform their hiring process",
    icon: Building,
    features: [
      "Up to 50 users",
      "200 interviews/month",
      "Video interviews",
      "AI-powered screening",
      "Advanced scheduling",
      "Proctoring",
      "Analytics dashboard",
      "Priority support",
    ],
    notIncluded: [
      "API access",
      "Custom branding",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing custom solutions and support",
    icon: Globe,
    features: [
      "Unlimited users",
      "Unlimited interviews",
      "All features included",
      "AI-powered screening",
      "Advanced proctoring",
      "Custom integrations",
      "Custom branding",
      "Dedicated account manager",
      "24/7 priority support",
      "SLA guarantee",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparison = [
  { feature: "Video Interviews", starter: true, professional: true, enterprise: true },
  { feature: "AI-Powered Screening", starter: false, professional: true, enterprise: true },
  { feature: "Automated Scheduling", starter: "Basic", professional: "Advanced", enterprise: "Full" },
  { feature: "Proctoring", starter: false, professional: true, enterprise: true },
  { feature: "Analytics Dashboard", starter: false, professional: true, enterprise: true },
  { feature: "API Access", starter: false, professional: false, enterprise: true },
  { feature: "Custom Branding", starter: false, professional: false, enterprise: true },
  { feature: "SSO/SAML", starter: false, professional: false, enterprise: true },
  { feature: "Dedicated Support", starter: false, professional: "Priority", enterprise: "24/7" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-indigo-100 md:text-xl">
              Choose the plan that fits your hiring needs. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-indigo-600" : ""}`}
                padding="lg"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                    <plan.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-slate-600">/month</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
                      : "border-2 border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600"
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-slate-900">What&apos;s included:</p>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <X className="h-5 w-5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Compare Plans
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See exactly what&apos;s included in each plan
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">Starter</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">Professional</th>
                  <th className="pb-4 text-center font-semibold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 text-slate-600">{row.feature}</td>
                    <td className="py-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="mx-auto h-5 w-5 text-emerald-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-slate-300" />
                        )
                      ) : (
                        <span className="text-sm text-slate-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {typeof row.professional === "boolean" ? (
                        row.professional ? (
                          <Check className="mx-auto h-5 w-5 text-emerald-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-slate-300" />
                        )
                      ) : (
                        <span className="text-sm text-slate-600">{row.professional}</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="mx-auto h-5 w-5 text-emerald-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-slate-300" />
                        )
                      ) : (
                        <span className="text-sm text-slate-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Have questions about pricing? We have answers.
            </p>
          </div>
          <div className="mt-12 rounded-xl bg-slate-50 p-4 shadow-lg md:p-8">
            <Accordion items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Start your 14-day free trial today. No credit card required."
      />
    </>
  );
}