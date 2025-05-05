'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  className = '',
  disableActive = false,
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const combinedClassName = `${className} nav-links--a ${
    !disableActive && isActive ? 'active--nav-link' : ''
  }`;

  return (
    <Link href={href} className={combinedClassName.trim()}>
      {children}
    </Link>
  );
}
