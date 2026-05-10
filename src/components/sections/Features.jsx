"use client";

import { Bot, Video, Calendar, Shield, Zap, Users, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Interviews",
    description:
      "Our advanced AI conducts initial screenings, analyzing candidate responses to identify the best talent. Reduce bias and save valuable time with intelligent automation.",
    imageAlt: "AI Interview Interface",
  },
  {
    icon: Video,
    title: "Seamless Video Platform",
    description:
      "Professional HD video interviews with recording capabilities. Conduct interviews anywhere in the world with crystal-clear quality and zero technical issues.",
    imageAlt: "Video Interview Dashboard",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automated scheduling that works around the clock. Our AI finds perfect time slots across all interviewer calendars, sends reminders, and handles time zones.",
    imageAlt: "Scheduling Calendar",
  },
  {
    icon: Shield,
    title: "Secure Proctoring",
    description:
      "Industry-leading online proctoring for coding assessments. AI monitoring, screen recording, and plagiarism detection ensure assessment integrity.",
    imageAlt: "Proctoring Dashboard",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Get started in minutes, not weeks. Our intuitive platform requires no training, with guided workflows and templates for every hiring scenario.",
    imageAlt: "Quick Setup Interface",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Powerful insights into your hiring pipeline. Track metrics, identify bottlenecks, and make data-driven decisions to improve your recruitment strategy.",
    imageAlt: "Analytics Dashboard",
  },
  {
    icon: Users,
    title: "Collaborative Hiring",
    description:
      "Bring your whole team into the process. Share candidate profiles, collect feedback, and make decisions together with built-in collaboration tools.",
    imageAlt: "Team Collaboration",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Hire talent anywhere in the world with multi-language support, currency localization, and compliance with international hiring regulations.",
    imageAlt: "Global Hiring Map",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose InCruiter?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cutting-edge features designed to transform how you hire
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 stagger-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 transition-all group-hover:scale-110 group-hover:bg-indigo-600">
                <feature.icon className="h-8 w-8 text-indigo-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}