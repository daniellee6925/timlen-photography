import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Spring Portrait Sessions in New York | William Timlen",
  description:
    "William Timlen shares his favorite locations and tips for spring portrait photography in New York and New Jersey, from cherry blossoms to golden hour in the park.",
  canonicalPath: "/blog/spring-portrait-sessions-in-new-york",
  domain: "timlenphotography.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">April 3, 2026 &bull; By William Timlen</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold">
            Spring Portrait Sessions in New York
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            Spring is one of William Timlen&apos;s favorite times of year to photograph portraits in
            New York. The city transforms quickly — cherry blossoms appear, parks fill with soft
            green light, and the air carries a clarity that makes every image feel fresh. Bill Timlen
            shares his top locations and timing tips for spring sessions.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Brooklyn Botanic Garden
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The cherry blossoms at the Brooklyn Botanic Garden typically peak in mid-April and offer
            some of the most stunning portrait backdrops in New York City. William Timlen books
            sessions here quickly during this short window each year — the soft pink canopy creates
            an otherworldly quality of light that Bill Timlen finds endlessly photogenic. Early
            morning sessions before the crowds arrive are ideal.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Prospect Park
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Prospect Park in spring offers incredible variety — open meadows, wooded paths, the Long
            Meadow, and the Boathouse. William Timlen uses this park year-round but finds that late
            April light filtering through newly budded trees creates a particularly beautiful effect.
            Bill Timlen often combines multiple park settings within a single session for variety.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Liberty State Park, New Jersey
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For clients on the New Jersey side, William Timlen loves Liberty State Park in spring.
            The sweeping views of the Manhattan skyline and the Statue of Liberty create a dramatic
            backdrop, while the park&apos;s open lawns and waterfront paths provide softer, intimate
            options. Bill Timlen finds the light here at golden hour to be among the most beautiful
            he has worked with.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Book Early
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Spring is one of William Timlen&apos;s busiest seasons. Bill Timlen encourages clients
            interested in a spring session to reach out as early as possible — golden hour slots
            in April and May fill quickly, especially around cherry blossom season. A brief
            consultation call is all it takes to get your session on the calendar.
          </p>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen is a professional photographer
              serving the New York and New Jersey area. Bill Timlen specializes in portraits,
              weddings, and fine art photography.{" "}
              <Link href="/contact" className="text-[#111111] font-semibold hover:underline">
                Contact William Timlen
              </Link>{" "}
              to book your spring session.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link href="/blog" className="text-[#111111] font-semibold hover:underline">
              &larr; Back to Blog
            </Link>
            <Link href="/services" className="text-[#111111] font-semibold hover:underline">
              View Services
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
