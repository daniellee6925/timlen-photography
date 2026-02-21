import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";
import { SITES } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact William Timlen | Photographer | Brooklyn, NY",
  description:
    "Contact William Timlen for professional photography in Brooklyn, NY. Reach Bill Timlen by phone, email, or visit the studio. Weddings, portraits, headshots, and events.",
  canonicalPath: "/contact",
  domain: "timlenphotography.com",
});

const site = SITES.photography;

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="elegant-hero text-sm text-gray-400 mb-8">Get in Touch</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#111111] mb-6 tracking-wide">
            Contact William Timlen
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-gray-400 italic tracking-wider">
            Book Your Photography Session Today
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          {/* Info column */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#111111] mb-8 tracking-wide">
              Reach Bill Timlen
            </h2>
            <div className="space-y-8 text-gray-500 leading-relaxed">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Studio Address</p>
                <p>{site.address.streetAddress}</p>
                <p>
                  {site.address.addressLocality}, {site.address.addressRegion}{" "}
                  {site.address.postalCode}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Phone</p>
                <p>{site.phone}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Email</p>
                <p>{site.email}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Studio Hours</p>
                <p>Monday &ndash; Friday: 10:00 AM &ndash; 6:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <p className="mt-10 text-gray-500 leading-relaxed">
              William Timlen welcomes inquiries from prospective clients. Whether you have a question
              about a specific service or are ready to book a session, Bill Timlen and his team look
              forward to hearing from you.
            </p>
          </div>

          {/* Form column */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#111111] mb-8 tracking-wide">
              Send a Message to William Timlen
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#111111] placeholder-gray-300 focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#111111] placeholder-gray-300 focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#111111] placeholder-gray-300 focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#111111] focus:border-[#111111] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="corporate">Corporate & Headshots</option>
                  <option value="event">Event Photography</option>
                  <option value="fineart">Fine Art</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
                  Tell William Timlen About Your Project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[#111111] placeholder-gray-300 focus:border-[#111111] focus:outline-none transition-colors"
                  placeholder="Describe your photography needs, preferred dates, and any other details..."
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm cursor-pointer"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            Want to see more?{" "}
            <Link href="/gallery" className="text-link text-[#111111] text-sm tracking-[0.05em]">
              Browse William Timlen&apos;s gallery
            </Link>{" "}
            or{" "}
            <Link href="/services" className="text-link text-[#111111] text-sm tracking-[0.05em]">
              view photography services
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
