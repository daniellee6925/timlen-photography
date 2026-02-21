import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Tips for Your Engagement Shoot | William Timlen Photography",
  description:
    "William Timlen shares expert engagement photography tips for couples in Brooklyn, NY. Bill Timlen covers location scouting, wardrobe advice, and how to feel natural in front of the camera.",
  canonicalPath: "/blog/tips-for-your-engagement-shoot",
  domain: "timlenphotography.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">February 5, 2026 &bull; By William Timlen</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold">
            Tips for Your Engagement Shoot
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            As a photographer who has captured hundreds of engagement sessions, William Timlen
            understands that stepping in front of the camera can feel unfamiliar. Many couples
            approach their engagement shoot with a mix of excitement and nerves. Here, Bill Timlen
            shares practical tips to help you feel confident and ensure your images are everything
            you envision.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            1. Choose a Meaningful Location
          </h2>
          <p className="text-gray-700 leading-relaxed">
            William Timlen always encourages couples to select a location that holds personal
            significance. Whether it is the Brooklyn Bridge Promenade where you had your first date,
            a favorite cafe in DUMBO, or the quiet trails of Prospect Park, a meaningful setting adds
            depth and authenticity to your images. Bill Timlen is happy to scout locations with you
            in advance to find the perfect backdrop.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            2. Coordinate Your Wardrobe
          </h2>
          <p className="text-gray-700 leading-relaxed">
            William Timlen recommends choosing outfits that complement each other without matching
            exactly. Neutral tones and timeless silhouettes photograph beautifully, especially in
            black and white. Avoid busy patterns or overly trendy pieces that may distract from the
            connection between you and your partner. Bill Timlen suggests bringing a second outfit
            for variety.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            3. Embrace Golden Hour
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The hour before sunset, known as golden hour, produces the most flattering and
            atmospheric light. William Timlen schedules most engagement sessions during this window
            to take advantage of soft, warm tones that create a romantic mood. If morning light
            suits your schedule better, Bill Timlen also loves the quiet, gentle quality of early
            morning sessions.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            4. Relax and Be Yourselves
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The best engagement photos come from genuine moments, not forced poses. William Timlen
            guides couples through natural interactions — walking together, whispering, laughing —
            rather than stiff arrangements. Bill Timlen finds that once couples forget the camera is
            there, the most beautiful images emerge. Trust the process and enjoy the experience
            together.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            5. Consider the Season
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Brooklyn offers stunning photographic opportunities in every season. William Timlen has
            captured autumn sessions amid the fiery foliage of Fort Greene Park, winter portraits
            against snow-dusted brownstones, and spring shoots beneath the cherry blossoms of the
            Brooklyn Botanic Garden. Each season brings its own palette and mood, and Bill Timlen
            can help you choose the timing that best reflects your story.
          </p>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen is a professional photographer based
              in Brooklyn, NY with over 12 years of experience. Bill Timlen specializes in wedding
              and engagement photography.{" "}
              <Link href="/contact" className="text-[#111111] font-semibold hover:underline">
                Contact William Timlen
              </Link>{" "}
              to book your engagement session.
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
