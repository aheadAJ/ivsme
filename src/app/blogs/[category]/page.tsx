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

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const blogs = await getBlogsForCategory(params.category);

  if (!blogs.length) {
    return <h1>No blogs found in {params.category}</h1>;
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Category: {params.category.replace(/-/g, ' ')}
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="border p-4 rounded shadow">
            <Link href={`/blogs/${params.category}/${blog.slug}`}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-auto rounded mb-2"
                unoptimized
              />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </Link>
            <p className="text-sm text-gray-600">{blog.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

// ✅ This is critical for static generation
export async function generateStaticParams(): Promise<{ category: string }[]> {
  const blogsRoot = path.join(process.cwd(), 'src/app/blogs');
  if (!fs.existsSync(blogsRoot)) return [];

  const categories = fs
    .readdirSync(blogsRoot)
    .filter((folder) =>
      fs.statSync(path.join(blogsRoot, folder)).isDirectory()
    );

  return categories.map((category) => ({
    category,
  }));
}
