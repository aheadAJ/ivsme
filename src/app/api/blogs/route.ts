import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const blogsDir = path.join(process.cwd(), 'src/app/blogs');
  const categories = fs.readdirSync(blogsDir);
  const allBlogs = [];

  for (const category of categories) {
    const categoryPath = path.join(blogsDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const blogDirs = fs.readdirSync(categoryPath);

    for (const blogSlug of blogDirs) {
      const metadataPath = path.join(categoryPath, blogSlug, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        const metadataRaw = fs.readFileSync(metadataPath, 'utf-8');
        const metadata = JSON.parse(metadataRaw);
        allBlogs.push({
          ...metadata,
          category,
          slug: blogSlug,
        });
      }
    }
  }

  // Sort by date (newest first)
  allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return NextResponse.json(allBlogs);
}
