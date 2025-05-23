import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title:
    'i Vs. Me About Us: Transformational Fitness Stories, Weight Training sTips, and Aging Healthy',
  description:
    'From inspiring transformations to the latest in weight training and fitness trends, our magazine covers everything you need to fuel your journey to a healthier, stronger you.',
  keywords: [
    'fitness inspiration',
    'health transformation',
    'wellness journey',
    'inspiring fitness stories',
    'Fitness Transformation',
    'Weight Training Tips',
    'Strength Training',
    'Healthy Lifestyle',
    'Fitness Inspiration',
    'Transformational Stories',
    'Fitness Motivation',
    'Active Aging',
  ],
  openGraph: {
    title:
      'i Vs. Me About Us: Transformational Fitness Stories, Weight Training Tips, and Aging Healthy',
    description:
      'From inspiring transformations to the latest in weight training and fitness trends, our magazine covers everything you need to fuel your journey to a healthier, stronger you.',
    url: 'https://www.ivsme.in/about-us',
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
    canonical: 'https://www.ivsme.in/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/about-us',
              name: 'i Vs. Me About Us Page',
              headline:
                'i Vs. Me About Us: Transformational Fitness Stories, Weight Training Tips, and Aging Healthy',
              description:
                'From inspiring transformations to the latest in weight training and fitness trends, our magazine covers everything you need to fuel your journey to a healthier, stronger you.',
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
              <span className="h1--span">About Us</span>Find Your Strength.
              Transform Your Journey.
            </h1>
            {/* <button class="transparent--btn">Know More</button> */}
            <div className="category-hero--scroll-down-arrow tooltip">
              ↓{/* <span class="tooltiptext">Tooltip text</span> */}
            </div>
          </div>
        </div>
        <section className="about-us--section mlr-95 pt-2">
          <p>
            Fitness is an elusive word. Its meaning depends on the person you
            talk to. For most, it implies how smart you look, which, if you
            break it, comes down to your girth, your belly circumference. Maybe
            this interpretation works if you are in your teens or twenties,
            after which the definition begins to change.
          </p>
          <h2 className="article--para--border-left">
            In 40s &amp; 50s the word "fitness" acquires a new meaning
          </h2>
          <p>
            However, once you enter your <strong>forties &amp; fifties</strong>,
            the word fitness acquires an entirely a new connotation.
            <q>
              How is your blood pressure? How are your sugar levels? Is your
              cholesterol shooting up?
            </q>
            These are a few new vocabularies that you find have begun to
            increasingly enter your conversations. Caught up by age, we seem to
            resign, like dried leaves at the whims of the wind, to fate and to
            stiffness in the back, lack of joint mobility, loss of balance, and
            a general onset of fatigue.
          </p>
          <p>
            We see a doctor when things take a drastic turn, but mostly, we are
            content with superficial measures, just like colouring the hair,
            addressing not the cause but the symptom.
          </p>
          <p>
            But beneath that veneer, your ageing body is imploring you not to
            neglect it. It is looking at you for help, beseeching that it still
            has age left in it.
          </p>
          <h2 className="article--para--border-left">
            Yes, you can reverse your body's ageing process
          </h2>
          <p>
            The good news is that, unlike your greying hair, your body's ageing
            process can be reversed to a large extent. This is what
            <strong>"I Vs. Me"</strong> is about.
          </p>
          <p>
            At <strong>"I Vs. Me"</strong>, you will come across innumerable
            stories of grit and determination, the saga of men and women like
            you who have overcome obstacles, not only transformed themselves and
            got the physique they wanted but also reduced their dependence on
            medicines (in consultation with their Physicians) and are leading a
            life without their backs protesting, and robust knees, muscles eager
            to lift, and the vitality to embrace an active ageing process.
          </p>
          <p>
            <strong>Remember</strong>, fitness is not about looking smart or
            fitting into old jeans. More than that, it is reflected in your
            blood report and the doctor's opinion about you. If you are fit,
            your body doesn't lose its balance easily <em>(stability)</em>,
            joints don't protest when you move <em>(mobility)</em>, you go about
            your activities without batting an eyelid <em>(flexibility)</em>,
            your cardiovascular system is robust, sturdy bones and strong
            muscles can carry groceries.
          </p>
          <p>
            And yes, a smart physique and a lean waistline? They're just the
            added bonus.
          </p>
        </section>
        <div className="about-us--btns categories--btn--div">
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
