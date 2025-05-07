import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
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

export default function SquatEveryDayBookPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/',
              name: 'i Vs. Me',
              headline:
                'i Vs. Me - Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
              description:
                'i Vs. Me focuses on blogs and resources about health, fitness, and wellness.',
              publisher: {
                '@type': 'Organization',
                name: 'i Vs. Me',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.ivsme.in/icons/icon-ivsme.jpg',
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
        <div className="article--header">
          <h1 className="article--title">
            <span className="h1--span">Book Review</span>Squat Every Day:
            Learning Life's Lessons
          </h1>
          <div className="header--highlight">
            <p>
              In "Squat Every Day: Learning Life's Lessons,"{' '}
              <Link href="../../../writers/anand-jha" className="para--cta">
                {' '}
                Anand Jha
              </Link>{' '}
              explores the mental and physical challenges of squatting daily. As
              someone in my 40s who trains regularly, I found his reflections on
              persistence and personal growth both relatable and inspiring.
            </p>
            <p className="blog--author">
              Nov. 21, 2024
              {/* <Link
        href="../../../pages/writers/anand-jha"
        style="text-decoration: underline"
        >Anand Jha</a
      > */}
            </p>
          </div>
        </div>
        <div className="blog--flex"> </div>
        <article className="article--body">
          <div className="blog--para">
            <p className="blog--first--para blog--para--top-margin">
              As someone in my 40s who's been into weight training for a while,
              I picked up <em>Squat Every Day</em> with mixed feelings. On the
              one hand, squatting every day sounds intense—and I'm no stranger
              to pushing my limits. On the other, it's also something I knew
              could lead to burnout if not done properly. But what I didn't
              expect was how deeply personal and thought-provoking this book
              would be. It's more than just a guide to squats—it's a journey
              into the mental and emotional side of lifting and life.
            </p>
            <p>
              From the start, what I appreciated about Anand Jha's writing is
              his honesty. He doesn't hold back. He talks about the challenges
              he faced, from overtraining and neglecting recovery to relying on
              painkillers to get through a workout. There's something really
              relatable about this, especially as someone who's gone through the
              grind and pushed my body too far at times. He doesn't frame these
              moments as failures; instead, he reflects on them as lessons
              learned. One quote that really struck me was when he wrote:
            </p>
            <blockquote>
              <p>
                Our body is capable of doing more than we think it can. But it's
                the mind, with all its chatter and fear, that often holds us
                back.
              </p>
            </blockquote>
            <p>
              I can't tell you how many times I've been under a heavy barbell,
              staring down the weight, hearing that inner voice of doubt. It's
              not just about how strong your body is—it's the mental game that
              can make or break your set. This book acknowledges that.
            </p>
          </div>
          <div className="img--wrapper mr-70">
            <Image
              src="/assets/images/squat-every-day-anand-jha-587x330.webp"
              alt="Image of Book Cover 'Squat Every Day' by Anand Jha"
              width={587}
              height={330}
              loading="lazy"
            />
          </div>
          <div className="blog--para blog--para--top-margin">
            <p>
              One of the most powerful moments in the book is when Jha describes
              a squat attempt where he almost fails. He's stuck, physically
              exhausted, and mentally overwhelmed, but then something shifts:
            </p>
            <blockquote>
              <p>
                With so much going on, I was calm. My mind, having exhausted all
                its possibilities, had stopped panicking. Slowly, almost
                imperceptibly, I began to rise. A fraction of a millimeter at a
                time.
              </p>
            </blockquote>
            <p>
              That passage hit me hard. It wasn't just about lifting a heavy
              weight—it was about trusting yourself when everything feels
              impossible. It's a great reminder that persistence isn't always
              about immediate success; sometimes it's about taking things one
              step at a time, even when it feels like you're at your breaking
              point.
            </p>
            <p>
              The book also dives deep into some philosophical reflections, and
              while it can feel a little heavy at times, it's also deeply
              inspiring. Jha talks about the constant battle between "I" and
              "Me"—the ego versus the inner self. He writes:
            </p>
            <blockquote>
              <p>
                The numbers you lift do not matter. What matters is whether
                you're lifting more than last time—or whether you're lifting at
                all.
              </p>
            </blockquote>
            <p>
              This hit home for me because, as someone who's been lifting for
              years, I've definitely had those days where I didn't hit a PR or
              couldn't push as hard as I did the last time. But what matters is
              that you show up and keep going, even when progress feels slow.
            </p>
            <p>
              Jha's personal anecdotes also make the book more relatable. He
              talks about his family, particularly his daughters, and how their
              quiet pride in him kept him going during some of his toughest
              moments. It's a nice touch that reminds you that the gym isn't
              just about what happens in those few hours—it's part of a bigger
              life, full of relationships and challenges.
            </p>
            <p>
              That said, the book isn't a step-by-step fitness manual. Jha's
              reflections can sometimes get philosophical to the point where
              they pull you away from the physical training aspect. But in a
              way, that's what makes this book stand out—it's not just about
              squats or lifting weights. It's about the mental strength, the
              lessons, and the mindset you build through consistent effort.
            </p>
            <h2>Final Thoughts</h2>
            <p>
              Overall, <em>Squat Every Day</em> is a book that speaks to anyone
              who's pushed themselves—physically, mentally, or both. It's a
              reminder that progress isn't just measured in numbers or physical
              feats. Sometimes, it's about showing up, staying consistent, and
              learning from every challenge. Whether you're in your 40s like me
              or just getting started, there's something in here for anyone
              looking to grow beyond their limits.
            </p>
          </div>
          <div className="blog--para blog--para--top-margin article--para--highlight article--para--highlight--mb-16">
            <h3>
              <strong>
                This review has been drafted by ChatGPT based on the following
                command:
              </strong>
            </h3>
            <p>
              "Can you help me write an honest and engaging book review for the
              attached book from the perspective of someone in their 40s who is
              actively involved in weight training, highlighting personal
              reflections and relevant themes from the book?"
            </p>
          </div>
          <div className="book mlr-95">
            <h3 className="">
              Enjoyed this review? You'll love the book that inspired it.
            </h3>
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
                  <b>"Squat Every Day"</b> isn't just about lifting weights—it's
                  about discovering the power of persistence and mental
                  strength. Through Anand Jha's deeply personal journey, you'll
                  learn how to push past your limits, both physically and
                  mentally.
                </p>
                <p>
                  Even if you're not into weight training, the mindset this book
                  promotes will resonate with anyone striving to break barriers
                  and achieve more. It will teach you how to turn challenges
                  into opportunities for growth.
                </p>
                <p>
                  Ready to dive deeper? Get your copy now on{' '}
                  <Link
                    className="para--cta"
                    href="https://www.amazon.in/dp/8195809588"
                  >
                    Amazon
                  </Link>{' '}
                  or from the{' '}
                  <Link
                    className="para--cta"
                    href="https://www.wexpressyou.com/store/product/squat-every-day-anand-jha/"
                  >
                    {' '}
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
        </article>
        <div className="article--btn--main-div mlr-95">
          <Link href="../../../blogs">Latest Blogs</Link>
          <Link href="../../../blogs/categories">Blog Categories</Link>
        </div>
        <div className="blog--right-sidebar" />
      </main>
    </>
  );
}
