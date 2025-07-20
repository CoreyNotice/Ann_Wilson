import Link from 'next/link';

export default function navbarComponent() {
  return (
    <nav className="d-flex justify-content-between p-3 bg-light">
      <h1>Logo</h1>
      <div>
       
<Link href="/login" className="btn btn-primary">Login</Link>
      </div>
    </nav>
  );
}
