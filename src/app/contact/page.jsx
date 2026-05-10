import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Headphones } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Contact Us - InCruiter | Get in Touch",
  description: "Contact InCruiter for demos, pricing inquiries, or support. We're here to help transform your hiring process.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-indigo-100 md:text-xl">
              Have questions? We&apos;d love to hear from you. Our team is ready to help you transform your hiring process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                <p className="mt-2 text-slate-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <form className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        required
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        required
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="Tell us about your hiring needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                    <p className="mt-1 text-slate-600">For general inquiries and support</p>
                    <a href="mailto:hello@incruiter.com" className="mt-2 block text-indigo-600 hover:text-indigo-700">
                      hello@incruiter.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                    <p className="mt-1 text-slate-600">Mon-Fri, 9am-6pm PST</p>
                    <a href="tel:+1234567890" className="mt-2 block text-indigo-600 hover:text-indigo-700">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </Card>

              <Card padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
                    <MapPin className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Visit Us</h3>
                    <p className="mt-1 text-slate-600">Our headquarters</p>
                    <address className="mt-2 not-italic text-slate-600">
                      548 Market Street, Suite 12345<br />
                      San Francisco, CA 94104
                    </address>
                  </div>
                </div>
              </Card>

              <Card padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <MessageSquare className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Live Chat</h3>
                    <p className="mt-1 text-slate-600">Chat with our team</p>
                    <button className="mt-2 text-indigo-600 hover:text-indigo-700">
                      Start a conversation →
                    </button>
                  </div>
                </div>
              </Card>

              {/* Support Options */}
              <Card className="bg-slate-900" padding="lg">
                <h3 className="text-lg font-semibold text-white">Need Technical Support?</h3>
                <p className="mt-2 text-slate-300">
                  Visit our Help Center for documentation, tutorials, and FAQs.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                    <Clock className="h-4 w-4" />
                    24/7 Support Available
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                    <Headphones className="h-4 w-4" />
                    Dedicated Account Manager
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}