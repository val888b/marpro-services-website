import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Commercial Cleaning", href: "#services" },
      { label: "Janitorial Services", href: "#services" },
      { label: "Office Cleaning", href: "#services" },
      { label: "Property Maintenance", href: "#services" },
    ],
  },
  {
    title: "Industries Served",
    links: [
      { label: "Property Managers", href: "#industries" },
      { label: "HOAs & Communities", href: "#industries" },
      { label: "Medical Offices", href: "#industries" },
      { label: "Commercial Plazas", href: "#industries" },
      { label: "Food-Service Properties", href: "#industries" },
    ],
  },
  {
    title: "Exterior Maintenance",
    links: [
      { label: "Pressure Washing", href: "#exterior-maintenance" },
      { label: "Dumpster Enclosure Cleaning", href: "#exterior-maintenance" },
      { label: "Concrete & Sidewalk Cleaning", href: "#exterior-maintenance" },
      { label: "Graffiti & Gum Removal", href: "#exterior-maintenance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About MarPro", href: "#company" },
      { label: "Why MarPro", href: "#why-marpro" },
      { label: "Our Work", href: "#work" },
      { label: "Client Results", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05060a] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo variant="full" className="h-20" />
            <p className="mt-4 text-sm text-gray-500">
              Commercial property maintenance for the Bay Area.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>San Jose, Milpitas, Bay Area</span>
              </div>
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
