"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="company" className="bg-[#07090f] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          About MarPro Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-balance text-lg text-gray-400"
        >
          MarPro Services is being rebuilt into a modern commercial property
          maintenance company with stronger systems, better communication,
          reliable service, and professional support for property managers
          and commercial clients throughout the Bay Area.
        </motion.p>
      </div>
    </section>
  );
}
