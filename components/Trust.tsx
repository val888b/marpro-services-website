"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Stethoscope,
  Store,
  UtensilsCrossed,
  ClipboardList,
} from "lucide-react";

const markets = [
  { icon: Building2, label: "Property Managers" },
  { icon: Home, label: "HOAs" },
  { icon: Stethoscope, label: "Medical Offices" },
  { icon: Store, label: "Commercial Plazas" },
  { icon: UtensilsCrossed, label: "Food-Service Properties" },
  { icon: ClipboardList, label: "Facility Managers" },
];

export function Trust() {
  return (
    <section id="industries" className="border-y border-white/5 bg-charcoal/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-gray-500">
          Trusted by property professionals across these markets
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market, i) => (
            <motion.div
              key={market.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#07090f]/60 px-4 py-6 text-center transition-all hover:border-accent/30"
            >
              <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                <market.icon size={20} />
              </span>
              <span className="text-sm font-semibold text-white">
                {market.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
