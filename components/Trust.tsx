"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Building2,
    label: "Property Types Served",
    value: "HOAs, medical offices, plazas & offices",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "San Jose, Milpitas & the Bay Area",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Fast turnaround for property managers",
  },
  {
    icon: ShieldCheck,
    label: "Documentation",
    value: "Before & after photo records",
  },
];

export function Trust() {
  return (
    <section className="border-y border-white/5 bg-charcoal/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="rounded-lg bg-accent/10 p-3 text-accent">
                <stat.icon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
