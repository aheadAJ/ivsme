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

export default function FitnessFatLossPage() {
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
              <span className="h1--span">Fitness &amp; Fat Loss</span>Unleash a
              New You
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="blogs--section ptb-5">
          <div className="first-section--blog flex-row">
            <div className="section--container flex-container-2 pb-2">
              <Link href="../categories/fitness-and-fat-loss/new-year-new-fitness-resolution-kickstarting-your-2025-goals">
                <div className="img--wrapper">
                  <Image
                    src="/assets/images/man-barbell-sun-587x330.webp"
                    alt="AI photo of a holding a barbell"
                    width={587}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <h2 className="blogs--category--h2">
                  New Year New Fitness Resolution: Kickstarting Your 2025 Goals
                </h2>
              </Link>
              <p>
                Kickstart your fitness journey in 2025! Build lasting habits,
                stay consistent, and turn fitness into a sustainable lifestyle.{' '}
                <Link
                  className="para--cta"
                  href="../categories/fitness-and-fat-loss/new-year-new-fitness-resolution-kickstarting-your-2025-goals"
                >
                  This year make progress that lasts!{' '}
                </Link>
              </p>
              <Link className="categories--btn" href="/blogs">
                Latest Blogs
              </Link>
              <Link className="categories--btn" href="/blogs/categories">
                Blog Categories
              </Link>
            </div>
            <div className="section--container flex-container-2 pb-2">
              <Link href="../categories/fitness-and-fat-loss/courtesy-to-calories-how-reracking-weights-boosts-your-fitness">
                <div className="img--wrapper">
                  <Image
                    src="/assets/images/dumbbell-hand-picking-587x330.webp"
                    alt="A hand picking up dumbbell from floor to rerack weight"
                    width={587}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <h2 className="blogs--category--h2">
                  Courtesy to Calories: How Re-racking Weights Boosts Your
                  Fitness
                </h2>
              </Link>
              <p>
                When you think of functional fitness, re-racking weights might
                not even come to your mind. But what if I told you that it could
                boost strength, stability, and calorie burn—all without extra
                gym time?
                <Link
                  className="para--cta"
                  href="../categories/fitness-and-fat-loss/courtesy-to-calories-how-reracking-weights-boosts-your-fitness"
                >
                  Make most of your workout now!
                </Link>
              </p>
              <Link className="categories--btn" href="/blogs">
                Latest Blogs
              </Link>
              <Link className="categories--btn" href="/blogs/categories">
                Blog Categories
              </Link>
            </div>
            <div className="section--container flex-container-2 pb-2">
              <Link href="../categories/fitness-and-fat-loss/metabolism-the-hidden-factor-that-can-make-or-break-your-fat-loss-goals">
                <div className="img--wrapper">
                  <Image
                    src="/assets/images/man-metabolism-587x330.webp"
                    alt="AI photo of a man reflecting aspects of metabolism."
                    width={587}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <h2 className="blogs--category--h2">
                  Metabolism: The Hidden Factor That Can Make or Break Your Fat
                  Loss Goals
                </h2>
              </Link>
              <p>
                Weight loss and fat loss stalled? Discover how metabolism
                impacts your progress, why it slows down over time, and the
                proven strategies to reignite your fat-burning journey for
                sustainable results.
                <Link
                  className="para--cta"
                  href="../categories/fitness-and-fat-loss/metabolism-the-hidden-factor-that-can-make-or-break-your-fat-loss-goals"
                >
                  Get back on track today!
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
        </section>
      </main>
    </>
  );
}
