// src/app/blogs/categories/page.tsx

// src/app/blogs/categories/page.tsx
import categoryMetadata from '@/data/categoryMetadata.json';
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
  );
}
