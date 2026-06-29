"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  FileSignature,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Request Service",
    description:
      "Reach out with your property details and the service you need.",
  },
  {
    icon: ClipboardList,
    title: "Walkthrough & Scope",
    description:
      "We assess the property and define the exact scope of work.",
  },
  {
    icon: FileSignature,
    title: "Proposal & Scheduling",
    description:
      "You receive a clear proposal and a schedule that fits your property.",
  },
  {
    icon: CheckCircle2,
    title: "Service Completion",
    description:
      "Our team completes the work to commercial-grade standards.",
  },
  {
    icon: FileCheck2,
    title: "Documentation & Follow-Up",
    description:
      "You get before-and-after records and a point of contact for follow-up.",
  },
];

export function Process() {
  return (
    <section className="bg-[#07090f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            A straightforward process built for property managers who need
            things handled without back-and-forth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-xl border border-white/5 bg-charcoal/50 p-6"
            >
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-glow">
                {i + 1}
              </span>
              <div className="mb-4 mt-2 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <step.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
