'use client';
// import Image from 'next/image';
import Link from 'next/link';

export default function BlogBottomCategories() {
  return (
    <div className="article--btn--main-div mlr-95-blog">
      <Link href="/blogs">Latest Blogs</Link>
      <Link href="/blogs/categories">Blog Categories</Link>
    </div>
  );
}
