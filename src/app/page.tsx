// app/page.tsx

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

export default function HomePage() {
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
        <div className="hero">
          <div className="hero--overlay" />
          <div className="hero--text--wrapper">
            <h1 className="hero--title title">
              <span className="h1--span">Fitness</span>The ultimate gift you can
              give yourself.
            </h1>
            <a href="#main-section" className="transparent--btn">
              Know More
            </a>
            <div className="scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <div id="main-section" className="main--section">
          <section id="blog-section" className="blog-section--main-page ptb-5">
            <Link href="/blogs">
              <p className="section--title" id="blogs">
                Latest Blogs{' '}
              </p>
            </Link>
            <div className="blog-section--wrapper flex-row">
              {/* <div class="first-section--container"> </div> */}
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/fitness-and-fat-loss/new-year-new-fitness-resolution-kickstarting-your-2025-goals">
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
                    New Year New Fitness Resolution: Kickstarting Your 2025
                    Goals
                  </h2>
                </Link>
                <p>
                  Kickstart your fitness journey in 2025! Build lasting habits,
                  stay consistent, and turn fitness into a sustainable
                  lifestyle.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/fitness-and-fat-loss/new-year-new-fitness-resolution-kickstarting-your-2025-goals"
                  >
                    This year make progress that lasts!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/fitness-and-fat-loss"
                >
                  Fitness &amp; Fat Loss
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/weight-training/smarter-not-harder-why-2-day-weekly-split-is-a-better-choice">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/ai-img-train-smart-587x330.webp"
                      alt="AI photo of a man squatting the gym while his trainer is running towards him"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Smarter Not Harder: Why 2-day Weekly Split is a Better
                    Choice
                  </h2>
                </Link>
                <p>
                  Transform your training with a science-backed 2-day weekly
                  split. Optimize muscle growth, balance efficiency and
                  recovery, and enjoy your lifestyle.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/weight-training/smarter-not-harder-why-2-day-weekly-split-is-a-better-choice"
                  >
                    Start now and unlock better results today!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/weight-training"
                >
                  Weight Training
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/weight-training/sleep-eat-lift-the-science-backed-formula-for-muscle-growth">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/sleep-eat-train-587x330.webp"
                      alt="AI photo of a man training with weights, healthy food and sleeping"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Sleep Eat Lift: The Ultimate Science-Backed Guide to Muscle
                    Growth
                  </h2>
                </Link>
                <p>
                  Building muscle is not just about pumping iron—it is about
                  working smarter. When you combine effective training with
                  quality sleep and the right nutrition, you{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/weight-training/sleep-eat-lift-the-science-backed-formula-for-muscle-growth"
                  >
                    unlock the secret to faster gains, better recovery, and
                    long-lasting results.
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/weight-training"
                >
                  Weight Training
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/fitness-and-fat-loss/courtesy-to-calories-how-reracking-weights-boosts-your-fitness">
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
                  not even come to your mind. But what if I told you that it
                  could boost strength, stability, and calorie burn—all without
                  extra gym time?{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/fitness-and-fat-loss/courtesy-to-calories-how-reracking-weights-boosts-your-fitness"
                  >
                    Make most of your workout now!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/fitness-and-fat-loss"
                >
                  Fitness &amp; Fat Loss
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/fitness-and-fat-loss/metabolism-the-hidden-factor-that-can-make-or-break-your-fat-loss-goals">
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
                    Metabolism: The Hidden Factor That Can Make or Break Your
                    Fat Loss Goals
                  </h2>
                </Link>
                <p>
                  Weight loss and fat loss stalled? Discover how metabolism
                  impacts your progress, why it slows down over time, and the
                  proven strategies to reignite your fat-burning journey for
                  sustainable results.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/fitness-and-fat-loss/metabolism-the-hidden-factor-that-can-make-or-break-your-fat-loss-goals"
                  >
                    Get back on track today!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/fitness-and-fat-loss"
                >
                  Fitness &amp; Fat Loss
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/health-conditions/recovery-from-guillain-barre-syndrome-unlocking-the-benefits-of-weight-training">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/man-dumbbell-curl-587x330.webp"
                      alt="AI photo of a man doing dumbbell curl"
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
                    href="/blogs/categories/health-conditions/recovery-from-guillain-barre-syndrome-unlocking-the-benefits-of-weight-training"
                  >
                    Start your recovery journey today!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/health-conditions"
                >
                  Health Conditions
                </Link>
              </div>
              <div className="blog-section--blogs section--container pb-2 flex-container-2">
                <Link href="/blogs/categories/weight-training/re-racking-weights-add-functional-training-without-adding-time">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/woman-dumbbells-587x330.webp"
                      alt="AI photo of a woman with dumbbells"
                      width={587}
                      height={330}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="blogs--category--h2">
                    Re-Rack Weights: Add Functional Training Without Adding Time
                  </h2>
                </Link>
                <p>
                  Re-racking weights is a simple habit with big benefits. You
                  are not just making everyone happy but you are also adding
                  functional training to your workout and burning extra calories
                  without spending any extra time in the gym.{' '}
                  <Link
                    className="para--cta"
                    href="/blogs/categories/weight-training/re-racking-weights-add-functional-training-without-adding-time"
                  >
                    Find out how re-racking can transform your workout!
                  </Link>
                </p>
                <Link
                  className="categories--btn"
                  href="/blogs/categories/weight-training"
                >
                  Weight Training
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
