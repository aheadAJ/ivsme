import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'i Vs. Me Blogs: Fitness Tips, Transformation Stories & Motivation',
  description:
    'Explore i Vs. Me blogs for the latest in fitness tips, wellness advice, and inspiring personal growth stories to support your health journey.',
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
    url: 'https://www.ivsme.in/blogs',
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
    canonical: 'https://www.ivsme.in/blogs',
  },
};

interface BlogMeta {
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  date: string; // added to sort blogs by date
}

async function getAllBlogs(): Promise<BlogMeta[]> {
  const blogRoot = path.join(process.cwd(), 'src/app/blogs');
  const categoryDirs = fs.readdirSync(blogRoot);
  const blogs: BlogMeta[] = [];

  for (const category of categoryDirs) {
    const categoryPath = path.join(blogRoot, category);
    if (!fs.statSync(categoryPath).isDirectory() || category === 'categories')
      continue;

    const blogFolders = fs.readdirSync(categoryPath);
    for (const blogSlug of blogFolders) {
      const metaPath = path.join(categoryPath, blogSlug, 'metadata.json');
      if (fs.existsSync(metaPath)) {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        blogs.push({
          title: meta.title,
          description: meta.description,
          category,
          image: meta.image,
          slug: blogSlug,
          date: meta.date,
        });
      }
    }
  }

  // Sort by date (latest first)
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/blogs',
              name: 'i Vs. Me',
              headline:
                'i Vs. Me Blogs: Fitness Tips, Transformation Stories & Motivation',
              description:
                'Explore i Vs. Me blogs for the latest in fitness tips, wellness advice, and inspiring personal growth stories to support your health journey.',
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
          <div className="hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="hero--title title">
              <span className="h1--span">Latest Blogs</span> Empower your
              journey to fitness &amp; vitality.
            </h1>
            <div className="category-hero--scroll-down-arrow tooltip">↓</div>
          </div>
        </div>

        <section className="blogs--section ptb-5 flex-row">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="first-section--blogs pb-2 flex-container-3"
            >
              <p className="section--title">
                <Link href={`/blogs/${blog.category}`}>
                  {blog.category.replace(/-/g, ' ')}
                </Link>
              </p>

              <div className="first-section--wrapper">
                <div className="section--container">
                  <Link href={`/blogs/${blog.category}/${blog.slug}`}>
                    <div className="img--wrapper">
                      <Image
                        src={blog.image}
                        alt={blog.title || 'Blog image'}
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

                  <Link
                    className="categories--btn"
                    href={`/blogs/${blog.category}`}
                  >
                    More from this category
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
