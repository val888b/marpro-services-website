"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Sidewalk Pressure Washing",
  "Parking Lot Cleaning",
  "Building Exterior Washing",
  "Soft Washing",
  "Gum Removal",
  "Graffiti Removal",
  "Oil & Grease Stain Treatment",
  "Solar Panel Cleaning",
  "Drone-Assisted Exterior Cleaning",
  "High-Access Exterior Maintenance",
  "Recurring Property Maintenance",
];

export function PressureWashing() {
  return (
    <section
      id="pressure-washing"
      className="relative overflow-hidden border-y border-white/5 bg-charcoal/30 py-24"
    >
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pressure Washing & Exterior Maintenance
          </h2>
          <p className="mt-5 text-gray-400">
            Exterior surfaces take the most visible wear on a commercial
            property. Our pressure washing and exterior maintenance services
            keep walkways, parking areas, and building surfaces looking sharp
            and well-maintained year-round — including hard-to-reach areas
            with drone-assisted and high-access equipment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#07090f]/60 px-4 py-3"
            >
              <Check size={16} className="shrink-0 text-accent" />
              <span className="text-sm text-gray-200">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
