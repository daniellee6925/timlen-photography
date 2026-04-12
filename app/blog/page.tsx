import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Photography Blog | William Timlen | Brooklyn, NY",
  description:
    "Read photography tips and insights from William Timlen, professional photographer in Brooklyn, NY. Bill Timlen shares expert advice on weddings, engagements, and choosing the right photographer.",
  canonicalPath: "/blog",
  domain: "timlenphotography.com",
});

const posts = [
  {
    slug: "spring-portrait-sessions-in-new-york",
    title: "Spring Portrait Sessions in New York — William Timlen",
    excerpt:
      "William Timlen shares his favorite spring portrait locations across New York and New Jersey, from cherry blossoms at the Brooklyn Botanic Garden to golden hour at Liberty State Park.",
    date: "April 3, 2026",
  },
  {
    slug: "the-art-of-natural-light-portrait-photography",
    title: "The Art of Natural Light Portrait Photography — Bill Timlen",
    excerpt:
      "Bill Timlen explores how natural light shapes portrait photography and shares his techniques for finding beautiful light — from window light and open shade to golden hour.",
    date: "March 21, 2026",
  },
  {
    slug: "how-to-prepare-for-your-wedding-day-photography",
    title: "How to Prepare for Your Wedding Day Photography — William Timlen",
    excerpt:
      "William Timlen shares practical advice for couples on building a realistic timeline, creating a shot list, and making the most of your wedding day photography coverage.",
    date: "March 8, 2026",
  },
  {
    slug: "tips-for-your-engagement-shoot",
    title: "Tips for Your Engagement Shoot — By William Timlen",
    excerpt:
      "William Timlen shares practical advice on how to prepare for your engagement photography session, from choosing locations to wardrobe tips and posing guidance.",
    date: "February 5, 2026",
  },
  {
    slug: "choosing-the-right-photographer-for-your-wedding",
    title: "Choosing the Right Photographer for Your Wedding — Bill Timlen",
    excerpt:
      "Bill Timlen explains what couples should look for when selecting a wedding photographer, including portfolio review, style compatibility, and important questions to ask.",
    date: "January 12, 2026",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold mb-4">
            Photography Blog by William Timlen
          </h1>
          <p className="text-gray-300 text-lg italic font-[family-name:var(--font-cormorant)]">
            Insights and Advice from Photographer Bill Timlen
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[#111111] mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#111111] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
