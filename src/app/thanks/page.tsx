'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ThanksPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'form_submission', {
        event_category: 'Contact',
        event_label: 'Contact Form Submitted',
        value: 1,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thank You – i Vs. Me</title>
        <meta
          name="description"
          content="Thank you for reaching out to i Vs. Me. Your fitness story submission has been received."
        />
        <link rel="canonical" href="https://www.ivsme.in/thanks" />
        <meta property="og:title" content="Thank You – i Vs. Me" />
        <meta
          property="og:description"
          content="Thank you for reaching out to i Vs. Me. Your fitness story submission has been received."
        />
        <meta property="og:url" content="https://www.ivsme.in/thanks" />
        <meta
          property="og:image"
          content="https://www.ivsme.in/assets/icons/ivsme-logo-1200x630.jpg"
        />
      </Head>

      <main className="thanks-page">
        <section className="thanks-hero">
          <div className="thanks-hero--overlay" />
          <div className="thanks-hero--text">
            <h1 className="thanks-title title">
              Thank You for Sharing Your Story!
            </h1>
            <p className="thanks-subtext">
              Your submission has been received. If shortlisted, we’ll be in
              touch soon. Until then, stay strong, stay inspired!
            </p>
            <div className="thanks-cta-buttons">
              <Link href="/blogs" className="categories--btn">
                Read Latest Blogs
              </Link>
              <Link href="/blogs/categories" className="categories--btn">
                Explore Categories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
