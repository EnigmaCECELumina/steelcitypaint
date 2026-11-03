import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>That page isn’t here.</h1>
        <Link className="button button-primary" href="/">Back to home</Link>
      </div>
    </main>
  );
}
