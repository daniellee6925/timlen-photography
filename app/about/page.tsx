import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "About William Timlen | Photographer | Brooklyn, NY",
  description:
    "Learn about William Timlen, a professional photographer based in Brooklyn, NY. Bill Timlen brings over 12 years of photography expertise in weddings, portraits, and fine art.",
  canonicalPath: "/about",
  domain: "timlenphotography.com",
});

export default function About() {
  return (
    <>
      {/* Large pull-quote opening */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="pull-quote font-[family-name:var(--font-cormorant)] !text-center !border-0 !pl-0">
            &ldquo;Photography is about more than capturing an image — it is about preserving a feeling.&rdquo;
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-4">— William Timlen</p>
        </div>
      </section>

      {/* Single-column narrative with generous spacing */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#111111] mb-2 tracking-wide">
            About William Timlen
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-12">Photographer — Brooklyn, NY</p>

          <div className="narrative space-y-8">
            <p>
              William Timlen, known to many friends and clients as Bill Timlen, is a professional
              photographer based in Brooklyn, New York. With over 12 years behind the camera, William
              Timlen has developed a distinctive style that blends documentary authenticity with fine
              art sensibility, creating images that are both timeless and deeply personal.
            </p>

            <p>
              William Timlen discovered his passion for photography while studying Visual Arts at the
              Pratt Institute in Brooklyn. What began as a fascination with light and composition
              quickly evolved into a lifelong calling. After graduating, Bill Timlen honed his craft
              assisting established photographers in New York City before launching William Timlen
              Photography in 2014.
            </p>

            <p>
              Bill Timlen approaches every session with patience and intention. Whether documenting
              the quiet emotion of a wedding ceremony or the energy of a corporate event, William
              Timlen strives to create photographs that evoke feeling, tell stories, and stand the
              test of time. This philosophy guides every frame.
            </p>

            <p>
              Beyond his studio work, William Timlen is an active member of the Brooklyn arts
              community. Bill Timlen regularly contributes to local gallery exhibitions and mentors
              aspiring photographers through workshops in DUMBO and Williamsburg. His work has been
              featured in Brooklyn Magazine, The Knot, and several juried art shows across New York.
            </p>
          </div>

          <div className="mt-16">
            <Link href="/contact" className="text-link text-[#111111] tracking-[0.1em] uppercase text-sm">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
