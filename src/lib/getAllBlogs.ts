// Not needed now but in future when we transition to mdx or dynamic structure

import { promises as fs } from 'fs';
import path from 'path';

const blogsDirectory = path.join(process.cwd(), 'src/app/blogs');

export async function getAllBlogs() {
  // Read folder names from the blogs directory
  const folderNames = await fs.readdir(blogsDirectory);

  const allBlogs = await Promise.all(
    folderNames.map(async (folderName) => {
      const metadataPath = path.join(
        blogsDirectory,
        folderName,
        'metadata.json'
      );

      // Check if the metadata file exists asynchronously
      try {
        await fs.access(metadataPath); // If not, it throws an error
      } catch {
        return null; // Skip this folder if metadata doesn't exist
      }

      // Read and parse the metadata
      const fileContent = await fs.readFile(metadataPath, 'utf-8');
      const blogData = JSON.parse(fileContent);

      return {
        slug: folderName, // Use folder name as blog slug
        category: blogData.category,
        categoryName: blogData.categoryName,
        image: blogData.image,
        altText: blogData.altText,
        title: blogData.title,
        excerpt: blogData.excerpt,
        cta: blogData.cta,
        writer: blogData.writer, // Corrected field
        date: blogData.date, // Corrected field
      };
    })
  );

  // Filter out any null values (folders without metadata)
  return allBlogs.filter((blog) => blog !== null);
}
