// 'use client';

// import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title:
    'i Vs. Me | Thank You | Read Transformational Fitness Stories, Weight Training Tips, and Aging Healthy',
  description:
    'We’ll be in touch soon. Stay strong, stay inspired! Meanwhile, please click on the link to continue browsing our website.',
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
  ],
  openGraph: {
    title:
      'i Vs. Me | Thank You | Read Transformational Fitness Stories, Weight Training Tips, and Aging Healthy',
    description:
      'We’ll be in touch soon. Stay strong, stay inspired! Meanwhile, please click on the link to continue browsing our website.',
    url: 'https://www.ivsme.in/thanks',
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
    canonical: 'https://www.ivsme.in/thanks',
  },
};

export default function ThanksPage() {
  // useEffect(() => {}, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/thanks',
              name: 'i Vs. Me',
              headline:
                'i Vs. Me | Thank You | Read Transformational Fitness Stories, Weight Training Tips, and Aging Healthy',
              description:
                'We’ll be in touch soon. Stay strong, stay inspired! Meanwhile, please click on the link to continue browsing our website.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/favicon.ico',
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
          <div className="category-hero--overlay"></div>
          <div className="category-hero--text--wrapper">
            <h1 className="category-hero--title title">
              <span className="h1--span">Thank you</span>
              for Sharing Your Story!
            </h1>
            {/* <button className="transparent--btn">Know More</button>

          <div className="category-hero--scroll-down-arrow tooltip">&#8595; </div> */}
          </div>
        </div>
        <section className="thanks--body--section"> </section>
        <section className="thanks--section">
          <h3>
            We have have received your submission. If shortlisted, we’ll be in
            touch soon. Until then, stay strong, stay inspired! <br />{' '}
            Meanwhile, please click on the links to continue browsing our
            website.
          </h3>
          <div className="thanks--btns categories--btn--div">
            <Link className="categories--btn" href="/blogs">
              Latest Blogs
            </Link>
            <Link className="categories--btn" href="/blogs/categories">
              Blog Categories
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
