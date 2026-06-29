import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  "Commercial Cleaning",
  "Janitorial Services",
  "Pressure Washing",
  "Property Maintenance",
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05060a] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="full" className="h-9 w-auto" />
            <p className="mt-4 text-sm text-gray-500">
              Commercial property maintenance for the Bay Area.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Service Area</h3>
            <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>San Jose, Milpitas, Bay Area</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:cleaning@marproservices.io"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-accent" />
                cleaning@marproservices.io
              </a>
              <a
                href="tel:+14084276327"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
              >
                <Phone size={16} className="text-accent" />
                (408) 427-6327
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} MarPro Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
