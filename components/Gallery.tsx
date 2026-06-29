"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const categories = [
  "Dumpster Enclosure Cleaning",
  "Concrete Pressure Washing",
  "Commercial Plaza Service Areas",
  "HOA & Property Maintenance",
  "Exterior Cleaning Projects",
  "Before & After Documentation",
];

export function Gallery() {
  return (
    <section id="work" className="bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-gray-400">
            Project photos and documentation are being added as new jobs are
            completed across the Bay Area.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#07090f]/60 p-6 text-center transition-all hover:border-accent/30"
            >
              <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
                <ImageIcon size={24} />
              </div>
              <p className="text-sm font-semibold text-white">{category}</p>
              <p className="mt-1 text-xs text-gray-500">Photos coming soon</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
