import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Welcome to the Next.js project</h1>
      <Link href="/login">
        Login
      </Link>
      <br></br>
      <Link href="/register">
        Register
      </Link>
    </div>
  );
}

export default Home

