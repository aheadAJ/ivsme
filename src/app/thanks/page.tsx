// import Image from 'next/image';
// import Link from "next/link";
import Head from 'next/head';

export const metadata = {
  title:
    'i Vs. Me - Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
  description:
    "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
  ],
  metadataBase: new URL('https://www.ivsme.in'),
  openGraph: {
    title:
      'i Vs. Me: Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
    description:
      "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
    url: 'https://www.ivsme.in',
    siteName: 'i Vs. Me',
    images: [
      {
        url: 'https://www.ivsme.in/icons/ivsme-logo-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  authors: [{ name: 'Anand Jha' }],
  creator: 'Anand Jha',
  publisher: 'i Vs. Me',
  themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ivsme.in',
  },
};

export default function ThanksPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/',
              name: 'i Vs. Me',
              headline:
                'i Vs. Me - Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
              description:
                'i Vs. Me focuses on blogs and resources about health, fitness, and wellness.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/icons/icon-ivsme.jpg',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.ivsme.in/search?q={search_term}',
                'query-input': 'required name=search_term',
              },
            }),
          }}
        />
      </Head>
      <main>
        <div className="category-hero">
          <div className="category-hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="category-hero--title title">
              <span className="h1--span">Thank you</span>We will get back to you
              shortly.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            {/* <div class="category-hero--scroll-down-arrow tooltip">&#8595; </div> */}
          </div>
        </div>
        <section className="thanks--body--section"> </section>
        <section className="thanks--section mlr-95">
          <h3>
            Meanwhile, please click on the links to continue browsing our
            website.
          </h3>
          <div className="thanks--btns categories--btn--div">
            <a className="categories--btn" href="../blogs">
              Latest Blogs
            </a>
            <a className="categories--btn" href="../blogs/categories">
              Blog Categories
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
