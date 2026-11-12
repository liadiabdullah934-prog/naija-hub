"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import {
  FiSearch,
  FiUsers,
  FiDollarSign,
  FiShield,
  FiMapPin,
  FiX,
} from "react-icons/fi";

export const Theme = {
  primary: "#2F3E2C",
  secondary: "#D1EDD3",
};

const VENTURE_IDEAS = [
  {
    id: 1,
    title: "POS & Agency Banking Hub",
    category: "Fintech & Services",
    capital: "₦250,000 - ₦600,000",
    location: "Lagos / High Traffic Bus Stops",
    roi: "2 - 4 Months",
    difficulty: "Low",
    description:
      "Providing cash withdrawal, transfer, and bill payment services in high foot-traffic residential or commercial areas.",
    costsBreakdown: [
      { item: "POS Terminal (2 Units)", cost: "₦120,000" },
      { item: "Security Kiosk / Container setup", cost: "₦150,000" },
      { item: "Initial Cash Float", cost: "₦250,000" },
      { item: "Branding & Signage", cost: "₦30,000" },
    ],
    challenges: ["Cash flow liquidity", "Security risks", "Network downtimes"],
    mentorName: "Chidi Nnamdi",
    mentorRole: "Operator of 6 POS Outlets in Surulere",
  },
  {
    id: 2,
    title: "Mini Solar & Inverter Installation",
    category: "Clean Tech & Energy",
    capital: "₦1,200,000 - ₦3,500,000",
    location: "Abuja / Urban Suburbs",
    roi: "6 - 9 Months",
    difficulty: "Medium",
    description:
      "Installing affordable solar backup solutions for remote workers, small shops, and residential apartments.",
    costsBreakdown: [
      { item: "Basic Toolset & Testing Gear", cost: "₦200,000" },
      { item: "Sample Demo Inverter/Batteries", cost: "₦850,000" },
      { item: "CAC Registration & Insurance", cost: "₦80,000" },
      { item: "Local Marketing & Social Ads", cost: "₦70,000" },
    ],
    challenges: [
      "Import dollar rate fluctuations",
      "Managing client expectations",
      "Technician skill gaps",
    ],
    mentorName: "Amina Yusuf",
    mentorRole: "Founder, GreenLight Solutions",
  },
  {
    id: 3,
    title: "Local Logistics & Dispatch Service",
    category: "Transport & Logistics",
    capital: "₦850,000 - ₦2,200,000",
    location: "Port Harcourt / City Center",
    roi: "5 - 8 Months",
    difficulty: "Medium",
    description:
      "Same-day package delivery serving e-commerce vendors, food sellers, and office documents.",
    costsBreakdown: [
      { item: "Used Delivery Motorcycle", cost: "₦650,000" },
      { item: "Rider Uniform & Insulated Box", cost: "₦65,000" },
      { item: "State Licenses & Union Stickers", cost: "₦110,000" },
      { item: "GPS Tracking & Tech Platform", cost: "₦45,000" },
    ],
    challenges: [
      "State transport levies & local union fees",
      "Rider reliability",
      "Bike maintenance",
    ],
    mentorName: "Segun Adebayo",
    mentorRole: "Fleet Manager, QuickRoute Logistics",
  },
  {
    id: 4,
    title: "Commercial Poultry Farming (Broilers)",
    category: "Agriculture",
    capital: "₦1,500,000 - ₦4,000,000",
    location: "Ibadan / Outskirts",
    roi: "3 - 5 Months (Per Batch)",
    difficulty: "Hard",
    description:
      "Raising 500-1000 broiler birds for festive season sales and commercial meat distributors.",
    costsBreakdown: [
      { item: "Pen Construction/Lease", cost: "₦500,000" },
      { item: "500 Day-Old Chicks", cost: "₦350,000" },
      { item: "Feed Supplies (8 Weeks)", cost: "₦1,800,000" },
      { item: "Vaccines & Veterinary Services", cost: "₦120,000" },
    ],
    challenges: [
      "High cost of commercial feed",
      "Mortality risks",
      "Off-taker price negotiations",
    ],
    mentorName: "Dr. Kemi Ogunleye",
    mentorRole: "Agri-preneur & Livestock Specialist",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVenture, setSelectedVenture] = useState<
    (typeof VENTURE_IDEAS)[0] | null
  >(null);

  const [selectedCity, setSelectedCity] = useState("Lagos");
  const [scale, setScale] = useState("Medium");

  const categories = [
    "All",
    "Fintech & Services",
    "Clean Tech & Energy",
    "Transport & Logistics",
    "Agriculture",
  ];

  const handlerSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setSearchQuery(event.target.value);
    } catch (error) {
      console.error("Failed to update search query:", error);
    }
  };

  const filteredVentures = VENTURE_IDEAS.filter((v) => {
    const matchesCategory =
      selectedCategory === "All" || v.category === selectedCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-dvh bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="bg-black/50 bg-gradient-to-t from-slate-950 via-black/35 to-black/40 min-h-dvh flex items-center justify-center">
          <div className="text-white max-w-5xl mx-auto py-24 px-6 flex items-center justify-center flex-col gap-7 text-center">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-slate-950 shadow-md uppercase"
              style={{ backgroundColor: Theme.secondary }}
            >
              🇳🇬 Empowering Next-Gen Nigerian Founders
            </span>

            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight drop-shadow-sm">
              Think Big.{" "}
              <span style={{ color: Theme.secondary }}>Grow Bigger!</span>
            </h1>

            <p className="text-base md:text-xl font-normal leading-relaxed max-w-3xl text-slate-100 drop-shadow-sm">
              Naija Venture Hub connects aspiring entrepreneurs with experienced
              business owners who share practical advice, real-life experiences,
              startup costs, and lessons learned to help you launch with
              confidence in Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="#trending"
                style={{
                  backgroundColor: Theme.secondary,
                  color: Theme.primary,
                }}
                className="font-bold px-8 py-3.5 text-base rounded-full hover:brightness-95 transition-all shadow-lg flex items-center gap-2"
              >
                Explore Blueprints <TiArrowRight className="text-xl" />
              </Link>

              <Link
                href="#estimator"
                className="font-semibold px-8 py-3.5 text-base rounded-full flex items-center gap-2 bg-slate-950/70 border border-white/25 text-white hover:bg-slate-900 transition-all"
              >
                Cost Calculator <TiArrowRight className="text-xl" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/20 w-full mt-8 text-left">
              <div className="p-4 rounded-xl bg-slate-950/65 border border-white/10">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: Theme.secondary }}
                >
                  500+
                </p>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Verified Mentors
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/65 border border-white/10">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: Theme.secondary }}
                >
                  120+
                </p>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Naija Business Models
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/65 border border-white/10">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: Theme.secondary }}
                >
                  ₦150k - ₦10M
                </p>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Capital Guides
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/65 border border-white/10">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: Theme.secondary }}
                >
                  36 States
                </p>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Local Market Insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY NAIJA VENTURE HUB */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: Theme.secondary }}
          >
            Risk Mitigation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-white">
            Avoid Costly Mistakes Before You Spend a Naira
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Starting a business in Nigeria comes with unique operational
            realities—from power fluctuations to local levies. Get real data
            directly from active operators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl"
              style={{
                backgroundColor: Theme.primary,
                color: Theme.secondary,
              }}
            >
              <FiDollarSign />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Itemized Capital Breakdown
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              No hidden costs. Get realistic estimations on CAC registration,
              machinery, shop lease, branding, and initial working capital.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl"
              style={{
                backgroundColor: Theme.primary,
                color: Theme.secondary,
              }}
            >
              <FiShield />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Naija Operational Risks
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Learn how veteran business owners handle local government levies,
              generator fuel expenses, supplier delays, and FX swings.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl"
              style={{
                backgroundColor: Theme.primary,
                color: Theme.secondary,
              }}
            >
              <FiUsers />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Direct Mentor Access
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Connect 1-on-1 with proven founders who have survived the initial
              2-year hurdle in your specific city and industry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TRENDING VENTURES EXPLORER */}
      <section
        id="trending"
        className="py-24 bg-slate-900/50 border-y border-slate-800/80 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: Theme.secondary }}
              >
                Verified Blueprints
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-1 text-white">
                Explore Proven Business Ideas
              </h2>
            </div>

            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                placeholder="Search (e.g., POS, Solar, Poultry)..."
                value={searchQuery}
                onChange={handlerSearch}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-none focus:border-slate-600 transition"
              />
            </div>
          </div>

          {/* Categories Pill Filters */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={
                  selectedCategory === cat
                    ? {
                        backgroundColor: Theme.secondary,
                        color: Theme.primary,
                      }
                    : undefined
                }
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "border-transparent shadow"
                    : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Venture Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredVentures.map((venture) => (
              <div
                key={venture.id}
                className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: Theme.primary,
                        color: Theme.secondary,
                      }}
                    >
                      {venture.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                      <FiMapPin /> {venture.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {venture.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {venture.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 px-4 rounded-xl bg-slate-950 border border-slate-800/80 text-sm mb-6">
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                        Estimated Capital
                      </p>
                      <p className="font-bold text-slate-100 mt-1">
                        {venture.capital}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                        Est. Break-Even
                      </p>
                      <p className="font-bold text-slate-100 mt-1">
                        {venture.roi}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm"
                      style={{
                        backgroundColor: Theme.primary,
                        color: Theme.secondary,
                      }}
                    >
                      {venture.mentorName[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-200">
                        {venture.mentorName}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {venture.mentorRole}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedVenture(venture)}
                    style={{ color: Theme.secondary }}
                    className="text-xs font-bold flex items-center gap-1 hover:underline py-2 px-3 rounded-lg bg-slate-950 border border-slate-800"
                  >
                    Cost Breakdown <TiArrowRight className="text-base" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NIGERIAN STARTUP COST CALCULATOR / PREDICTOR */}
      <section id="estimator" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 text-white border border-slate-800">
          <div className="max-w-3xl">
            <span
              className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full text-slate-950 inline-block mb-4"
              style={{ backgroundColor: Theme.secondary }}
            >
              Interactive Tool
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Quick Startup Cost Estimator
            </h2>
            <p className="text-slate-400 mb-8 text-base leading-relaxed">
              Select your target city and planned operational scale to see
              adjusted baseline capital estimations in Nigeria.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs uppercase text-slate-400 font-bold mb-2 tracking-wider">
                  Target Location
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-slate-600"
                >
                  <option value="Lagos">
                    Lagos (High Overhead / High Demand)
                  </option>
                  <option value="Abuja">
                    Abuja (High Lease / Corporate Clients)
                  </option>
                  <option value="Port Harcourt">
                    Port Harcourt (Medium Overhead)
                  </option>
                  <option value="Ibadan">
                    Ibadan / Tier 2 Cities (Lower Overhead)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-slate-400 font-bold mb-2 tracking-wider">
                  Planned Scale
                </label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-slate-600"
                >
                  <option value="Micro">Micro (Solo Operator / Mobile)</option>
                  <option value="Medium">
                    Medium (Dedicated Shop / 2 Employees)
                  </option>
                  <option value="Commercial">
                    Commercial (Full Outlet / Multi-Staff)
                  </option>
                </select>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Estimated Capital Required
                </p>
                <p
                  className="text-2xl md:text-3xl font-extrabold mt-1"
                  style={{ color: Theme.secondary }}
                >
                  {scale === "Micro"
                    ? "₦350,000 - ₦750,000"
                    : scale === "Medium"
                    ? "₦1,500,000 - ₦3,800,000"
                    : "₦5,500,000 - ₦15,000,000"}
                </p>
                <p className="text-xs text-slate-400 mt-1.5">
                  Includes 15% emergency contingency reserve for power/fuel
                  shifts in {selectedCity}.
                </p>
              </div>

              <Link
                href="#get-started"
                style={{
                  backgroundColor: Theme.secondary,
                  color: Theme.primary,
                }}
                className="px-7 py-3.5 rounded-full font-bold text-sm whitespace-nowrap hover:brightness-95 transition"
              >
                Get Full PDF Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MENTOR CASE STUDY / TESTIMONIALS */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-800/80 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold uppercase tracking-widest mb-2 block"
              style={{ color: Theme.secondary }}
            >
              Founders Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Real Advice From Real Nigerian Entrepreneurs
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Read how mentors navigated real business obstacles across Lagos,
              Ibadan, Port Harcourt, and Abuja.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">
                &ldquo;When I started my logistics business in Ikeja, I lost
                ₦400k in my first 3 months because I didn&apos;t account for
                state-specific motorcycle permits. Naija Venture Hub gives you
                these exact warning signs.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div
                  className="w-11 h-11 rounded-xl font-bold flex items-center justify-center text-sm"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  BA
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Babatunde Adeleke
                  </h4>
                  <p className="text-xs text-slate-400">
                    Logistics Mentor, Lagos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">
                &ldquo;Finding reliable solar component suppliers was my biggest
                hurdle. Having a platform where seniors share trustworthy vendor
                directories saved me millions.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div
                  className="w-11 h-11 rounded-xl font-bold flex items-center justify-center text-sm"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  FJ
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Fatima Jibril
                  </h4>
                  <p className="text-xs text-slate-400">
                    Renewable Energy, Abuja
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">
                &ldquo;As a poultry farmer, feed cost inflation nearly killed my
                business. Learning how to formulate alternative feed mixes from
                my hub mentor turned my farm profitable again.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div
                  className="w-11 h-11 rounded-xl font-bold flex items-center justify-center text-sm"
                  style={{
                    backgroundColor: Theme.primary,
                    color: Theme.secondary,
                  }}
                >
                  EO
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Emeka Okonkwo
                  </h4>
                  <p className="text-xs text-slate-400">
                    Agri-Business Founder, Asaba
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & COMMUNITY JOIN */}
      <section
        id="get-started"
        className="py-24 px-6 text-white text-center border-t border-slate-800"
        style={{ backgroundColor: Theme.primary }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: Theme.secondary }}
          >
            Join The Network
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Launch Your Nigerian Business Safely?
          </h2>
          <p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of aspiring entrepreneurs getting real-time startup
            breakdowns, mentor office hours, and step-by-step launch guides.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-lg hover:brightness-95 transition"
              style={{
                backgroundColor: Theme.secondary,
                color: Theme.primary,
              }}
            >
              Become a Member (Free)
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base border border-white/30 bg-black/20 text-white hover:bg-black/35 transition">
              Apply as a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Naija Venture Hub
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Connecting aspiring Nigerian founders with veteran business
              operators for practical, transparent, and actionable guidance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#trending" className="hover:text-white transition">
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link href="#estimator" className="hover:text-white transition">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="#get-started"
                  className="hover:text-white transition"
                >
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Popular Business Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#trending" className="hover:text-white transition">
                  POS Cash Outlet Guide
                </Link>
              </li>
              <li>
                <Link href="#trending" className="hover:text-white transition">
                  Solar Inverter Setup
                </Link>
              </li>
              <li>
                <Link href="#trending" className="hover:text-white transition">
                  Logistics & Dispatch
                </Link>
              </li>
              <li>
                <Link href="#trending" className="hover:text-white transition">
                  Broiler Poultry Farm
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Get weekly breakdowns of profitable local Nigerian business ideas.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-xs rounded-xl text-white w-full focus:outline-none focus:border-slate-600"
              />
              <button
                className="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap hover:brightness-95 transition"
                style={{
                  backgroundColor: Theme.secondary,
                  color: Theme.primary,
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Naija Venture Hub. Built for Nigerian
          Business Leaders.
        </div>
      </footer>

      {/* MODAL FOR BREAKDOWN DETAILS */}
      {selectedVenture && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedVenture(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <FiX className="text-xl" />
            </button>

            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase"
              style={{
                backgroundColor: Theme.primary,
                color: Theme.secondary,
              }}
            >
              {selectedVenture.category}
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold mt-4 mb-2 text-white">
              {selectedVenture.title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {selectedVenture.description}
            </p>

            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Itemized Capital Breakdown
            </h4>
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-6 space-y-2">
              {selectedVenture.costsBreakdown.map((cost, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm py-2 border-b border-slate-800/80 last:border-none"
                >
                  <span className="text-slate-400">{cost.item}</span>
                  <span className="font-bold text-white">{cost.cost}</span>
                </div>
              ))}
            </div>

            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Common Pitfalls & Risks in Nigeria
            </h4>
            <ul className="space-y-2 mb-8">
              {selectedVenture.challenges.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: Theme.secondary }}
                  />
                  {c}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedVenture(null)}
              className="w-full py-3.5 rounded-xl font-bold text-center text-sm hover:brightness-95 transition"
              style={{
                backgroundColor: Theme.secondary,
                color: Theme.primary,
              }}
            >
              Connect with {selectedVenture.mentorName}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}