"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Wrench,
  Rocket,
  Check,
} from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Commercial Cleaning",
    items: [
      "Janitorial Services",
      "Office Cleaning",
      "Medical Office Cleaning",
      "Recurring Cleaning",
      "Tenant Turnover Cleaning",
    ],
  },
  {
    icon: Droplets,
    title: "Exterior & Pressure Washing",
    anchor: "exterior-maintenance",
    items: [
      "Dumpster Enclosure Cleaning",
      "Concrete Pressure Washing",
      "Sidewalk Cleaning",
      "Parking Lot Cleaning",
      "Building Exterior Washing",
      "Gum Removal",
      "Graffiti Removal",
      "Grease & Cooking Oil Buildup Cleanup",
    ],
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    items: [
      "HOA Common Area Upkeep",
      "Commercial Plaza Service Areas",
      "Trash Area Maintenance",
      "Curb & Perimeter Cleaning",
      "Recurring Maintenance Routes",
      "Monthly/Quarterly Maintenance Packages",
    ],
  },
  {
    icon: Rocket,
    title: "Future Specialty Services",
    items: [
      "Drone-Assisted Exterior Cleaning",
      "High-Access Exterior Maintenance",
      "Solar Panel Cleaning",
      "Exterior Inspection Documentation",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#07090f] py-24">
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What We Handle
          </h2>
          <p className="mt-4 text-gray-400">
            A full scope of cleaning, exterior, and maintenance services for
            the properties that depend on consistent, professional upkeep.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              id={category.anchor}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="rounded-xl border border-white/5 bg-charcoal/50 p-7 transition-all hover:border-accent/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <category.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
