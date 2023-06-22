import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/userinfo">
          <a>User Info</a>
        </Link>
      </nav>
    </header>
  );
}
