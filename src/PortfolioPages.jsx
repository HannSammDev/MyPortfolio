import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Rocket,
  Building2,
  Users,
  LayoutTemplate,
  Globe,
  ShoppingCart,
  Check,
  Zap,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  ChevronRight,
} from "lucide-react";

// ─── GEOLOCATION PAGE ───────────────────────────────────────────────────────
export const GeoPage =() => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-teal-50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full mb-4">
              <MapPin size={12} /> Cebu City, Philippines
            </span>
            <h1 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
              Business consulting in Cebu City
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Expert local business advisory services for Cebu-based companies.
              We understand the Visayas market like no one else.
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400 mb-1">Serving</p>
            <p className="text-sm font-medium text-gray-800">
              Cebu City · Mandaue · Lapu-Lapu
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Get a free consultation
          </button>
          <button className="border border-gray-300 hover:bg-white text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            View local case studies
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Local clients served", value: "240+" },
          { label: "Years in Cebu", value: "8" },
          { label: "Avg. response time", value: "2 hrs" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Why local */}
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
          Why local matters
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center">
                <Building2 size={16} className="text-teal-700" />
              </div>
              <p className="font-medium text-sm">On-the-ground presence</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our team is based in Cebu — available for in-person meetings
              across the metro area.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <Users size={16} className="text-blue-700" />
              </div>
              <p className="font-medium text-sm">Local network</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Deep connections with Cebu Chamber of Commerce, BPO sector, and
              local government units.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="border border-gray-100 rounded-xl p-5 space-y-4">
        <p className="text-sm font-medium">What our Cebu clients say</p>
        {[
          {
            quote: "Best local consultancy in the metro. They know Cebu inside out.",
            author: "Maria S., IT-BPM company, Cebu City",
          },
          {
            quote: "Helped us navigate the Cebu market expansion within 3 months.",
            author: "Rodel M., F&B startup, Mandaue",
          },
        ].map((t) => (
          <div
            key={t.author}
            className="border-l-2 border-gray-200 pl-4"
          >
            <p className="text-sm text-gray-500 leading-relaxed">
              "{t.quote}"
            </p>
            <p className="text-xs text-gray-400 mt-1">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SERVICE PAGE ────────────────────────────────────────────────────────────
function ServicePage() {
  const services = [
    {
      icon: <LayoutTemplate size={22} className="text-blue-600" />,
      title: "Landing pages",
      desc: "High-converting single pages built to capture leads and drive action.",
      price: "From ₱15,000",
      popular: false,
    },
    {
      icon: <Globe size={22} className="text-blue-600" />,
      title: "Business websites",
      desc: "5–10 page websites with CMS, contact forms, and mobile-first design.",
      price: "From ₱35,000",
      popular: true,
    },
    {
      icon: <ShoppingCart size={22} className="text-blue-600" />,
      title: "E-commerce stores",
      desc: "Full online shop with product management, payments, and order tracking.",
      price: "From ₱60,000",
      popular: false,
    },
  ];

  const features = [
    "Mobile-responsive design",
    "On-page SEO setup",
    "Google Analytics integration",
    "30-day post-launch support",
    "SSL certificate & hosting setup",
    "Speed & performance optimization",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mb-4">
          <Briefcase size={12} /> Web development
        </span>
        <h1 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
          Custom website design & development
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
          From single-page sites to full e-commerce platforms — built fast,
          optimized for search, and designed to convert.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`rounded-xl p-5 border flex flex-col ${
              s.popular
                ? "border-blue-300 border-2"
                : "border-gray-100"
            }`}
          >
            {s.popular && (
              <span className="self-start text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-3">
                Most popular
              </span>
            )}
            <div className="mb-3">{s.icon}</div>
            <p className="font-medium text-sm mb-2">{s.title}</p>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">
              {s.desc}
            </p>
            <hr className="my-4 border-gray-100" />
            <p className="text-sm font-medium text-blue-600">{s.price}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="border border-gray-100 rounded-xl p-5">
        <p className="text-sm font-medium mb-4">What's always included</p>
        <div className="grid md:grid-cols-2 gap-y-2 gap-x-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={14} className="text-teal-600 shrink-0" />
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          Request a quote
        </button>
        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          See our work
        </button>
      </div>
    </div>
  );
}

// ─── LANDING PAGE ────────────────────────────────────────────────────────────
function LandingPage() {
  const steps = [
    {
      num: "1",
      title: "Book a free discovery call",
      desc: "We learn about your business, goals, and target audience.",
    },
    {
      num: "2",
      title: "We design & build",
      desc: "Custom design + development begins. You approve the mockup first.",
    },
    {
      num: "3",
      title: "Launch day 🎉",
      desc: "Your site goes live. We handle hosting, domain, and SEO setup.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-amber-50 rounded-2xl p-8 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full mb-5">
          <Zap size={12} /> Limited slots — June 2026
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
          Get a professional website
          <br />
          in 5 business days
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
          No templates. No drag-and-drop. A custom-coded site that's fast,
          SEO-ready, and built to grow your business.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-7 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
          Claim my spot <ArrowRight size={16} />
        </button>
        <p className="text-xs text-gray-400 mt-3">
          No credit card required · Free discovery call
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { value: "5 days", label: "Average delivery" },
          { value: "98%", label: "Client satisfaction" },
          { value: "120+", label: "Sites launched" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-2xl font-semibold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <hr className="border-gray-100" />

      {/* How it works */}
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-5">
          How it works
        </p>
        <div className="space-y-5">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-xs font-semibold text-blue-700 shrink-0 mt-0.5">
                {s.num}
              </div>
              <div>
                <p className="font-medium text-sm">{s.title}</p>
                <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          "My new site started ranking on Google within 2 weeks. Incredible
          value and super fast turnaround."
        </p>
        <p className="text-xs text-gray-400 mt-2">
          — Ana R., e-commerce store owner
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-7 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
          Get started today <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("geo");

  const tabs = [
    { id: "geo", label: "Geolocation page", icon: <MapPin size={14} /> },
    { id: "svc", label: "Service page", icon: <Briefcase size={14} /> },
    { id: "lp", label: "Landing page", icon: <Rocket size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Page header */}
        <div className="mb-8">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
            Portfolio showcase
          </p>
          <h1 className="text-2xl font-semibold text-gray-900">
            Page type demos
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-100 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                active === t.id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Page content */}
        {active === "geo" && <GeoPage />}
        {active === "svc" && <ServicePage />}
        {active === "lp" && <LandingPage />}
      </div>
    </div>
  );
}
