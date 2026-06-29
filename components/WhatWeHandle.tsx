"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Stethoscope,
  Repeat,
  ArrowRightLeft,
  Trash2,
  Layers,
  MapPin,
  Building2,
  Droplets,
  Eraser,
  SprayCan,
  Flame,
  Home,
  Store,
  MapPinned,
  CalendarClock,
  Plane,
  ArrowUpToLine,
  Sun,
  FileSearch,
} from "lucide-react";

const categories = [
  {
    key: "cleaning",
    title: "Commercial Cleaning",
    description:
      "Recurring janitorial and cleaning service for the spaces your tenants, patients, and visitors see every day.",
    items: [
      { icon: Briefcase, name: "Janitorial Services" },
      { icon: Building, name: "Office Cleaning" },
      { icon: Stethoscope, name: "Medical Office Cleaning" },
      { icon: Repeat, name: "Recurring Cleaning" },
      { icon: ArrowRightLeft, name: "Tenant Turnover Cleaning" },
    ],
  },
  {
    key: "exterior",
    title: "Exterior & Pressure Washing",
    description:
      "Exterior surfaces take the most visible wear on a commercial property. We keep walkways, parking areas, and building surfaces looking sharp year-round.",
    items: [
      { icon: Trash2, name: "Dumpster Enclosure Cleaning" },
      { icon: Layers, name: "Concrete Pressure Washing" },
      { icon: MapPin, name: "Sidewalk Cleaning" },
      { icon: Building2, name: "Parking Lot Cleaning" },
      { icon: Droplets, name: "Building Exterior Washing" },
      { icon: Eraser, name: "Gum Removal" },
      { icon: SprayCan, name: "Graffiti Removal" },
      { icon: Flame, name: "Grease & Cooking Oil Buildup Cleanup" },
    ],
  },
  {
    key: "maintenance",
    title: "Property Maintenance",
    description:
      "Scheduled upkeep that keeps common areas and service zones consistently maintained without manual follow-up.",
    items: [
      { icon: Home, name: "HOA Common Area Upkeep" },
      { icon: Store, name: "Commercial Plaza Service Areas" },
      { icon: Trash2, name: "Trash Area Maintenance" },
      { icon: MapPinned, name: "Curb & Perimeter Cleaning" },
      { icon: Repeat, name: "Recurring Maintenance Routes" },
      { icon: CalendarClock, name: "Monthly/Quarterly Maintenance Packages" },
    ],
  },
  {
    key: "future",
    title: "Future Specialty Services",
    description:
      "Specialty capabilities on our roadmap for hard-to-reach and high-access exterior work as MarPro grows.",
    items: [
      { icon: Plane, name: "Drone-Assisted Exterior Cleaning" },
      { icon: ArrowUpToLine, name: "High-Access Exterior Maintenance" },
      { icon: Sun, name: "Solar Panel Cleaning" },
      { icon: FileSearch, name: "Exterior Inspection Documentation" },
    ],
  },
];

export function WhatWeHandle() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#07090f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What We Handle
          </h2>
          <p className="mt-4 text-gray-400">
            A full scope of cleaning and maintenance services for the
            properties that depend on consistent, professional upkeep.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {categories.map((category, ci) => {
            const isExterior = category.key === "exterior";
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
              >
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
                      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-charcoal/50 p-5 transition-all hover:border-accent/30 hover:bg-charcoal/80"
                    >
                      <div className="inline-flex shrink-0 rounded-lg bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent/20">
                        <item.icon size={18} />
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );

            return isExterior ? (
              <div key={category.key} id="exterior-maintenance" className="scroll-mt-24">
                {content}
              </div>
            ) : (
              <div key={category.key}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
