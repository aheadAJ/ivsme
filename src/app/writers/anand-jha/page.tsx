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

export default function AnandJhaPage() {
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
              <span className="h1--span">Anand Jha</span>Find Your Strength.
              Transform Your Journey.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="about-us--section mlr-95 pt-2">
          <p>
            <strong>Anand Jha</strong> is a fitness enthusiast and a struggling
            model with nearly 25 years of writing experience. His work spans TV
            documentaries, advertisements, and features in prominent Indian
            publications, including <em>The Times of India</em>,
            <em>The Economic Times</em>, and <em>Jetwings</em>.
          </p>
          <p>
            An avid photographer, Anand has had his work featured in several
            publications. He is also the author of two books:{' '}
            <Link
              className="para--cta"
              href="../../blogs/categories/books/book-review-squat-every-day-learning-lifes-lessons"
            >
              Squat Every Day: Learning Life's Lessons
            </Link>{' '}
            and{' '}
            <Link
              className="para--cta"
              href="https://www.amazon.in/dp/8195809529"
            >
              Corners &amp; Conversations: Interactions with People &amp; Places
            </Link>
            , a collection of travel articles.
          </p>
          <p>
            Currently, Anand serves as a Communications Consultant for
            advertising agencies and runs his own Content Development and
            Digital Marketing business. His projects include the travel website{' '}
            <Link className="para--cta" href="https://www.cornerz.in">
              <strong>Corners &amp; Conversations</strong>
            </Link>{' '}
            and a web development venture{' '}
            <Link className="para--cta" href="https://www.blckz.in">
              <strong>BLcKZ</strong>
            </Link>
            .
          </p>
          <p>
            His interests range widely, with a special focus on fitness, food,
            and travel.
          </p>
        </section>
        <div className="about-us--btns categories--btn--div">
          <Link className="categories--btn" href="../../blogs">
            Latest Blogs
          </Link>
          <Link className="categories--btn" href="../../blogs/categories">
            Blog Categories
          </Link>
        </div>
      </main>
    </>
  );
}
