import { getAllBlogs } from './getAllBlogs';

export async function getAllCategories() {
  const blogs = await getAllBlogs();

  // Extract categories directly using a Set
  const categories = new Set(
    blogs.filter((blog) => blog !== null).map((blog) => blog.category)
  );

  return Array.from(categories);
}
