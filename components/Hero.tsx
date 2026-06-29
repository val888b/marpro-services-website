"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ListChecks,
  MapPin,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Droplets,
  Building2,
  ClipboardCheck,
} from "lucide-react";

const badges = [
  { icon: MapPin, label: "Bay Area Local" },
  { icon: ShieldCheck, label: "Commercial-Focused" },
  { icon: FileCheck, label: "Documented Service" },
];

const dashboardServices = [
  { icon: Sparkles, label: "Commercial Cleaning", detail: "Janitorial & office service" },
  { icon: Droplets, label: "Exterior & Pressure Washing", detail: "Concrete, dumpsters, walkways" },
  { icon: Building2, label: "Property Maintenance", detail: "HOAs, plazas, common areas" },
  { icon: ClipboardCheck, label: "Service Documentation", detail: "Before & after photo records" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#07090f] pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute left-1/3 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300"
          >
            <MapPin size={13} className="text-accent" />
            Serving San Jose, Milpitas &amp; the Bay Area
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Commercial Property Maintenance
            <span className="block text-accent">Without Compromise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-balance mt-6 max-w-xl text-lg text-gray-400"
          >
            Professional cleaning, pressure washing, janitorial, and exterior
            maintenance services for commercial properties, HOAs, medical
            offices, plazas, and facility managers throughout the Bay Area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300"
              >
                <badge.icon size={14} className="text-accent" />
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light"
            >
              Request a Proposal
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all hover:border-white/30 hover:bg-white/5"
            >
              <ListChecks size={16} />
              View Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />

          <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-6 shadow-glow backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Service Overview
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Active Coverage Areas
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-light">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                Bay Area
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {dashboardServices.map((service, i) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-colors hover:border-accent/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                    <service.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {service.label}
                    </p>
                    <p className="text-xs text-gray-500">{service.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3.5">
              <p className="text-xs text-gray-500">Documentation on every visit</p>
              <p className="text-sm font-semibold text-accent-light">100%</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -left-6 -top-14 hidden rounded-xl border border-white/10 bg-charcoal/90 px-4 py-3 shadow-glow backdrop-blur-sm sm:block"
          >
            <p className="text-[11px] uppercase tracking-wide text-gray-500">
              Response Time
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">Fast & Reliable</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
