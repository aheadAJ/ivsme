import fs from 'fs';
import path from 'path';
import Image from 'next/image';

interface BlogData {
  title: string;
  slug: string;
  category: string;
  categoryName?: string;
  image: string;
  altText: string;
  excerpt: string;
  cta: string;
  writer?: string;
  date?: string;
}

const blogsDirectory = path.join(process.cwd(), 'src/app/blogs');

export default async function BlogPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const filePath = path.join(blogsDirectory, category, slug, 'metadata.json');

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const blog: BlogData = JSON.parse(fileContent);

  return (
    <main className="blog-container p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">Category: {blog.category}</p>
      {blog.writer && <p className="text-sm">By {blog.writer}</p>}
      {blog.date && <p className="text-sm mb-4">{blog.date}</p>}
      <Image
        src={blog.image}
        alt={blog.altText}
        className="w-full rounded-md mb-4"
        width={800}
        height={400}
      />
      <p className="mb-6">{blog.excerpt}</p>
      <a href="#" className="text-blue-500 underline">
        {blog.cta}
      </a>
    </main>
  );
}

// ✅ IMPORTANT: Do NOT nest params inside `params: {}` in App Router
export async function generateStaticParams(): Promise<
  { category: string; slug: string }[]
> {
  const folderNames = fs.readdirSync(blogsDirectory);

  const allParams = folderNames.flatMap((category) => {
    const categoryPath = path.join(blogsDirectory, category);
    if (!fs.statSync(categoryPath).isDirectory()) return [];

    const slugs = fs.readdirSync(categoryPath).filter((slugDir) => {
      const metaPath = path.join(categoryPath, slugDir, 'metadata.json');
      return fs.existsSync(metaPath);
    });

    return slugs.map((slug) => ({
      category,
      slug,
    }));
  });

  return allParams;
}
