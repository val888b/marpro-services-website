"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MessageCircle,
  FileText,
  Repeat,
  Camera,
  Zap,
  PackageCheck,
  MapPinned,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Commercial-Focused Service",
    description:
      "We work exclusively with commercial properties, HOAs, and facility teams — not residential one-offs.",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    description:
      "Property managers get clear, consistent updates from first contact through completed service.",
  },
  {
    icon: FileText,
    title: "Professional Documentation",
    description:
      "Every job is documented so you have a clear record for ownership, tenants, and compliance.",
  },
  {
    icon: Repeat,
    title: "Recurring Maintenance Support",
    description:
      "Scheduled service plans keep properties consistently maintained without manual follow-up.",
  },
  {
    icon: Camera,
    title: "Before-and-After Photo Records",
    description:
      "Visual documentation of every job gives you proof of work and condition over time.",
  },
  {
    icon: Zap,
    title: "Fast Response for Property Managers",
    description:
      "Quick turnaround on quotes and scheduling so issues get resolved without delay.",
  },
  {
    icon: PackageCheck,
    title: "Proper Equipment and Supplies",
    description:
      "Commercial-grade equipment and supplies suited to the surface and the job, every time.",
  },
  {
    icon: MapPinned,
    title: "Bay Area Service Experience",
    description:
      "Local knowledge of San Jose, Milpitas, and surrounding commercial properties.",
  },
];

export function WhyMarPro() {
  return (
    <section id="why-marpro" className="bg-[#07090f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Property Managers Choose MarPro
          </h2>
          <p className="mt-4 text-gray-400">
            Built around the standards commercial properties actually need.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="rounded-xl border border-white/5 bg-charcoal/50 p-6"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <reason.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
