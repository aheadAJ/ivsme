import { getAllBlogs } from './getAllBlogs';

export async function getBlogsByCategory(category: string) {
  const blogs = await getAllBlogs();

  // Normalize the category once and filter blogs
  const normalizedCategory = category.toLowerCase();

  return blogs
    .filter((blog) => blog !== null) // Remove nulls
    .filter((blog) => blog.category.toLowerCase() === normalizedCategory);
}
