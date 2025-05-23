import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title:
    'Your fitness story can ignite countless transformations! Share your story with ivsme.in and inspire others to achieve their fitness goals.',
  description:
    'Connect with us at ivsme.in to share your transformational story. Whether it’s fitness, weight training, or personal growth, your journey can inspire countless others to fuel a healthier, stronger community together.',
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
  ],
  openGraph: {
    title:
      'Your fitness story can ignite countless transformations! Share your story with ivsme.in and inspire others to achieve their fitness goals.',
    description:
      'Connect with us at ivsme.in to share your transformational story. Whether it’s fitness, weight training, or personal growth, your journey can inspire countless others to fuel a healthier, stronger community together.',
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
    canonical: 'https://www.ivsme.in/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/contact-us',
              name: 'i Vs. Me',
              headline:
                'Your fitness story can ignite countless transformations! Share your story with ivsme.in and inspire others to achieve their fitness goals.',
              description:
                'Connect with us at ivsme.in to share your transformational story. Whether it’s fitness, weight training, or personal growth, your journey can inspire countless others to fuel a healthier, stronger community together.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/favicon.ico',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.ivsme.in/search?q={search_term}',
                'query-input': 'required name=search_term',
              },
            }),
          }}
        />
      </Head>
      <main>
        <div className="category-hero">
          <div className="category-hero--overlay" />
          <div className="category-hero--text--wrapper">
            <h1 className="category-hero--title title">
              <span className="h1--span">Inspire Others</span>Share Your
              Transformation Story.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="contact-us--section">
          <div className="contact-us--section--header">
            <h2>
              Your fitness story can ignite countless transformation journeys!
            </h2>
            <p>
              Simply say hello, share a few details about your fitness journey,
              upload a photo, and hit submit. If shortlisted, we'll feature your
              story on our website to inspire and empower others to chase their
              own fitness goals. Let's come together and build a healthier,
              stronger community—one story at a time!
            </p>
            <div className="contact-us--btns--header">
              <Link className="categories--btn" href="/blogs">
                Latest Blogs
              </Link>
              <Link className="categories--btn" href="/blogs/categories">
                Blog Categories
              </Link>
            </div>
          </div>
          <div id="contact-form--section" className="contact-form--section">
            <form
              action="https://formsubmit.co/005748146a2655c6f06992608c35813d"
              encType="multipart/form-data"
              method="POST"
              id="contact-form"
            >
              <input
                type="hidden"
                name="_next"
                defaultValue="https://www.ivsme.in/thanks"
              />
              <input
                type="hidden"
                name="_autoresponse"
                defaultValue="We really appreciate you for snatching some moments from your valueable time and contacting us. Surely, we’ll get back to you soon. Until then, stay strong, stay inspired."
              />
              <input
                type="hidden"
                name="_subject"
                defaultValue="i Vs. Me Contact Form"
              />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                defaultValue={''}
              />
              <label htmlFor="file-upload" className="file-upload-label">
                Upload Photo
              </label>
              <input
                type="file"
                id="file-upload"
                name="attachment"
                accept="image/png, image/jpeg"
              />
              <button className="contact-us-form--btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
        <div className="contact-us--btns categories--btn--div mlr-95">
          <Link className="categories--btn" href="/blogs">
            Latest Blogs
          </Link>
          <Link className="categories--btn" href="/blogs/categories">
            Blog Categories
          </Link>
        </div>
      </main>
    </>
  );
}
