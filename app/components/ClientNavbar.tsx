"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.brand}>
          ← Home
        </Link>

        <div style={styles.linksWrap}>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  ...styles.link,
                  ...(active ? styles.activeLink : {}),
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  nav: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    fontSize: 13,
    fontWeight: 600,
    color: "#111",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.7)",
  },
  linksWrap: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  link: {
    fontSize: 13,
    fontWeight: 600,
    color: "#111",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.6)",
    transition: "all 0.2s ease",
  },
  activeLink: {
    background: "#111",
    color: "#fff",
    border: "1px solid #111",
  },
};