import type { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  canonicalPath,
  domain,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  domain: string;
}): Metadata {
  const url = `https://${domain}${canonicalPath}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}
