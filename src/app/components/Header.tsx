'use client';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="header--nav">
      <div className="header--container">
        <div className="header--logo">
          <div id="logo" className="logo">
            <NavLink href="/" className="logo--text--a" disableActive>
              i Vs. Me
            </NavLink>
            <p className="logo--sub-headline">Get Inspired. Get Fit.</p>
          </div>
        </div>

        <nav className="nav--container" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink href="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/contact-us">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
