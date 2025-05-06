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

export default function HealthConditionsPage() {
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
              <span className="h1--span">Health Conditions</span>Lift, adapt,
              &amp; transform your strength.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="blogs--section ptb-5 flex-row">
          <div className="first-section--blog pb-2 flex-container-2">
            <p className="section--title">Guillain-Barré Syndrome</p>
            <div className="first-section--wrapper">
              {/* <div class="first-section--container"></div> */}
              <div className="section--container">
                <Link href="../categories/health-conditions/recovery-from-guillain-barre-syndrome-unlocking-the-benefits-of-weight-training">
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
                    Recovery From Guillain-Barré Syndrome: Unlocking the
                    Benefits of Weight Training
                  </h2>
                </Link>
                <p>
                  Find out how weight training can accelerate recovery from
                  Guillain-Barré Syndrome. Explore strategies to improve
                  stability, mobility, and endurance, helping you rebuild
                  strength and regain confidence.{' '}
                  <Link
                    className="para--cta"
                    href="../categories/health-conditions/recovery-from-guillain-barre-syndrome-unlocking-the-benefits-of-weight-training"
                  >
                    Start your recovery journey today!
                  </Link>
                </p>
                <Link className="categories--btn" href="/blogs">
                  Latest Blogs
                </Link>
                <Link className="categories--btn" href="/blogs/categories">
                  Blog Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="first-section--blog pb-2 flex-container-2"> </div>
        </section>
      </main>
    </>
  );
}
