import type { Metadata } from 'next';
import BlogSection from '@/app/components/BlogSection';
import { BlogData } from '@/types/BlogData';

export const metadata: Metadata = {
  title:
    'i Vs. Me - Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
  description:
    "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
  ],
  openGraph: {
    title:
      'i Vs. Me: Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
    description:
      "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
    url: 'https://www.ivsme.in',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/ivsme-logo-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.ivsme.in',
  },
};

export default async function HomePage() {
  const res = await fetch('https://www.ivsme.in/api/blogs', {
    next: { revalidate: 60 },
  });
  const blogs: BlogData[] = await res.json();

  return (
    <main>
      <div className="hero">
        <div className="hero--overlay" />
        <div className="hero--text--wrapper">
          <h1 className="hero--title title">
            <span className="h1--span">Fitness</span> The ultimate gift you can
            give yourself.
          </h1>
          <a href="#blog-section" className="transparent--btn">
            Know More
          </a>
          <div className="scroll-down-arrow tooltip">↓</div>
        </div>
      </div>

      <BlogSection blogs={blogs} />
    </main>
  );
}
