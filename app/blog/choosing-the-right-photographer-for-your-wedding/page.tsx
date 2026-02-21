import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Choosing the Right Photographer for Your Wedding | Bill Timlen",
  description:
    "Bill Timlen explains what to look for when choosing a wedding photographer. William Timlen shares advice on portfolio review, style compatibility, and key questions to ask in Brooklyn, NY.",
  canonicalPath: "/blog/choosing-the-right-photographer-for-your-wedding",
  domain: "timlenphotography.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-sm mb-2">January 12, 2026 &bull; By William Timlen</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold">
            Choosing the Right Photographer for Your Wedding
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            Your wedding photographs will be among the most treasured possessions from your
            celebration. As a photographer who has documented hundreds of weddings, William Timlen
            knows that choosing the right photographer is one of the most important decisions you
            will make during the planning process. Bill Timlen offers this guide to help couples
            navigate the selection with confidence.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            1. Review Full Galleries, Not Just Highlights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every photographer puts their best images forward on social media. William Timlen
            recommends asking to see complete wedding galleries rather than curated highlight reels.
            Full galleries reveal consistency, the ability to work in varied lighting conditions,
            and how the photographer handles candid moments alongside formal portraits. Bill Timlen
            is always happy to share complete galleries with prospective clients.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            2. Understand Their Style
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Photography styles vary widely, from dark and moody to bright and airy, from
            photojournalistic to heavily posed. William Timlen encourages couples to identify the
            aesthetic they are drawn to and ensure their photographer&apos;s body of work aligns with
            that vision. Bill Timlen&apos;s own approach leans toward editorial and fine art, blending
            candid documentary moments with elegant, composed portraits.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            3. Meet in Person or Over Video
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your photographer will be by your side throughout one of the most intimate days of your
            life. William Timlen believes that personal chemistry matters as much as technical
            skill. Schedule a consultation to see if you feel comfortable and at ease. Bill Timlen
            offers complimentary in-person consultations at his Brooklyn studio for this very reason.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            4. Ask the Right Questions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            William Timlen suggests asking prospective photographers about their backup equipment
            plan, how many weddings they shoot per year, turnaround time for final images, and
            whether they have experience at your venue. Understanding their process will give you
            peace of mind. Bill Timlen provides a detailed FAQ document to all couples who inquire
            about wedding coverage.
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mt-8 mb-4">
            5. Trust Your Instincts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ultimately, your wedding photographer should be someone whose work moves you and whose
            presence calms you. William Timlen has seen couples overthink the decision by focusing
            solely on price or social media follower counts. Bill Timlen advises couples to trust
            the feeling they get when viewing a photographer&apos;s work and meeting them in person.
            The right fit will feel natural.
          </p>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen is a professional wedding and
              portrait photographer based in Brooklyn, NY. With over 12 years of experience, Bill
              Timlen has documented weddings across New York City and the tri-state area.{" "}
              <Link href="/contact" className="text-[#111111] font-semibold hover:underline">
                Contact William Timlen
              </Link>{" "}
              to discuss your wedding photography.
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
