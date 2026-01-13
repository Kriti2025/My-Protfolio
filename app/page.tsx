import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.page}>
      {/* Top Nav */}
      <header style={styles.header}>
        <div style={styles.logo}>PORTFOLIO</div>

        <nav style={styles.nav}>
  <Link href="/about" style={styles.navLink}>About</Link>
  <Link href="/projects" style={styles.navLink}>Projects</Link>
  <Link href="/skills" style={styles.navLink}>Skills</Link>
  <Link href="/contact" style={styles.navLink}>Contact</Link>
</nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.photoBox}>
  <img
    src="/profile.jpg"
    alt="Profile photo"
    style={styles.profileImg}
  />
</div>

        <div style={styles.content}>
          <p style={styles.tag}>Electronic Communication & Information Engineering Student</p>

          <h1 style={styles.title}>
            Hi, I’m <span style={{ color: "#111" }}>Kriti Thapaliya</span>
          </h1>

          <p style={styles.subtitle}>
            Turning signals into systems. Bridging electronics,communication and secure systems.
          </p>

          <div style={styles.buttons}>
            <Link href="/projects" style={styles.primaryBtn}>View Projects</Link>
            <Link href="/contact" style={styles.secondaryBtn}>Contact Me</Link>
          </div>

          <div style={styles.miniInfo}>
            <div>
              <div style={styles.miniTitle}>Focus</div>
              <div style={styles.miniText}>Simulation • Signals • Security</div>
            </div>
            <div>
              <div style={styles.miniTitle}>Currently</div>
              <div style={styles.miniText}>Exploring communication system+system-level design</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#ffffff",
    padding: "28px 40px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    fontSize: 12,
    letterSpacing: 3,
    color: "#555",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    gap: 18,
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#111",
    fontSize: 14,
    padding: "8px 10px",
    borderRadius: 10,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "360px 1fr",
    gap: 40,
    alignItems: "center",
    maxWidth: 1100,
    margin: "0 auto",
  },
  photoBox: {
    width: 340,
    height: 420,
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid #eee",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    maxWidth: 640,
  },
  tag: {
    fontSize: 12,
    letterSpacing: 2,
    color: "#666",
    marginBottom: 10,
  },
  title: {
    fontSize: 44,
    margin: "8px 0 12px 0",
    lineHeight: 1.1,
    color: "#111",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    lineHeight: 1.7,
    marginBottom: 18,
  },
  buttons: {
    display: "flex",
    gap: 12,
    marginTop: 10,
    flexWrap: "wrap",
  },
  primaryBtn: {
    textDecoration: "none",
    background: "#111",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 12,
    fontSize: 14,
  },
  secondaryBtn: {
    textDecoration: "none",
    background: "#fff",
    color: "#111",
    padding: "12px 16px",
    borderRadius: 12,
    fontSize: 14,
    border: "1px solid #ddd",
  },
  miniInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginTop: 22,
    paddingTop: 18,
    borderTop: "1px solid #eee",
  },
  miniTitle: {
    fontSize: 12,
    color: "#777",
    letterSpacing: 1,
    marginBottom: 6,
  },
  miniText: {
    fontSize: 14,
    color: "#111",
  },
};