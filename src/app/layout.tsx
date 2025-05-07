// app/layout.tsx

// import '@/styles/main/main.scss'; // adjust path if needed
// import Header from '@/components/Header'; // Adjust path to your header component
// import Footer from '@/components/Footer'; // Adjust path to your footer component
import '../styles/main.scss';
import Header from './components/Header'; // if components is one level up
import Footer from './components/Footer'; // if components is one level up
import GoogleAnalytics from './components/GoogleAnalytics'; // adjust path if needed

// Global defaults for the entire site

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
  metadataBase: new URL('https://www.ivsme.in'),
  openGraph: {
    title:
      'i Vs. Me: Challenge Your Limits 🏋️ Transform Your Life | The Ultimate Fitness Magazine',
    description:
      "Transform your life with 'i Vs. Me.' Discover fitness tips and inspiring transformation stories to fuel your journey to a stronger, healthier you.",
    url: 'https://www.ivsme.in',
    siteName: 'i Vs. Me',
    images: [
      {
        url: 'https://www.ivsme.in/assets/icons/ivsme-logo-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'i Vs. Me Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  authors: [{ name: 'Anand Jha' }],
  creator: 'Anand Jha',
  publisher: 'i Vs. Me',
  alternates: {
    canonical: 'https://www.ivsme.in',
  },
};

// Move `themeColor` here:
export const viewport = {
  themeColor: '#ffffff',
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
