"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Commercial Cleaning",
  "Janitorial Services",
  "HOA & Property Maintenance",
  "Medical Office Cleaning",
  "Office Cleaning",
  "Commercial Plaza Cleaning",
  "Pressure Washing",
  "Dumpster Enclosure Cleaning",
  "Concrete Cleaning",
  "Grease & Cooking Oil Buildup Cleanup",
  "Exterior Property Upkeep",
  "Recurring Property Maintenance",
  "Other",
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Request a Proposal
            </h2>
            <p className="mt-4 text-gray-400">
              Tell us about your property and we&apos;ll follow up with a
              proposal tailored to your service needs.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:cleaning@marproservices.io"
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <Mail size={18} />
                </span>
                cleaning@marproservices.io
              </a>
              <a
                href="tel:+14084276327"
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <Phone size={18} />
                </span>
                (408) 427-6327
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <MapPin size={18} />
                </span>
                San Jose, Milpitas & the Bay Area
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 rounded-2xl border border-white/5 bg-[#07090f]/60 p-8 sm:grid-cols-2 lg:col-span-3"
          >
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <div className="sm:col-span-2">
              <Field label="Property Address" name="address" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                Service Needed
              </label>
              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-md border border-white/10 bg-charcoal/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-white/10 bg-charcoal/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your property and what you need"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Request a Proposal"}
              </button>
              {status === "success" && (
                <p className="mt-3 text-sm text-accent-light">
                  Thanks — we received your request and will be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">
                  Something went wrong. Please call or email us directly.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-white/10 bg-charcoal/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
