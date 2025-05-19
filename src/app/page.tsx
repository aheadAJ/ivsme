import ClientWrapper from '@/app/components/ClientWrapper';

import type { Metadata } from 'next';

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

export default function HomePage() {
  return (
    <main>
      <div className="hero">
        <div className="hero--overlay" />
        <div className="hero--text--wrapper">
          <h1 className="hero--title title">
            <span className="h1--span">Fitness</span> The ultimate gift you can
            give yourself.
          </h1>
          <a href="#main-section" className="transparent--btn">
            Know More
          </a>
          <div className="scroll-down-arrow tooltip">↓</div>
        </div>
      </div>
      <ClientWrapper />
    </main>
  );
}
