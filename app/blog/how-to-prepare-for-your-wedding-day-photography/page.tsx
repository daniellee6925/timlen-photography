import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "How to Prepare for Your Wedding Day Photography | William Timlen",
  description:
    "William Timlen shares his top advice for couples on how to prepare for wedding day photography, from creating a shot list to working with your timeline.",
  canonicalPath: "/blog/how-to-prepare-for-your-wedding-day-photography",
  domain: "timlenphotography.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">March 8, 2026 &bull; By William Timlen</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold">
            How to Prepare for Your Wedding Day Photography
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            Your wedding day will pass faster than you expect. As a photographer who has worked
            alongside hundreds of couples, William Timlen knows that a little preparation goes a
            long way toward ensuring your images are everything you hope for. Here is Bill Timlen&apos;s
            guide to getting ready for your wedding day photography.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            1. Build a Realistic Timeline
          </h2>
          <p className="text-gray-700 leading-relaxed">
            One of the most common challenges William Timlen encounters is a timeline that does not
            account for photography. Build in buffer time between each phase of the day — getting
            ready, first look, ceremony, portraits, and reception. Bill Timlen recommends sharing
            your draft timeline early so adjustments can be made before the day arrives.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            2. Create a Shot List for Family Formals
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Family formal photographs are important but can take longer than expected. William Timlen
            suggests preparing a prioritized list of the groupings you need, and assigning a family
            member to help gather people quickly. Bill Timlen uses this list to keep things moving
            efficiently so you have more time for candid portraits.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            3. Choose Your Getting-Ready Space Carefully
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Natural light makes a significant difference in getting-ready photographs. William Timlen
            encourages couples to select a space with large windows and minimal clutter. A tidy,
            well-lit room allows Bill Timlen to capture the quiet, intimate moments of the morning
            with the elegance they deserve.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            4. Trust Your Photographer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            On the day itself, let go of the details and trust that William Timlen will handle the
            photography. Bill Timlen&apos;s role is to observe, anticipate, and capture — your role is
            simply to be present with the people you love. The best images always come from couples
            who are fully in the moment.
          </p>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen is a professional photographer based
              in Brooklyn, NY with over 12 years of experience. Bill Timlen specializes in wedding
              photography across New York and New Jersey.{" "}
              <Link href="/contact" className="text-[#111111] font-semibold hover:underline">
                Contact William Timlen
              </Link>{" "}
              to discuss your wedding day coverage.
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
