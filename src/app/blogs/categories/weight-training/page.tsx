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

export default function WeightTrainingPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https:/schema.org',
              '@type': 'WebSite',
              url: 'https:/www.ivsme.in/',
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
                  url: 'https:/www.ivsme.in/icons/icon-ivsme.jpg',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https:/www.ivsme.in/search?q={search_term}',
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
              <span className="h1--span">Weight Training</span>Lift, grow, and
              redefine your limits.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="blogs--section ptb-5 flex-row">
          <div className="first-section--blog pb-2 flex-container-2">
            <p className="section--title">
              <Link href="../categories/weight-training/smarter-not-harder-why-2-day-weekly-split-is-a-better-choice">
                Science Backed Training
              </Link>
            </p>
            <div className="first-section--wrapper">
              <div className="first-section--container" />
              <div className="section--container">
                <Link href="../categories/weight-training/smarter-not-harder-why-2-day-weekly-split-is-a-better-choice">
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
                    href="../categories/weight-training/smarter-not-harder-why-2-day-weekly-split-is-a-better-choice"
                  >
                    Start now and unlock better results today!
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
          <div className="first-section--blog pb-2 flex-container-2">
            <p className="section--title">
              <Link href="../categories/weight-training/sleep-eat-lift-the-science-backed-formula-for-muscle-growth">
                Recovery: Foundation of Muscle Growth
              </Link>
            </p>
            <div className="first-section--wrapper">
              <div className="first-section--container" />
              <div className="section--container">
                <Link href="../categories/weight-training/sleep-eat-lift-the-science-backed-formula-for-muscle-growth">
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
                  Building muscle isn't just about pumping iron—it's about
                  working smarter. When you combine effective training with
                  quality sleep and the right nutrition, you{' '}
                  <Link
                    className="para--cta"
                    href="../categories/weight-training/sleep-eat-lift-the-science-backed-formula-for-muscle-growth"
                  >
                    unlock the secret to faster gains, better recovery, and
                    long-lasting results.
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
          <div className="first-section--blog pb-2 flex-container-2">
            <p className="section--title">
              <Link href="../categories/weight-training/re-racking-weights-add-functional-training-without-adding-time">
                Gym Etiquette
              </Link>
            </p>
            <div className="first-section--wrapper">
              <div className="first-section--container" />
              <div className="section--container">
                <Link href="../categories/weight-training/re-racking-weights-add-functional-training-without-adding-time">
                  <div className="img--wrapper">
                    <Image
                      src="/assets/images/woman-dumbbells-587x330.webp"
                      alt="AI photo of a woman walking with dumbbells"
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
                  Re-racking weights is a simple habit with big benefits. You're
                  not just making everyone happy but you're also adding
                  functional training to your workout and burning extra calories
                  without spending any extra time in the gym.{' '}
                  <Link
                    className="para--cta"
                    href="../categories/weight-training/re-racking-weights-add-functional-training-without-adding-time"
                  >
                    Find out how re-racking can transform your workout.
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
        </section>
      </main>
    </>
  );
}
