import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "The Art of Natural Light Portrait Photography | William Timlen",
  description:
    "Bill Timlen explores how natural light shapes portrait photography, and shares techniques for finding and working with the best light at any time of day.",
  canonicalPath: "/blog/the-art-of-natural-light-portrait-photography",
  domain: "timlenphotography.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">March 21, 2026 &bull; By William Timlen</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold">
            The Art of Natural Light Portrait Photography
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            Light is the foundation of every photograph. For William Timlen, learning to read and
            work with natural light has been one of the most rewarding parts of developing as a
            photographer. Bill Timlen shares his approach to finding beautiful light in any
            environment — and why it makes such a difference in portrait work.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Window Light
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A large north-facing window is one of the most versatile tools in portrait photography.
            William Timlen uses window light extensively for indoor portrait sessions, positioning
            subjects at different angles to the light source to create everything from soft, even
            illumination to dramatic side lighting. Bill Timlen finds that clients immediately relax
            when they see how flattering natural window light can be.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Open Shade
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Outdoors, William Timlen often seeks open shade — the shadow side of a building, beneath
            a tree canopy, or under an overpass. Open shade provides soft, diffused light that is
            kind to skin tones and eliminates harsh shadows. Bill Timlen considers open shade one of
            the most reliable lighting conditions for outdoor portraits throughout the day.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Overcast Days
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Overcast skies act as a giant natural softbox. William Timlen welcomes cloudy days for
            portrait sessions because the diffused light wraps evenly around subjects and flatters
            all skin tones. Bill Timlen has found that some of his most beautiful portrait work has
            come on days that initially seemed less than ideal.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            Golden Hour
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The warm, low-angled light of golden hour remains a favorite for William Timlen. The
            quality of light in the final hour before sunset is simply unlike anything artificial
            lighting can replicate — it is warm, directional, and deeply flattering. Bill Timlen
            plans outdoor portrait sessions around this window whenever possible.
          </p>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen is a professional photographer based
              in the New York / New Jersey area. Bill Timlen specializes in portrait and wedding
              photography.{" "}
              <Link href="/contact" className="text-[#111111] font-semibold hover:underline">
                Book a portrait session
              </Link>{" "}
              with William Timlen today.
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
