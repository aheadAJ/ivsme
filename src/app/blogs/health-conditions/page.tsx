import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Health Conditions Blogs - i Vs. Me | Wellness, Recovery & Prevention',
  description:
    'Understand and manage health conditions better with insights, expert advice, and recovery stories from i Vs. Me.',
  keywords: ['health conditions', 'weight training for GBS'],
  openGraph: {
    title:
      'Health Conditions Blogs - i Vs. Me | Wellness, Recovery & Prevention',
    description:
      'Understand and manage health conditions better with insights, expert advice, and recovery stories from i Vs. Me.',
    url: 'https://www.ivsme.in/blogs/health-conditions',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/man-dumbbell-curl-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Health Conditions Category Meta Image',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.ivsme.in/blogs/health-conditions',
  },
};

interface BlogMeta {
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}

async function getHealthConditionsBlogs(): Promise<BlogMeta[]> {
  const category = 'health-conditions';
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
        date: meta.date,
      });
    }
  }

  return blogs;
}

export default async function HealthConditionsPage() {
  const blogs = await getHealthConditionsBlogs();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              url: 'https://www.ivsme.in/blogs/health-conditions',
              name: 'Health Conditions Blogs - i Vs. Me',
              description:
                'Explore in-depth guides and real-life journeys related to managing and overcoming health conditions.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/favicon.ico',
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
              <span className="h1--span">Health Conditions</span>
              Empower your healing. Embrace well-being.
            </h1>
            <div className="category-hero--scroll-down-arrow tooltip">↓</div>
          </div>
        </div>

        <section className="blogs--section ptb-5 flex-row">
          {[...blogs]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((blog) => (
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
