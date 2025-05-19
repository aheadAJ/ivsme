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

type PageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function BlogPage({ params }: PageProps) {
  const { category, slug } = params;

  const filePath = path.join(blogsDirectory, category, slug, 'metadata.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const blog: BlogData = JSON.parse(fileContent);

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
