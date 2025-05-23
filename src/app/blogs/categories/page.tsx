// src/app/blogs/categories/page.tsx
import categoryMetadata from '@/data/categoryMetadata.json';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export const metadata = {
  title: 'i Vs. Me Blog Categories: Explore Fitness Topics & Inspiration',
  description:
    'Explore the i Vs. Me blog for fitness tips, transformation stories, and motivational content to support your fitness journey.',
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
  ],
  openGraph: {
    title: 'i Vs. Me Blogs: Fitness Tips, Transformation Stories & Motivation',
    description:
      'Explore i Vs. Me blogs for the latest in fitness tips, wellness advice, and inspiring personal growth stories to support your health journey.',
    url: 'https://www.ivsme.in/blogs/categories',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/sleep-eat-train-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Blogs Meta Image',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.ivsme.in/blogs/categories',
  },
};

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/blogs/categories',
              name: 'i Vs. Me',
              headline:
                'i Vs. Me Blog Categories: Explore Fitness Topics & Inspiration',
              description:
                'Explore the i Vs. Me blog for fitness tips, transformation stories, and motivational content to support your fitness journey.',
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
          <div className="category-hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="category-hero--title title">
              <span className="h1--span">Categories</span>Find your focus.
              Reclaim your life.
            </h1>
            <div className="category-hero--scroll-down-arrow tooltip">↓</div>
          </div>
        </div>

        <section className="blogs--section ptb-5 flex-row">
          {categoryMetadata.map((cat) => (
            <div
              key={cat.slug}
              className="first-section--blogs pb-2 flex-container-3"
            >
              <p className="section--title">
                <Link href={`/blogs/${cat.slug}`}>{cat.title}</Link>
              </p>

              <div className="first-section--wrapper">
                <div className="section--container">
                  <Link href={`/blogs/${cat.slug}`}>
                    <div className="img--wrapper">
                      <Image
                        src={cat.image}
                        alt={cat.heading}
                        width={587}
                        height={330}
                        loading="lazy"
                      />
                    </div>
                    <h2 className="blogs--category--h2">{cat.heading}</h2>
                  </Link>

                  <p>
                    {cat.description}{' '}
                    <Link className="para--cta" href={`/blogs/${cat.slug}`}>
                      {cat.cta}
                    </Link>
                  </p>

                  <Link className="categories--btn" href="/blogs">
                    Read Latest Blogs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
