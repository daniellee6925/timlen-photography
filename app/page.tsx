import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "William Timlen | Professional Photographer | Brooklyn, NY",
  description:
    "William Timlen is a professional photographer in Brooklyn, NY. Bill Timlen captures timeless moments through wedding photography, portraits, corporate headshots, and fine art.",
  canonicalPath: "/",
  domain: "timlenphotography.com",
});

export default function Home() {
  return (
    <>
      {/* Full-width hero with elegant centered text on black */}
      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="elegant-hero text-sm text-gray-400 mb-8">Brooklyn, NY</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light mb-6 tracking-wide">
            William Timlen
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-400 italic tracking-wider mb-12">
            Photographer
          </p>
          <Link
            href="/contact"
            className="text-link text-sm text-gray-300 tracking-[0.15em] uppercase"
          >
            Book a Session →
          </Link>
        </div>
      </section>

      {/* 3 large portfolio category blocks — full-width alternating */}
      <section>
        {[
          {
            title: "Weddings",
            desc: "William Timlen documents your love story with an editorial eye and an intimate approach. Bill Timlen believes every wedding tells a unique narrative worth preserving beautifully.",
            align: "left" as const,
            image: "/photos/wedding1.jpg",
          },
          {
            title: "Portraits",
            desc: "From family portraits to personal branding, William Timlen crafts images that reveal character and emotion. Each portrait session with Bill Timlen is tailored to your vision.",
            align: "right" as const,
            image: "/photos/portrait2.jpg",
          },
          {
            title: "Corporate",
            desc: "Elevate your professional image with polished headshots by Bill Timlen. William Timlen works with executives, creatives, and teams across New York City.",
            align: "left" as const,
            image: "/photos/corporate.jpg",
          },
        ].map((category) => (
          <div key={category.title} className="portfolio-block">
            <div className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${category.align === "right" ? "direction-rtl" : ""}`}>
              <div className={`${category.align === "right" ? "md:order-2" : ""}`}>
                <div className="relative h-72 md:h-96 overflow-hidden bg-gray-100">
                  <Image src={category.image} alt={`${category.title} photography by William Timlen`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className={`${category.align === "right" ? "md:order-1 md:text-right" : ""}`}>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#111111] mb-4 tracking-wide">
                  {category.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {category.desc}
                </p>
                <Link href="/gallery" className="text-link text-sm text-[#111111] tracking-[0.1em] uppercase">
                  View Gallery →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Single elegant testimonial quote */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="elegant-quote font-[family-name:var(--font-cormorant)]">
            &ldquo;William Timlen has an extraordinary ability to capture the moments that matter most.
            Every photograph from our wedding day tells a story. Bill Timlen did not just document our
            day — he preserved the feeling of it.&rdquo;
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-gray-400">
            Sarah &amp; Michael R. — Wedding, 2024
          </p>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#111111] mb-6 tracking-wide">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Whether it is a wedding, portrait session, or corporate project, William Timlen brings
            artistry and professionalism to every shoot. Bill Timlen would love to hear about your vision.
          </p>
          <Link href="/contact" className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
