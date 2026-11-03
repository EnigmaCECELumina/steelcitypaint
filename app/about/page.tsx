import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Brent",
  description: "Meet Brent, who quotes and works on residential painting and repair jobs in Hamilton and nearby communities.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">ABOUT // STEEL CITY PAINTING &amp; HANDYMAN</p>
        <h1>Hi, I’m Brent.</h1>
        <p>I paint and fix homes in Hamilton and the surrounding area. I keep the business small on purpose, so the person who quotes your job is the one doing the work. If something isn’t right after we leave, call me and I’ll come back.</p>
      </header>
      <section className="section closing">
        <div><h2>LET’S TALK ABOUT YOUR PROJECT.</h2><p>Call or send a few details about the work you need done.</p></div>
        <Link className="button button-primary" href="/contact/">Contact Brent</Link>
      </section>
    </main>
  );
}
