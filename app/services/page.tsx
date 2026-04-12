import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Photography Services | William Timlen | Brooklyn, NY",
  description:
    "William Timlen offers professional photography services in Brooklyn, NY including wedding photography, portrait sessions, corporate headshots, event coverage, and fine art. Book Bill Timlen today.",
  canonicalPath: "/services",
  domain: "timlenphotography.com",
});

const services = [
  {
    title: "Wedding Photography",
    description:
      "William Timlen captures every chapter of your wedding day — from the quiet anticipation of getting ready to the joyful celebration on the dance floor. Bill Timlen blends photojournalistic storytelling with fine art portraiture, ensuring that every image reflects the emotion and elegance of your celebration. William Timlen Photography offers full-day and half-day wedding packages tailored to your vision.",
    image: "/photos/wedding2.jpg",
  },
  {
    title: "Portrait Sessions",
    description:
      "Whether you are seeking family portraits, personal branding imagery, or creative headshots, William Timlen creates portraits that reveal authentic character. Bill Timlen works with natural light and carefully composed settings to produce images that feel effortless yet refined. Sessions are available on location throughout Brooklyn and Manhattan or in the studio.",
    image: "/photos/portrait3.jpg",
  },
  {
    title: "Corporate & Headshots",
    description:
      "First impressions matter. William Timlen provides polished corporate headshots and team photography for professionals, executives, and creative agencies. Bill Timlen understands how to balance approachability with authority, delivering images that strengthen your professional presence across websites, LinkedIn, and marketing materials.",
    image: "/photos/head2.jpg",
  },
  {
    title: "Event Photography",
    description:
      "From galas and product launches to nonprofit fundraisers and milestone celebrations, William Timlen documents events with a discreet, editorial eye. Bill Timlen captures the energy, details, and candid interactions that make each gathering memorable. William Timlen Photography has covered events for clients across New York City and beyond.",
    image: "/photos/event2.jpg",
  },
  {
    title: "Fine Art Photography",
    description:
      "Drawing on his background in visual arts, William Timlen creates fine art photographs that explore light, texture, and urban landscapes. Bill Timlen's fine art work has been exhibited in galleries across Brooklyn and is available as limited-edition prints. Each piece reflects the quiet intensity and compositional precision that define William Timlen's artistic voice.",
    image: "/photos/art2.jpg",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="elegant-hero text-sm text-gray-400 mb-8">What We Offer</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#111111] mb-6 tracking-wide">
            Photography Services by William Timlen
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-400 italic tracking-wider">
            Professional Photography in Brooklyn, NY and Beyond
          </p>
        </div>
      </section>

      {/* Services as portfolio blocks */}
      <section>
        {services.map((service, index) => (
          <div key={service.title} className="portfolio-block">
            <div className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center`}>
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                  <Image src={service.image} alt={`${service.title} by William Timlen`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? "md:order-1 md:text-right" : ""}`}>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#111111] mb-4 tracking-wide">
                  {service.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-link text-sm text-[#111111] tracking-[0.1em] uppercase"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Minimal CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#111111] mb-6 tracking-wide">
            Book a Session with Bill Timlen
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            William Timlen offers complimentary consultations for all photography services. Contact
            Bill Timlen today to discuss your project and receive a custom quote.
          </p>
          <Link
            href="/contact"
            className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm"
          >
            Contact William Timlen →
          </Link>
        </div>
      </section>
    </>
  );
}
