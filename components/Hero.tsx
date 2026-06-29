"use client";

import { motion } from "framer-motion";
import { ArrowRight, ListChecks, MapPin, ShieldCheck, FileCheck } from "lucide-react";
import { Logo } from "./Logo";

const badges = [
  { icon: MapPin, label: "Bay Area Local" },
  { icon: ShieldCheck, label: "Commercial-Focused" },
  { icon: FileCheck, label: "Documented Service" },
];

const floatingCards = [
  { label: "Service Areas", value: "San Jose · Milpitas" },
  { label: "Documentation", value: "Before & After Photos" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#07090f] pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      {/* Floating layered badge cards (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-[6%] top-40 hidden w-48 rounded-xl border border-white/10 bg-charcoal/70 p-4 shadow-glow backdrop-blur-sm lg:block"
      >
        <p className="text-[11px] uppercase tracking-wide text-gray-500">
          {floatingCards[0].label}
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          {floatingCards[0].value}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute right-[6%] top-64 hidden w-52 rounded-xl border border-white/10 bg-charcoal/70 p-4 shadow-glow backdrop-blur-sm lg:block"
      >
        <p className="text-[11px] uppercase tracking-wide text-gray-500">
          {floatingCards[1].label}
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          {floatingCards[1].value}
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <Logo variant="mark" className="h-10" />
          <span className="text-base font-semibold text-white">
            MarPro <span className="text-accent">Services</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Commercial Property Maintenance
          <span className="block text-accent">Without Compromise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-gray-400"
        >
          Professional cleaning, pressure washing, janitorial, and exterior
          maintenance services for commercial properties, HOAs, medical
          offices, plazas, and facility managers throughout the Bay Area.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
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
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light"
          >
            Request a Proposal
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all hover:border-white/30 hover:bg-white/5"
          >
            <ListChecks size={16} />
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
