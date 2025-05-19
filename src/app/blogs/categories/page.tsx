// src/app/blogs/categories/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'All Blog Categories | i Vs. Me',
  description:
    'Explore blog categories like fitness, weight training, and health conditions.',
  alternates: {
    canonical: 'https://www.ivsme.in/blogs/categories',
  },
};

export default function CategoriesPage() {
  return (
    <main>
      <div className="category-hero">
        <div className="category-hero--overlay" />
        <div className="category-hero--text--wrapper">
          <h1 className="category-hero--title title">
            <span className="h1--span">Categories</span>Find your focus. Reclaim
            your life.
          </h1>
          <div className="category-hero--scroll-down-arrow tooltip">↓</div>
        </div>
      </div>

      <section className="blogs--section ptb-5 flex-row">
        {/* --- Category 1: Weight Training --- */}
        <div className="first-section--blogs pb-2 flex-container-3">
          <p className="section--title">
            <Link href="/blogs/weight-training">Weight Training</Link>
          </p>
          <div className="first-section--wrapper">
            <div className="section--container">
              <Link href="/blogs/weight-training">
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
                  Effective Weight Training Techniques for All Fitness Levels
                </h2>
              </Link>
              <p>
                Discover weight training tips and techniques for building
                strength, improving endurance, and achieving fitness goals.
                Learn how to maximize gains safely with expert advice and
                workout guides.{' '}
                <Link className="para--cta" href="/blogs/weight-training">
                  Find out how weight training can transform your life!
                </Link>
              </p>
              <Link className="categories--btn" href="/blogs">
                Read Latest Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* --- Category 2: Health Conditions --- */}
        <div className="first-section--blogs pb-2 flex-container-3">
          <p className="section--title">
            <Link href="/blogs/health-conditions">Health Conditions</Link>
          </p>
          <div className="first-section--wrapper">
            <div className="section--container">
              <Link href="/blogs/health-conditions">
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
                <Link className="para--cta" href="/blogs/health-conditions">
                  Start your recovery journey today!
                </Link>
              </p>
              <Link className="categories--btn" href="/blogs">
                Read Latest Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* --- Category 3: Fitness and Fat Loss --- */}
        <div className="first-section--blogs pb-2 flex-container-3">
          <p className="section--title">
            <Link href="/blogs/fitness-and-fat-loss">Fitness and Fat Loss</Link>
          </p>
          <div className="first-section--wrapper">
            <div className="section--container">
              <Link href="/blogs/fitness-and-fat-loss">
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
                <Link className="para--cta" href="/blogs/fitness-and-fat-loss">
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
  );
}
