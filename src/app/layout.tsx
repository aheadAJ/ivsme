// app/layout.tsx

// import "@/styles/main/main.scss"; // adjust path if needed
// import Header from "@/components/Header"; // Adjust path to your header component
// import Footer from "@/components/Footer"; // Adjust path to your footer component
import '../styles/main.scss';
import Header from './components/Header'; // if components is one level up
import Footer from './components/Footer'; // if components is one level up
import GoogleAnalytics from './components/GoogleAnalytics'; // adjust path if needed

// Global defaults for the entire site
export const metadata = {
  metadataBase: new URL('https://www.ivsme.in'),
  title: {
    default: 'i Vs. Me | Challenge Your Limits 🏋️ Transform Your Life',
    template: '%s | i Vs. Me',
  },
  description: 'Challenge Your Limits. Transform Your Life.',
  keywords: [
    'fitness inspiration',
    'wellness transformation',
    'mental strength',
    'health journey',
  ],
  openGraph: {
    title: 'i Vs. Me – Challenge Your Limits 🏋️ Transform Your Life',
    description:
      'Explore fitness stories, personal transformation journeys, and tools to unlock your potential.',
    url: 'https://www.ivsme.in',
    siteName: 'i Vs. Me',
    images: [
      {
        url: '/assets/icons/ivsme-logo-1200x630.jpg', // uses /public path
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ivsme.in',
  },
  authors: [{ name: 'Anand Jha' }],
  creator: 'Anand Jha',
  publisher: 'i Vs. Me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/assets/fonts/BlackOpsOne-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preload Images */}
        <link
          rel="preload"
          href="/assets/images/hero-chin-up-711x400.webp"
          as="image"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* ✅ Google Analytics Toggle */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
