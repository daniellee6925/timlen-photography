import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Client Testimonials | William Timlen Photography | Brooklyn, NY",
  description:
    "Read what clients say about working with William Timlen, professional photographer in Brooklyn, NY. Bill Timlen has earned the trust of hundreds of clients with stunning photography.",
  canonicalPath: "/testimonials",
  domain: "timlenphotography.com",
});

const testimonials = [
  {
    name: "Sarah & Michael R.",
    text: "William Timlen photographed our wedding at the Brooklyn Botanic Garden and the results were beyond anything we imagined. He captured moments we did not even realize were happening. Bill Timlen made us feel completely at ease the entire day.",
    service: "Wedding Photography",
  },
  {
    name: "David L.",
    text: "I needed updated headshots for my company and a colleague recommended Bill Timlen. William Timlen was incredibly professional and efficient. The final images were clean, polished, and exactly what I needed for our rebrand.",
    service: "Corporate Headshots",
  },
  {
    name: "Priya K.",
    text: "William Timlen did our family portrait session in Prospect Park and it was such a wonderful experience. He was patient with our kids and captured genuine moments of joy. Bill Timlen has a true gift for making people feel comfortable in front of the camera.",
    service: "Portrait Session",
  },
  {
    name: "Rachel & Tom W.",
    text: "We hired William Timlen for our engagement shoot and were so impressed that we booked him for our wedding too. Bill Timlen has an incredible eye for light and composition. Every photo felt like a work of art.",
    service: "Engagement & Wedding",
  },
  {
    name: "Elena S.",
    text: "As an event planner, I have worked with many photographers, but William Timlen stands out. He is discreet, creative, and always delivers stunning images. Bill Timlen is now my go-to recommendation for every client.",
    service: "Event Photography",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="elegant-hero text-sm text-gray-400 mb-8">Testimonials</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#111111] mb-6 tracking-wide">
            Kind Words
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-400 italic tracking-wider">
            Trusted by Hundreds of Clients Across New York
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-6 space-y-20">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <p className="elegant-quote font-[family-name:var(--font-cormorant)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-8 text-xs tracking-[0.2em] uppercase text-gray-400">
                {t.name} — {t.service}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-24 mx-auto border-t border-gray-200 my-12" />

      {/* Minimal CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#111111] mb-6 tracking-wide">
            Experience the Bill Timlen Difference
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Join the hundreds of satisfied clients who have trusted William Timlen with their most
            important moments. Contact Bill Timlen today to book your session.
          </p>
          <Link
            href="/contact"
            className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm"
          >
            Book a Session →
          </Link>
        </div>
      </section>
    </>
  );
}
