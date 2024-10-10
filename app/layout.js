import './globals.css';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'No Spots Left - Cleaning Services in Guildford & Surroundings',
  description:
    'No Spots Left offers professional cleaning services in Guildford, Godalming, Farnham, and surrounding areas. Expert cleaning for homes, offices, and more.',
  keywords:
    'cleaning services Guildford, professional cleaners, office cleaning, home cleaning Guildford, cleaning company Surrey',
  openGraph: {
    title: 'No Spots Left - Cleaning Services',
    description:
      'Expert cleaning services in Guildford, Godalming, Farnham, and surrounding areas. Trust No Spots Left for spotless results every time!',
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.nospotsleft.co.uk',
    site_name: 'No Spots Left',
    images: [
      {
        url: 'https://www.nospotsleft.co.uk/social-share-image.jpg',
        width: 1200,
        height: 630,
        alt: 'No Spots Left - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Spots Left - Cleaning Services',
    description: 'Expert cleaning services in Guildford, Godalming, and more. We ensure spotless homes and offices!',
    image: 'https://www.nospotsleft.co.uk/twitter-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Essential Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'No Spots Left',
              url: 'https://www.nospotsleft.co.uk',
              logo: 'https://www.nospotsleft.co.uk/logo.png',
              description: metadata.description,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Guildford',
                addressRegion: 'Surrey',
                postalCode: 'GU1',
                addressCountry: 'UK',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+44-1234-567890',
                contactType: 'Customer Service',
              },
            }),
          }}
        />
      </head>
      <body className={twMerge(dmSans.className, 'antialiased bg-[#EAEEFE]')}>{children}</body>
    </html>
  );
}
