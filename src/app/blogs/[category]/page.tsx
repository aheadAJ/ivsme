import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

// ---------- Types ----------
type CategoryParams = {
  params: { category: string };
};

type CategoryMetadata = {
  title: string;
  slug: string;
  category: string;
  subcategory: string;
  tag: string;
  writer: string;
  date: string;
  image: string;
  description: string;
  heading: string;
  cta: string;
};

type CategoryMetadataMap = {
  [key: string]: CategoryMetadata;
};

// ---------- Utils ----------
function loadCategoryMetadata(): CategoryMetadataMap {
  const filePath = path.join(process.cwd(), 'src/data/categoryMetadata.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData) as CategoryMetadataMap;
}

// Load once at the top level
const categoryMap = loadCategoryMetadata();

// ---------- Metadata Generator ----------
export async function generateMetadata({
  params,
}: CategoryParams): Promise<Metadata> {
  const category = categoryMap[params.category];

  if (!category) {
    return {
      title: 'Category Not Found | i Vs. Me',
      description: 'This category does not exist.',
    };
  }

  return {
    title: `${category.title} Blogs | i Vs. Me`,
    description: category.description,
    alternates: {
      canonical: `https://www.ivsme.in/blogs/${params.category}`,
    },
  };
}

// ---------- Page Component ----------
export default function CategoryPage({ params }: CategoryParams) {
  const category = categoryMap[params.category];

  if (!category) {
    return (
      <main>
        <h1>Category not found</h1>
        <p>
          The category <code>{params.category}</code> does not exist.
        </p>
        <Link href="/blogs">← Back to Blogs</Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="category-hero">
        <div className="category-hero--overlay" />
        <div className="category-hero--text--wrapper">
          <h1 className="category-hero--title title">
            <span className="h1--span">{category.title}</span>
            {category.heading}
          </h1>
          <div className="category-hero--scroll-down-arrow tooltip">↓</div>
        </div>
      </div>

      {/* Blogs Section */}
      <section className="blogs--section ptb-5 flex-row">
        <div className="first-section--blogs pb-2 flex-container-3">
          <p className="section--title">
            <Link href={`/blogs/${params.category}`}>{category.title}</Link>
          </p>
          <div className="first-section--wrapper">
            <div className="section--container">
              <Link href={`/blogs/${params.category}`}>
                <div className="img--wrapper">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={587}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <h2 className="blogs--category--h2">{category.heading}</h2>
              </Link>
              <p>
                {category.description}{' '}
                <Link className="para--cta" href={`/blogs/${params.category}`}>
                  {category.cta}
                </Link>
              </p>
              <Link className="categories--btn" href="/blogs">
                Read Latest Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
