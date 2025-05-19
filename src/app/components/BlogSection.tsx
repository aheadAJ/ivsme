'use client';

import React, { useEffect, useState } from 'react';
import type { BlogData } from '@/types/BlogData';
import Image from 'next/image';
import { displayNames } from '@/lib/categoryDisplayNames';
import Link from 'next/link';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs') // 🔄 new API route
      .then((res) => res.json())
      .then((data: BlogData[]) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch /api/blogs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <main>
      <section id="blog-section" className="blog-section--main-page ptb-4">
        <Link href="/blogs">
          <p className="section--title" id="blogs">
            Latest Blogs
          </p>
        </Link>

        <div className="blog-section--wrapper flex-row">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="blog-section--blogs section--container pb-2 flex-container-2"
            >
              <div className="img--wrapper">
                <Link href={`/blogs/${blog.category}/${blog.slug}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={168}
                  />
                </Link>
              </div>
              <h2 className="blogs--category--h2">{blog.title}</h2>
              <p>
                {blog.description}{' '}
                <Link
                  href={`/blogs/${blog.category}/${blog.slug}`}
                  className="para--cta"
                >
                  Read more →
                </Link>
              </p>
              <Link
                className="categories--btn"
                href={`/blogs/${blog.category}`}
              >
                {displayNames[blog.category] || blog.category}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
