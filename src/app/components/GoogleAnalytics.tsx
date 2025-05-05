"use client";

import Script from "next/script";

const DEFER_GA = true; // toggle here if needed

export default function GoogleAnalytics() {
  if (DEFER_GA) {
    return (
      <Script id="ga-scroll-loader" strategy="afterInteractive">
        {`
          function loadGoogleAnalytics() {
            if (window.gtagLoaded) return;
            window.gtagLoaded = true;

            var script = document.createElement("script");
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZPWMPNQBG7";
            script.async = true;
            document.head.appendChild(script);

            script.onload = function () {
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              window.gtag = gtag;
              gtag("js", new Date());
              gtag("config", "G-ZPWMPNQBG7");
            };
          }

          window.addEventListener("scroll", function onScroll() {
            loadGoogleAnalytics();
            window.removeEventListener("scroll", onScroll);
          });
        `}
      </Script>
    );
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZPWMPNQBG7"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZPWMPNQBG7');
        `}
      </Script>
    </>
  );
}
