import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Portfolio", "/#portfolio"],
  ["Interior", "/interior-painting/"],
  ["Exterior", "/exterior-painting/"],
  ["Handyman", "/handyman/"],
  ["About", "/about/"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact/"],
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Steel City Painting and Handyman home">
        <strong>STEEL CITY PAINTING &amp; HANDYMAN</strong>
        <span className="location">HAMILTON, ON</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <details className="nav-menu">
        <summary>MENU</summary>
        <div>
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      </details>
      <Link className="header-cta" href="/contact/">Get a free estimate</Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Painting and handyman work in Hamilton, Burlington, Ancaster, Dundas, Stoney Creek and nearby.</p>
        <div className="footer-links">
          <a href="tel:+12897752020">289-775-2020</a>
          <Link href="/privacy/">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
