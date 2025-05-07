// components/Footer.tsx
'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <section className="icons--social-media ptb-4">
        <a
          href="https://www.facebook.com/ivsme.in"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icons"
            src="/assets/icons/square-facebook.svg"
            alt="Link to BLcKZ Facebook Page"
            width={32}
            height={32}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/ivsme.in"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icons"
            src="/assets/icons/square-instagram.svg"
            alt="Link to BLcKZ Instagram Page"
            width={32}
            height={32}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.youtube.com/@ivsmein"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icons"
            src="/assets/icons/square-youtube.svg"
            alt="Link to BLcKZ YouTube Channel"
            width={32}
            height={32}
            loading="lazy"
          />
        </a>
      </section>
      <section className="footer--copyright ptb-2">
        <p>
          © 2025 Copyright: <a href="#top">i Vs. Me</a> | Fast loading website
          by:{' '}
          <a
            href="https://www.blckz.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            BLcKZ
          </a>
        </p>
      </section>
    </footer>
  );
}
