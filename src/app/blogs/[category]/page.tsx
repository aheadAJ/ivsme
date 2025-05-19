import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

interface BlogMeta {
  title: string;
  description: string;
  image: string;
  slug: string;
}

async function getBlogsForCategory(category: string): Promise<BlogMeta[]> {
  const categoryPath = path.join(process.cwd(), 'src/app/blogs', category);
  if (!fs.existsSync(categoryPath)) return [];

  const blogDirs = fs.readdirSync(categoryPath);
  const blogs: BlogMeta[] = [];

  for (const blogDir of blogDirs) {
    const metadataPath = path.join(categoryPath, blogDir, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      const meta = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
      blogs.push({
        title: meta.title,
        description: meta.description,
        image: meta.image,
        slug: blogDir,
      });
    }
  }

  return blogs;
}

export async function generateStaticParams() {
  const blogRoot = path.join(process.cwd(), 'src/app/blogs');
  const categories = fs.readdirSync(blogRoot).filter((dir) => {
    const fullPath = path.join(blogRoot, dir);
    return fs.statSync(fullPath).isDirectory() && dir !== '[category]';
  });

  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const blogs = await getBlogsForCategory(params.category);

  if (!blogs.length) {
    return <h1>No blogs found in {params.category}</h1>;
  }

  return (
    <main>
      <h1>Category: {params.category.replace(/-/g, ' ')}</h1>
      <section>
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <Link href={`/blogs/${params.category}/${blog.slug}`}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                unoptimized
              />
              <h2>{blog.title}</h2>
            </Link>
            <p>{blog.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
