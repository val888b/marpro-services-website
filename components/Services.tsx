"use client";

import { motion } from "framer-motion";
import {
  Building,
  Briefcase,
  Home,
  Stethoscope,
  Building2,
  Store,
  Droplets,
  Trash2,
  Layers,
  Flame,
  MapPin,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Building, name: "Commercial Cleaning" },
  { icon: Briefcase, name: "Janitorial Services" },
  { icon: Home, name: "HOA & Property Maintenance" },
  { icon: Stethoscope, name: "Medical Office Cleaning" },
  { icon: Building2, name: "Office Cleaning" },
  { icon: Store, name: "Commercial Plaza Cleaning" },
  { icon: Droplets, name: "Pressure Washing" },
  { icon: Trash2, name: "Dumpster Enclosure Cleaning" },
  { icon: Layers, name: "Concrete Cleaning" },
  { icon: Flame, name: "Grease & Cooking Oil Buildup Cleanup" },
  { icon: MapPin, name: "Service Area Cleaning" },
  { icon: Wrench, name: "Exterior Property Upkeep" },
];

export function Services() {
  return (
    <section id="services" className="bg-[#07090f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services Built for Commercial Properties
          </h2>
          <p className="mt-4 text-gray-400">
            A full scope of cleaning and maintenance services for the
            properties that depend on consistent, professional upkeep.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="group rounded-xl border border-white/5 bg-charcoal/50 p-6 transition-all hover:border-accent/30 hover:bg-charcoal/80"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
                <service.icon size={22} />
              </div>
              <h3 className="text-base font-semibold text-white">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
