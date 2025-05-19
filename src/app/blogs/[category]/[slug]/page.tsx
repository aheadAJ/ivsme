import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

  let blog: BlogData;

  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    blog = JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading blog metadata at ${filePath}`, error);
    return notFound();
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>Category: {blog.category}</p>
      {blog.writer && <p>By {blog.writer}</p>}
      {blog.date && <p>{blog.date}</p>}
      <Image src={blog.image} alt={blog.altText} width={800} height={400} />
      <p>{blog.excerpt}</p>
      <a href="#">{blog.cta}</a>
    </main>
  );
}

// ✅ Generates static paths for all blogs
export async function generateStaticParams() {
  const categories = fs.readdirSync(blogsDirectory);

  const allParams = categories.flatMap((category) => {
    const slugDir = path.join(blogsDirectory, category);
    const slugs = fs.readdirSync(slugDir);

    return slugs.map((slug) => ({
      category,
      slug,
    }));
  });

  return allParams;
}

// ✅ Optional: Generate SEO metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const filePath = path.join(
    blogsDirectory,
    params.category,
    params.slug,
    'metadata.json'
  );

  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const blog: BlogData = JSON.parse(fileContent);

    return {
      title: blog.title,
      description: blog.excerpt,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading metadata:', error.message);
    }

    return {
      title: 'Blog Post Not Found',
    };
  }
}
