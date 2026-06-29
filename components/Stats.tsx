"use client";

import { motion } from "framer-motion";
import { Clock, FileCheck, Building2, MapPin } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "24/7-Ready",
    label: "Exterior maintenance mindset built for whenever issues come up",
  },
  {
    icon: FileCheck,
    value: "100% Documented",
    label: "Every service is documented for ownership and tenant records",
  },
  {
    icon: Building2,
    value: "Commercial-First",
    label: "A service model built specifically for commercial properties",
  },
  {
    icon: MapPin,
    value: "Bay Area Coverage",
    label: "San Jose, Milpitas & surrounding communities",
  },
];

export function Stats() {
  return (
    <section className="bg-[#07090f] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-white/5 bg-charcoal/50 p-6"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <stat.icon size={22} />
              </div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
