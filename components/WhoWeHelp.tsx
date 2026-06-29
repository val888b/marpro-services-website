"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Property Managers",
    description:
      "Consistent, recurring cleaning and exterior upkeep across your portfolio, with documentation you can hand straight to ownership.",
  },
  {
    icon: Home,
    title: "HOAs & Communities",
    description:
      "Common area upkeep and exterior maintenance that keeps shared spaces presentable and reduces resident complaints.",
  },
  {
    icon: Stethoscope,
    title: "Medical Offices",
    description:
      "Detailed, documented cleaning that meets the higher cleanliness standards patients and staff expect.",
  },
  {
    icon: Store,
    title: "Commercial Plazas",
    description:
      "Service area and exterior maintenance that keeps tenant frontages clean and minimizes tenant complaints.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food-Service Properties",
    description:
      "Grease and cooking-oil buildup cleanup, dumpster enclosure cleaning, and service area maintenance built for high-traffic kitchens.",
  },
  {
    icon: Briefcase,
    title: "Offices & Facilities",
    description:
      "Recurring office cleaning and facility upkeep that keeps your space presentable for clients, staff, and visitors.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who We Help
          </h2>
          <p className="mt-4 text-gray-400">
            Built around the specific pain points each type of property
            actually deals with.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="rounded-xl border border-white/5 bg-[#07090f]/60 p-6 transition-all hover:border-accent/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <audience.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-white">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
