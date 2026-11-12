"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiHelpCircle,
  FiChevronDown,
  FiMessageSquare,
} from "react-icons/fi";
import { TiArrowLeft } from "react-icons/ti";

export const Theme = {
  primary: "#2F3E2C",
  secondary: "#D1EDD3",
};

const FAQS = [
  {
    question: "How do I get matched with a verified Nigerian business mentor?",
    answer:
      "Once you create a free member account, select your target industry and state. Our system recommends vetted operators who have run profitable ventures in that exact sector for at least 2 years.",
  },
  {
    question: "How can I apply to become a mentor on Naija Venture Hub?",
    answer:
      "Select 'Mentor Onboarding' in the inquiry form on this page. Our verification team will review your business track record (CAC registration or operational history) within 48 hours.",
  },
  {
    question: "Are the startup cost breakdowns updated for current Naira rates?",
    answer:
      "Yes. Our contributors and sector analysts review equipment, lease, and regulatory costs quarterly across Lagos, Abuja, Port Harcourt, and Ibadan to reflect current FX and inflation realities.",
  },
  {
    question: "Do you offer bespoke feasibility studies or CAC registration help?",
    answer:
      "We connect founders with accredited legal and financial partners for CAC incorporation, SCUML compliance, and custom financial modeling.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Lagos",
    topic: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with your Firebase / Server Action handler)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-dvh bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. HEADER SECTION */}
      <section className="border-b border-slate-800/80 bg-slate-900/40 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition mb-6"
          >
            <TiArrowLeft className="text-lg" /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-4"
              style={{
                backgroundColor: Theme.primary,
                color: Theme.secondary,
              }}
            >
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Let&apos;s Build Your{" "}
              <span style={{ color: Theme.secondary }}>Nigerian Venture</span>{" "}
              Together.
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Have questions about startup blueprints, mentor verification, or
              corporate partnerships? Reach out to our Lagos advisory desk and
              get a response within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Contact Channels & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white">
                Direct Contact Channels
              </h2>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Support & Partnerships
                  </p>
                  <a
                    href="mailto:hello@naijaventurehub.ng"
                    className="text-sm font-semibold text-white hover:underline mt-0.5 block"
                  >
                    hello@naijaventurehub.ng
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    For founder support, press, and mentor applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Advisory Desk (Call / WhatsApp)
                  </p>
                  <a
                    href="tel:+2348000000000"
                    className="text-sm font-semibold text-white hover:underline mt-0.5 block"
                  >
                    +234 (0) 809 555 0192
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Mon – Fri, 9:00 AM – 5:00 PM (WAT)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Lagos Hub Office
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    14 Admiralty Way, Lekki Phase 1
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Response SLA
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Under 24 Business Hours
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Priority routing for verified mentors & members
                  </p>
                </div>
              </div>
            </div>

            {/* Mentor Quick-Apply Card */}
            <div
              className="p-7 rounded-2xl border border-slate-800"
              style={{ backgroundColor: Theme.primary }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <FiMessageSquare
                  className="text-xl"
                  style={{ color: Theme.secondary }}
                />
                <h3 className="font-bold text-white text-lg">
                  Experienced Business Owner?
                </h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed mb-5">
                Share your operational playbook with upcoming founders across
                Nigeria and earn consulting honorariums for 1-on-1 strategy
                sessions.
              </p>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    topic: "Apply as a Mentor",
                  }))
                }
                className="px-5 py-2.5 rounded-full text-xs font-bold hover:brightness-95 transition"
                style={{
                  backgroundColor: Theme.secondary,
                  color: Theme.primary,
                }}
              >
                Select Mentor Inquiry →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto"
                    style={{
                      backgroundColor: Theme.primary,
                      color: Theme.secondary,
                    }}
                  >
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Message Received!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you,{" "}
                    <span className="text-white font-semibold">
                      {formData.fullName}
                    </span>
                    . Our team in Lagos has logged your{" "}
                    <span className="text-white font-semibold">
                      {formData.topic}
                    </span>{" "}
                    request and will reply to{" "}
                    <span className="text-white font-semibold">
                      {formData.email}
                    </span>{" "}
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        city: "Lagos",
                        topic: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-bold border border-slate-700 bg-slate-950 text-white hover:bg-slate-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Send Us a Message
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the details below and we&apos;ll route your
                      request to the right department.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tunde Bakare"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tunde@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        City / State
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-600"
                      >
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja (FCT)">Abuja (FCT)</option>
                        <option value="Port Harcourt">Port Harcourt</option>
                        <option value="Ibadan">Ibadan</option>
                        <option value="Kano">Kano</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Other">Other State / Diaspora</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-600"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Mentor Matching Support">
                        Mentor Matching Support
                      </option>
                      <option value="Apply as a Mentor">
                        Apply as a Mentor
                      </option>
                      <option value="Request a Custom Business Blueprint">
                        Request a Custom Business Blueprint
                      </option>
                      <option value="Corporate / Investor Partnership">
                        Corporate / Investor Partnership
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about the business you're planning to start, your estimated budget, or how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: Theme.secondary,
                      color: Theme.primary,
                    }}
                    className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:brightness-95 transition disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <FiSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold uppercase tracking-widest mb-2 inline-flex items-center gap-1.5"
              style={{ color: Theme.secondary }}
            >
              <FiHelpCircle /> Quick Answers
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/40 transition"
                  >
                    <span className="font-bold text-sm md:text-base text-white pr-4">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}