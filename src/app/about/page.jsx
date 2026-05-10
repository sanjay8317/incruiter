import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Users, Zap, Shield } from "lucide-react";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "About Us - InCruiter | AI Powered Hiring Platform",
  description: "Learn about InCruiter's mission to transform hiring through AI-powered interviews, video platform, and smart recruitment solutions.",
};

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We believe in making hiring fair, efficient, and data-driven for every organization.",
  },
  {
    icon: Eye,
    title: "Innovation First",
    description: "We continuously push the boundaries of what's possible with AI in recruitment.",
  },
  {
    icon: Heart,
    title: "Candidate Focus",
    description: "Every candidate deserves a fair chance. We reduce bias and improve experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we build and deliver.",
  },
];

const team = [
  { name: "Sarah Chen", title: "CEO & Co-founder", initials: "SC" },
  { name: "Michael Roberts", title: "CTO & Co-founder", initials: "MR" },
  { name: "Emily Johnson", title: "Chief Product Officer", initials: "EJ" },
  { name: "David Kim", title: "VP of Engineering", initials: "DK" },
  { name: "Lisa Wang", title: "Head of AI Research", initials: "LW" },
  { name: "James Miller", title: "VP of Sales", initials: "JM" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              About InCruiter
            </h1>
            <p className="mt-6 text-lg text-indigo-100 md:text-xl">
              We&apos;re on a mission to transform how companies hire talent by leveraging the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-indigo-50 to-violet-50" padding="lg">
              <Target className="h-10 w-10 text-indigo-600" />
              <h2 className="mt-4 text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To democratize access to world-class hiring by providing every organization with AI-powered tools that were previously available only to the largest enterprises. We believe that finding great talent shouldn&apos;t be a privilege—it should be the standard.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50" padding="lg">
              <Eye className="h-10 w-10 text-emerald-600" />
              <h2 className="mt-4 text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A world where every hire is a great hire. We envision a future where AI eliminates bias, streamlines recruitment, and helps companies find the perfect match for every role—faster, fairer, and better than ever before.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  InCruiter was founded in 2020 by a team of HR professionals and AI researchers who saw firsthand the challenges in modern hiring. After spending years in talent acquisition, they recognized that the hiring process was broken—biased, inefficient, and often unfair.
                </p>
                <p>
                  They set out to fix it. By combining deep expertise in artificial intelligence with a genuine understanding of what recruiters and hiring managers need, they built InCruiter from the ground up.
                </p>
                <p>
                  Today, we serve over 500 enterprise clients and have conducted more than 10,000 AI-powered interviews. But we&apos;re just getting started. Every day, we work to make hiring better, fairer, and more efficient for organizations of all sizes.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600">2020</div>
                  <div className="mt-1 text-sm text-slate-600">Founded</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="mt-1 text-sm text-slate-600">Enterprise Clients</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600">10,000+</div>
                  <div className="mt-1 text-sm text-slate-600">Interviews</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600">50%</div>
                  <div className="mt-1 text-sm text-slate-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center" padding="lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                  <value.icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The team behind InCruiter&apos;s mission
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="text-center" padding="lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}