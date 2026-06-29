"use client";

import { motion } from "framer-motion";
import {
  Camera,
  FileText,
  Receipt,
  NotebookPen,
  History,
} from "lucide-react";

const documentation = [
  {
    icon: Camera,
    title: "Before-and-After Records",
    description: "Photo documentation comparing condition before and after every service.",
  },
  {
    icon: FileText,
    title: "Service Completion Photos",
    description: "Visual confirmation that each job was completed to scope.",
  },
  {
    icon: Receipt,
    title: "Invoice Documentation",
    description: "Clear, itemized records for ownership, accounting, and tenants.",
  },
  {
    icon: NotebookPen,
    title: "Site Notes",
    description: "Notes on property conditions, issues found, and follow-up needed.",
  },
  {
    icon: History,
    title: "Maintenance History",
    description: "A running record of service dates and work performed over time.",
  },
];

export function Gallery() {
  return (
    <section id="work" className="bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Work & Documentation
          </h2>
          <p className="mt-4 text-gray-400">
            Every job at MarPro is backed by documentation property managers
            can rely on. Project photos and case studies will be added here
            as MarPro grows.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documentation.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#07090f]/60 p-8 text-center transition-all hover:border-accent/30"
            >
              <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
                <item.icon size={24} />
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-xs text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Project photos and detailed case studies are being added as new jobs
          are completed across the Bay Area.
        </p>
      </div>
    </section>
  );
}
