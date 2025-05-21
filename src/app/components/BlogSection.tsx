import { BlogData } from '@/types/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import { displayNames } from '@/lib/categoryDisplayNames';

type BlogSectionProps = {
  blogs: BlogData[];
};

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
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
            <div className="img--wrapper min-w-[300px] min-h-[168px]">
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
            <Link className="categories--btn" href={`/blogs/${blog.category}`}>
              {displayNames[blog.category] || blog.category}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
