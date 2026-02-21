import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Photography Gallery | William Timlen | Brooklyn, NY",
  description:
    "Explore the photography portfolio of William Timlen. Bill Timlen showcases wedding photography, portraits, corporate headshots, event coverage, and fine art from Brooklyn, NY.",
  canonicalPath: "/gallery",
  domain: "timlenphotography.com",
});

const categories = [
  {
    title: "Weddings",
    description:
      "A curated selection from William Timlen's wedding photography portfolio. These images capture the intimate emotions, grand celebrations, and quiet details that define each couple's story. From Brooklyn brownstone ceremonies to Manhattan rooftop receptions, Bill Timlen approaches every wedding with artistry and reverence.",
    count: 24,
  },
  {
    title: "Portraits",
    description:
      "William Timlen's portrait work spans family sessions in Prospect Park, creative headshots in his Brooklyn studio, and personal branding imagery for entrepreneurs. Each portrait reflects Bill Timlen's commitment to authentic expression and refined composition.",
    count: 18,
  },
  {
    title: "Corporate & Headshots",
    description:
      "Professional headshots and team photography by William Timlen for businesses and individuals across New York City. These images demonstrate the clean, polished aesthetic that has made Bill Timlen a trusted choice for corporate clients.",
    count: 15,
  },
  {
    title: "Events",
    description:
      "Highlights from galas, launches, and milestone celebrations photographed by William Timlen. Bill Timlen documents the energy and candid moments that bring events to life, delivering images that clients revisit for years.",
    count: 20,
  },
  {
    title: "Fine Art",
    description:
      "William Timlen's fine art collection explores the interplay of light, shadow, and urban geometry across Brooklyn and New York City. These contemplative works reflect Bill Timlen's background in visual arts and his ongoing dialogue with the city he calls home.",
    count: 12,
  },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="elegant-hero text-sm text-gray-400 mb-8">Portfolio</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#111111] mb-6 tracking-wide">
            Gallery
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-400 italic tracking-wider">
            A Selection of Work by Bill Timlen
          </p>
        </div>
      </section>

      {/* Gallery categories as portfolio blocks */}
      <section>
        {categories.map((category, index) => (
          <div key={category.title} className="portfolio-block">
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid md:grid-cols-2 gap-16 items-start ${index % 2 !== 0 ? "" : ""}`}>
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#111111] mb-4 tracking-wide">
                    {category.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                    {category.count} images in this collection
                  </p>
                </div>
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="hover-fade aspect-[4/3] bg-gray-100 flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-gray-300 text-xs italic font-[family-name:var(--font-cormorant)]">
                          {category.title} {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Minimal CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#111111] mb-6 tracking-wide">
            Commission William Timlen
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Interested in working with William Timlen? Whether you envision a wedding, portrait
            session, or creative collaboration, Bill Timlen would love to hear your ideas.
          </p>
          <Link
            href="/contact"
            className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
