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
      <main>
        <div className="category-hero">
          <div className="category-hero--overlay"></div>
          <div className="category-hero--text--wrapper">
            <h1 className="category-hero--title title">
              <span className="h1--span">Thank you</span>
              for Sharing Your Story!
            </h1>
            {/* <button className="transparent--btn">Know More</button>

          <div className="category-hero--scroll-down-arrow tooltip">&#8595; </div> */}
          </div>
        </div>
        <section className="thanks--body--section"> </section>
        <section className="thanks--section">
          <h3>
            Your submission has been received. If shortlisted, we’ll be in touch
            soon. Until then, stay strong, stay inspired! <br /> Meanwhile,
            please click on the links to continue browsing our website.
          </h3>
          <div className="thanks--btns categories--btn--div">
            <Link className="categories--btn" href="/blogs">
              Latest Blogs
            </Link>
            <Link className="categories--btn" href="/blogs/categories">
              Blog Categories
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
