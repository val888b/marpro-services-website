"use client";

import { motion } from "framer-motion";
import {
  Trash2,
  Flame,
  AlertTriangle,
  MessageSquareWarning,
  Layers,
  Footprints,
  RefreshCcw,
  CameraOff,
  ArrowRight,
} from "lucide-react";

const problems = [
  {
    icon: Trash2,
    problem: "Dirty dumpster enclosures",
    fix: "Scheduled enclosure cleaning that keeps service areas presentable",
  },
  {
    icon: Flame,
    problem: "Grease and cooking-oil buildup",
    fix: "Targeted degreasing for food-service and kitchen-adjacent areas",
  },
  {
    icon: AlertTriangle,
    problem: "Neglected service areas",
    fix: "Recurring maintenance routes so service areas never get overlooked",
  },
  {
    icon: MessageSquareWarning,
    problem: "Tenant or vendor complaints",
    fix: "Consistent upkeep and fast response that resolves issues before they escalate",
  },
  {
    icon: Layers,
    problem: "Stained concrete",
    fix: "Commercial-grade pressure washing that restores surfaces",
  },
  {
    icon: Footprints,
    problem: "Unmaintained curbs and walkways",
    fix: "Curb and perimeter cleaning built into every maintenance route",
  },
  {
    icon: RefreshCcw,
    problem: "Inconsistent cleaning vendors",
    fix: "One accountable provider with documented, repeatable service",
  },
  {
    icon: CameraOff,
    problem: "Lack of before-and-after documentation",
    fix: "Photo records on every job so you have proof of work and condition",
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Problems We Solve
          </h2>
          <p className="mt-4 text-gray-400">
            The recurring issues property managers deal with — and how MarPro
            fixes them.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.05 }}
              className="rounded-xl border border-white/5 bg-[#07090f]/60 p-6 transition-all hover:border-accent/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                <item.icon size={20} />
              </div>
              <p className="text-sm font-semibold text-white">
                {item.problem}
              </p>
              <div className="mt-3 flex items-start gap-2 text-sm text-gray-400">
                <ArrowRight size={14} className="mt-0.5 shrink-0 text-accent" />
                {item.fix}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
