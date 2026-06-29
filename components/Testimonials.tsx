"use client";

import { motion } from "framer-motion";
import { Quote, Video, Clock } from "lucide-react";

const placeholders = [
  {
    quote:
      "Written client reviews will be featured here as MarPro completes more recurring service contracts.",
  },
  {
    quote:
      "Property manager feedback on responsiveness and documentation will be added as it comes in.",
  },
  {
    quote:
      "Success stories from HOAs, plazas, and medical offices will be highlighted here over time.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#07090f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Client Results
          </h2>
          <p className="mt-4 text-gray-400">
            Client feedback collection is in progress. Here&apos;s what
            this section will look like as reviews come in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-white/5 bg-charcoal/50 p-6"
            >
              <Quote size={20} className="text-accent" />
              <p className="mt-4 text-sm text-gray-400">{item.quote}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-gray-600">
                Placeholder — review pending
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-charcoal/30 p-6 text-center sm:flex-row sm:justify-center sm:gap-6"
        >
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <Video size={16} className="text-accent" />
            Video testimonials &amp; walkthrough clips coming soon
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={16} className="text-accent" />
            Success stories added as service history grows
          </span>
        </motion.div>
      </div>
    </section>
  );
}
