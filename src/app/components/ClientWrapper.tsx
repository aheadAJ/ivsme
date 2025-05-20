'use client';
// import dynamic from 'next/dynamic';
// import CategoryHero from '/CategoryHero';
import BlogSection from '@/app/components/BlogSection';

// const BlogSection = dynamic(() => import('@/app/components/BlogSection'), {});

export default function ClientWrapper() {
  return (
    <>
      {/* <CategoryHero /> */}
      <BlogSection />
    </>
  );
}
