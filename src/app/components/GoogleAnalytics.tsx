'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

// TypeScript support for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag('config', 'G-ZPWMPNQBG7', {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZPWMPNQBG7"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-ZPWMPNQBG7', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
