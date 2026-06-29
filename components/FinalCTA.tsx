"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#07090f] py-24">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Keep Your Property Clean, Presentable, and Ready for Daily Use
        </h2>
        <p className="mt-4 text-gray-400">
          Request a proposal or call MarPro Services to talk through your
          property&apos;s cleaning and maintenance needs.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light"
          >
            Request a Proposal
            <ArrowRight size={16} />
          </a>
          <a
            href="tel:+14084276327"
            className="flex items-center gap-2 rounded-md border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all hover:border-white/30 hover:bg-white/5"
          >
            <Phone size={16} />
            Call MarPro Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
