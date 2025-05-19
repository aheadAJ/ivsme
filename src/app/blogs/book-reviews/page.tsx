import fs from 'fs';
import path from 'path';
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

interface BlogMeta {
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
}

async function getAllBlogMetadata(): Promise<BlogMeta[]> {
  const blogDir = path.join(process.cwd(), 'src/app/blogs');
  const categoryDirs = fs.readdirSync(blogDir);
  const blogs: BlogMeta[] = [];

  for (const category of categoryDirs) {
    const categoryPath = path.join(blogDir, category);
    if (!fs.lstatSync(categoryPath).isDirectory()) continue;

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
          slug: `${blog}`,
        });
      }
    }
  }

  return blogs;
}

export default async function BlogsPage() {
  const blogs = await getAllBlogMetadata();

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
          <div className="hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="hero--title title">
              <span className="h1--span">Latest Blogs</span>Empower your journey
              to fitness &amp; vitality.
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
                  <Link
                    className="categories--btn"
                    href={`/blogs/${blog.category}`}
                  >
                    Blog Categories
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
