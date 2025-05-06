import Image from 'next/image';
import Link from 'next/link';
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
  openGraph: {
    title:
      'i Vs. Me: Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
    description:
      "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
    url: 'https://www.ivsme.in',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/ivsme-logo-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.ivsme.in',
  },
};

export default function Error404Page() {
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
        <div className="category-hero" style={{ minHeight: 300 }}>
          <div className="category-hero--overlay" />
          <div
            className="category-hero--text--wrapper"
            style={{ textAlign: 'center', padding: '110px 2.5% 40px 2.5%' }}
          >
            <h1
              className="category-hero--title title"
              style={{ fontSize: 32, marginBottom: 17 }}
            >
              <span
                className="h1--span"
                style={{ fontSize: 32, display: 'block' }}
              >
                Looks like this lift is a 404.
              </span>
              But don't worry—your workout is still on track!
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            {/* <div class="category-hero--scroll-down-arrow tooltip">&#8595; </div> */}
          </div>
        </div>
        <section className="about-us--section" style={{ paddingTop: 50 }}>
          {' '}
        </section>
        <section className="thanks--section mlr-95">
          <h3 style={{ lineHeight: '1.4' }}>
            Click on the buttons below to keep your workout going strong!
          </h3>
          <div className="thanks--btns categories--btn--div">
            <Link className="categories--btn" href="../blogs">
              Latest Blogs
            </Link>
            <Link className="categories--btn" href="../blogs/categories">
              Blog Categories
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
