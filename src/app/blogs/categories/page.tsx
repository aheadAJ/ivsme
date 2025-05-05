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
              <span className="h1--span">Categories</span>Find your focus.
              Reclaim your life.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="blogs--section ptb-5 flex-row">
          <div className="first-section--blogs pb-2 flex-container-3">
            <p className="section--title">
              <Link href="/blogs/categories/weight-training">
                Weight Training
              </Link>
            </p>
            <div className="first-section--wrapper">
              {/* <div class="first-section--container"></div> */}
              <div className="section--container">
                <Link href="/blogs/categories/weight-training">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/woman-dumbbells-587x330.webp"
                      alt="AI photo of a woman wallking with dumbbells"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Effective Weight Training Techniques for All Fitness Levels
                  </h2>
                </Link>
                <p>
                  Discover weight training tips and techniques for building
                  strength, improving endurance, and achieving fitness goals.
                  Learn how to maximize gains safely with expert advice and
                  workout guides.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/weight-training"
                  >
                    Find out how weight training can transform your life!
                  </Link>
                </p>
                <Link className="categories--btn" href="/blogs">
                  Read Latest Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="first-section--blogs pb-2 flex-container-3">
            <p className="section--title">
              <Link href="/blogs/categories/health-conditions">
                Health Conditions
              </Link>
            </p>
            <div className="first-section--wrapper">
              {/* <div class="first-section--container"></div> */}
              <div className="section--container">
                <Link href="/blogs/categories/health-conditions">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/man-dumbbell-curl-587x330.webp"
                      alt="AI photo of a man doing dumbbell curls"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Weight Training for Health Conditions: Safe, Effective, and
                    Empowering
                  </h2>
                </Link>
                <p>
                  Discover how weight training can aid recovery and improve
                  strength for individuals managing specific health conditions.
                  Get expert tips on adapting workouts safely for optimal health
                  and resilience.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/health-conditions"
                  >
                    Start your recovery journey today!
                  </Link>
                </p>
                <Link className="categories--btn" href="/blogs">
                  Read Latest Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="first-section--blogs pb-2 flex-container-3">
            <p className="section--title">
              <Link href="/blogs/categories/fitness-and-fat-loss">
                Fitness And Fat Loss
              </Link>
            </p>
            <div className="first-section--wrapper">
              {/* <div class="first-section--container"></div> */}
              <div className="section--container">
                <Link href="/blogs/categories/fitness-and-fat-loss">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/man-metabolism-587x330.webp"
                      alt="AI photo of a man reflecting aspects of metabolism"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Fitness and Fat Loss: Your Path to Unleashing a New You
                  </h2>
                </Link>
                <p>
                  Explore expert insights, proven strategies, and inspiring
                  stories to transform your fitness journey. From effective
                  workouts to sustainable fat loss tips, we've got you covered.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/fitness-and-fat-loss"
                  >
                    Start your journey to a healthier, fitter you today!
                  </Link>
                </p>
                <Link className="categories--btn" href="/blogs">
                  Read Latest Blogs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
