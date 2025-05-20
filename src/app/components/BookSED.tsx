'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function BookSED() {
  return (
    <div className="book mlr-95">
      <h3 className="">Liked this article? You'll love this book.</h3>
      <div className="book--container grid">
        <div className="img--wrapper">
          <Image
            src="/assets/images/book-squat-every-day-anand-jha-192x300.webp"
            alt="Image of Book Cover 'Squat Every Day' by Anand Jha"
            width={192}
            height={300}
            loading="lazy"
          />
        </div>
        <div className="squat-every-day--desc">
          <p>
            <b>"Squat Every Day"</b> isn't just about lifting weights—it's about
            discovering the power of persistence and mental strength. Through
            Anand Jha's{' '}
            <Link
              className="para--cta"
              href="/blogs/book-reviews/squat-every-day-learning-lifes-lessons"
            >
              deeply personal journey{' '}
            </Link>
            , you'll learn how to push past your limits, both physically and
            mentally.
          </p>
          <p>
            Even if you're not into weight training, the mindset this book
            promotes will resonate with anyone striving to break barriers and
            achieve more. It will teach you how to turn challenges into
            opportunities for growth.
          </p>
          <p>
            Ready to dive deeper? Get your copy now on{' '}
            <Link
              className="para--cta"
              href="https://www.amazon.in/dp/8195809588"
            >
              Amazon{' '}
            </Link>
            or from the{' '}
            <Link
              className="para--cta"
              href="https://www.wexpressyou.com/store/product/squat-every-day-anand-jha/"
            >
              publisher's e-store{' '}
            </Link>
            . You can also grab the{' '}
            <Link
              className="para--cta"
              href="https://www.amazon.com/dp/B0CBWZGKJ9"
            >
              Kindle{' '}
            </Link>
            edition.
          </p>
        </div>
      </div>
    </div>
  );
}
