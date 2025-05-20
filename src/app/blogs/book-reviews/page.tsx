import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Book Reviews - i Vs. Me | Discover Inspiring Reads',
  description:
    'Dive into thoughtful book reviews that enlighten, empower, and entertain. Curated titles, honest opinions – only on i Vs. Me.',
  keywords: [
    'book reviews',
    'non-fiction reviews',
    'i Vs. Me books',
    'recommended reading',
  ],
  openGraph: {
    title: 'Book Reviews - i Vs. Me | Discover Inspiring Reads',
    description:
      'Dive into thoughtful book reviews that enlighten, empower, and entertain. Curated titles, honest opinions – only on i Vs. Me.',
    url: 'https://www.ivsme.in/blogs/book-reviews',
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
    canonical: 'https://www.ivsme.in/blogs/book-reviews',
  },
};

interface BlogMeta {
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
}

async function getBookReviewsBlogs(): Promise<BlogMeta[]> {
  const category = 'book-reviews';
  const categoryPath = path.join(process.cwd(), 'src/app/blogs', category);
  const blogs: BlogMeta[] = [];

  if (!fs.existsSync(categoryPath)) return blogs;

  const blogDirs = fs.readdirSync(categoryPath);
  for (const blog of blogDirs) {
    const metadataPath = path.join(categoryPath, blog, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      const metaJson = fs.readFileSync(metadataPath, 'utf8');
      const meta = JSON.parse(metaJson);
      blogs.push({
        title: meta.title,
        description: meta.description,
        category,
        image: meta.image,
        slug: blog,
      });
    }
  }

  return blogs;
}

export default async function BookReviewsPage() {
  const blogs = await getBookReviewsBlogs();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              url: 'https://www.ivsme.in/blogs/book-reviews',
              name: 'Book Reviews - i Vs. Me',
              description:
                'Curated reviews of books that inspire personal growth, knowledge, and transformation.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/icons/icon-ivsme.jpg',
                },
              },
            }),
          }}
        />
      </Head>

      <main>
        <div className="category-hero">
          <div className="hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="hero--title title">
              <span className="h1--span">Book Reviews</span>
              Read. Reflect. Reimagine.
            </h1>
            <div className="category-hero--scroll-down-arrow tooltip">↓</div>
          </div>
        </div>

        <section className="blogs--section ptb-5 flex-row">
          {blogs.map((blog) => (
            <div
              className="first-section--blogs pb-2 flex-container-3"
              key={blog.slug}
            >
              <div className="first-section--wrapper">
                <div className="section--container">
                  <Link href={`/blogs/${blog.category}/${blog.slug}`}>
                    <div className="img--wrapper">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={587}
                        height={330}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <h2 className="blogs--category--h2">{blog.title}</h2>
                  <p>
                    {blog.description}{' '}
                    <Link
                      className="para--cta"
                      href={`/blogs/${blog.category}/${blog.slug}`}
                    >
                      Read More
                    </Link>
                  </p>
                  <Link className="categories--btn" href="/blogs">
                    All Blog Categories
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
