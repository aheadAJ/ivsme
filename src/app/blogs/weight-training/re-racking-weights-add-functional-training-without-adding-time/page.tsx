import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import BookSEDBlogBottom from '@/app/components/BookSEDBlogBottom';
import BlogBottomCategories from '@/app/components/BlogBottomCategories';

export const metadata = {
  title:
    'Re-Rack Weights: Add Functional Training Without Adding Time | i Vs. Me',
  description:
    'Learn how to incorporate functional training into your weightlifting routine seamlessly, using the simple act of re-racking weights.',
  keywords: [
    're-rack weights',
    'functional training',
    'burn calories',
    'lose weight',
  ],
  openGraph: {
    title: 'Re-Rack Weights: Add Functional Training Without Adding Time',
    description:
      "Re-racking weights is a simple habit with big benefits. You're not just making everyone happy but you're also adding functional training to your workout and burning extra calories without spending any extra time in the gym.",
    url: 'https://www.ivsme.in/blogs/weight-training/re-racking-weights-add-functional-training-without-adding-time',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/woman-dumbbells-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
  },
  alternates: {
    canonical:
      'https://www.ivsme.in/blogs/weight-training/re-racking-weights-add-functional-training-without-adding-time',
  },
};

export default function ReRackingWeightsBlog() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.ivsme.in/blogs/weight-training/re-racking-weights-add-functional-training-without-adding-time',
              name: 'i Vs. Me',
              headline:
                'Re-Rack Weights | Add Functional Training Without Adding Time',
              description:
                'Re-racking weights is a simple habit with big benefits. You are not just making everyone happy but you are also adding functional training to your workout and burning extra calories without spending any extra time in the gym.',
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
            <span className="h1--span">Re-Rack Weights</span>Add Functional
            Training Without Adding Time
          </h1>
          <div className="header--highlight">
            <p>
              Re-racking weights is a simple habit with big benefits. You're not
              just making everyone happy but you're also adding functional
              training to your workout and burning extra calories without
              spending any extra time in the gym.
            </p>
            <p className="blog--author">
              Nov. 08, 2024 | By{' '}
              <Link href="/writers/anand-jha">Anand Jha</Link>
            </p>
          </div>
        </div>
        <div className="blog--flex">
          <article className="article--body">
            <div className="mlr-95-blog">
              <p className="blog--first--para blog--para--top-margin">
                "Hey, buddy," I called out, pointing at the man who had just
                finished his set. "Could you put the dumbbells back on the
                rack?"
              </p>
              <p>
                He had just completed his chest press and, after dropping the
                weights on the floor, was wandering around looking for a heavier
                pair.
              </p>
              <p>
                "Yo, buddy," he responded with a slightly gruff tone, eyes still
                focused on the gym floor. He had managed to find one dumbbell,
                but the other still eluded him. His rest period was getting
                longer and frustration had managed to creep into his legs.
              </p>
              <p>
                "It's over by the Smith machine," I said, pointing in the
                direction.
              </p>
              <p>
                "Thanks," he muttered before grabbing the dumbbell and finishing
                his set.
              </p>
              <p>That's how our path first crossed.</p>
              <p>
                The next morning, as I arrived at the gym, I saw him at the
                reception. After exchanging hellos, his and a few pleasantries,
                I asked, "Why don't you re-rack the weights?"
              </p>
              <p>
                He shrugged. "No one does. Isn't it the gym's job to put them
                back?"
              </p>
            </div>
            {/* <div class="blog--ads google-blog-ad" ></div> */}
            <div className="blog--photo">
              <div className="img--wrapper mlr-95-blog">
                <Image
                  src="/assets/images/woman-dumbbells-587x330.webp"
                  alt="AI photo of a woma walking with dumbbells"
                  width={587}
                  height={330}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mlr-95-blog">
              <p>
                As I warmed up, his response lingered. He wasn't wrong. Many of
                us leave weights scattered around. It's a habit, and habits, as
                we know, are tough to break.
              </p>
              <p>
                I was also guilty of this practise. Even though I am quite
                organized in my personal and professional life, I also at times
                left weights scattered, justifying my action by others deeds.
              </p>
              <p>
                But this realization led me to an important question: Could
                there be a way to change this behaviour, both for myself and
                others? Is it possible to make re-racking appealing? Could there
                be some benefits to re-racking?
              </p>
              <p>The more I thought, the more possibilities it opened up.</p>
            </div>
            <div className="blog--photo">
              <div className="img--wrapper  mlr-95-blog">
                <Image
                  src="/assets/images/dumbbell-300x169.webp"
                  alt="AI photo of dumbbells neatly arranged on dumbbell rack"
                  width={300}
                  height={169}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mlr-95-blog article--para--highlight">
              <h2>Why Re-Racking Weights is Good for You</h2>
              <ul>
                <li>
                  <strong>It's Functional Training</strong> <br />
                  Re-racking weights engages multiple muscle groups, simulating
                  real-life movements like lifting and carrying. This adds an
                  element of functional fitness to your routine.
                </li>
                <li>
                  <strong>Promotes Joint Mobility</strong>
                  <br />
                  Moving weights helps maintain flexibility and joint health,
                  supporting long-term mobility.
                </li>
                <li>
                  <strong>Burns Extra Calories</strong>
                  <br />
                  Every movement counts. Re-racking adds to your calorie
                  expenditure, turning a small task into a workout enhancer.
                </li>
                <li>
                  <strong>Boosts Your Mood</strong>
                  <br />
                  Accomplishing small tasks, like re-racking, gives you a huge
                  sense of satisfaction, boosts mood and makes you feel good.
                </li>
                <li>
                  <strong>Helps Others</strong>
                  <br />A tidy, organized gym benefits everyone. Not only does
                  it prevent tripping hazards, but fellow gym-goers will
                  appreciate the cleaner space.
                </li>
                <li>
                  <strong>Become a Role Model</strong>
                  <br />
                  Your actions may inspire others. Once an old, slightly frail
                  man thanked me for re-racking weights, explaining that it
                  helped him get the dumbbells easily. His gratitude gave me a
                  boost that no workout ever could.
                </li>
              </ul>
            </div>
            <div className="mlr-95-blog ">
              <p>
                Re-racking weights might seem insignificant, but it's a simple
                habit with big benefits. You're not just tidying up the gym but
                also adding an extra layer of functional training to your
                workout and making the space better for everyone.
              </p>
              <p>
                So next time you hit the gym, challenge yourself to re-rack
                those weights. It's a small change that while enhancing your
                routine, makes you happy and improves the experience for
                everyone.
              </p>
            </div>
          </article>
          <BlogBottomCategories />
        </div>
        <BookSEDBlogBottom />
      </main>
    </>
  );
}
