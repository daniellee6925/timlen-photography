interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
}

export function generatePersonSchema({
  name,
  alternateName,
  jobTitle,
  address,
  phone,
  email,
  domain,
}: {
  name: string;
  alternateName: string;
  jobTitle: string;
  address: Address;
  phone: string;
  email: string;
  domain: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    alternateName,
    jobTitle,
    telephone: phone,
    email,
    url: `https://${domain}`,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  };
}

export function generateBusinessSchema({
  businessType,
  businessName,
  description,
  address,
  phone,
  email,
  domain,
  founderName,
}: {
  businessType: string;
  businessName: string;
  description: string;
  address: Address;
  phone: string;
  email: string;
  domain: string;
  founderName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": businessType,
    name: businessName,
    description,
    telephone: phone,
    email,
    url: `https://${domain}`,
    founder: { "@type": "Person", name: founderName },
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  };
}
