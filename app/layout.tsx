import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import Link from "next/link";
import { generatePersonSchema, generateBusinessSchema } from "@/lib/schema-generators";
import { SITES } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const site = SITES.photography;

export const metadata: Metadata = {
  title: {
    default: "William Timlen | Professional Photographer | Brooklyn, NY",
    template: "%s | William Timlen Photography",
  },
  description:
    "William Timlen is a professional photographer based in Brooklyn, NY. Bill Timlen specializes in wedding photography, portraits, corporate headshots, event coverage, and fine art photography.",
  robots: { index: true, follow: true },
};

const personSchema = generatePersonSchema({
  name: site.name,
  alternateName: site.alternateName,
  jobTitle: site.jobTitle,
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
});

const businessSchema = generateBusinessSchema({
  businessType: site.businessType,
  businessName: site.businessName,
  description:
    "Professional photography studio led by William Timlen in Brooklyn, NY. Specializing in wedding photography, portraits, corporate headshots, event coverage, and fine art photography.",
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
  founderName: "William Timlen",
});

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Kind Words" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Thin minimal header */}
        <header className="thin-header bg-white">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="font-[family-name:var(--font-cormorant)] text-xl tracking-[0.2em] text-[#111111] uppercase font-light">
              William Timlen
            </Link>
            <ul className="flex flex-wrap gap-8 text-xs tracking-[0.15em] uppercase text-gray-500">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#111111] transition-colors hover-fade">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Minimal elegant footer */}
        <footer className="minimal-footer">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.15em] text-[#111111] mb-4 font-light">
              William Timlen Photography
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {site.address.addressLocality}, {site.address.addressRegion} | {site.phone} | {site.email}
            </p>
            <ul className="flex justify-center gap-8 text-xs tracking-[0.15em] uppercase text-gray-400 mb-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#111111] transition-colors hover-fade">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-300">
              &copy; {new Date().getFullYear()} William Timlen Photography. William (Bill) Timlen. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
