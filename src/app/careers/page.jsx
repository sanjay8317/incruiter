import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Shield, Globe, Coffee } from "lucide-react";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "Careers - InCruiter | Join Our Team",
  description: "Join InCruiter and help transform the hiring industry. We're looking for talented individuals passionate about AI and recruitment.",
};

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO.",
  },
  {
    icon: Globe,
    title: "Growth Opportunities",
    description: "Regular learning sessions, conference attendance, and career development.",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Team events, wellness programs, and a collaborative environment.",
  },
];

const positions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Sales",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg text-indigo-100 md:text-xl">
              Help us transform the way companies hire. We&apos;re looking for passionate people who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Join InCruiter?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer competitive benefits and a culture that puts people first
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center" padding="lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                  <benefit.icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find your next opportunity and help us build the future of hiring
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="mb-4" padding="md">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{position.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-600 hover:text-indigo-600"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Culture
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  At InCruiter, we believe that great work happens when people are happy, motivated, and supported. We&apos;ve built a culture that values:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span><strong className="text-slate-900">Transparency</strong> — Open communication and honest feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span><strong className="text-slate-900">Innovation</strong> — Encouraging creative thinking and experimentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span><strong className="text-slate-900">Inclusion</strong> — Building a diverse team where everyone belongs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span><strong className="text-slate-900">Balance</strong> — Supporting work-life harmony</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 p-6 text-center">
                  <div className="text-4xl font-bold text-indigo-600">4.8/5</div>
                  <div className="mt-1 text-sm text-slate-600">Glassdoor Rating</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600">95%</div>
                  <div className="mt-1 text-sm text-slate-600">Employee Retention</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-6 text-center">
                  <div className="text-4xl font-bold text-amber-600">50+</div>
                  <div className="mt-1 text-sm text-slate-600">Team Members</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 p-6 text-center">
                  <div className="text-4xl font-bold text-rose-600">4+</div>
                  <div className="mt-1 text-sm text-slate-600">Years Strong</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Make an Impact?"
        subtitle="Join a team that's changing the future of hiring. Apply today and help us transform how companies find talent."
      />
    </>
  );
}