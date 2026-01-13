export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h1 style={styles.title}>Contact</h1>
        <p style={styles.subtitle}>
          Feel free to reach out for collaborations, projects, or opportunities.
        </p>

        <div style={styles.card}>
          {/* Email */}
          <div style={styles.item}>
            <span style={styles.icon}>📧</span>
            <div>
              <span style={styles.label}>Email</span>
              <a
                href="mailto:kritikhapadia4@gmail.com"
                style={styles.link}
              >
                kritithapaliya4@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div style={styles.item}>
            <span style={styles.icon}>📞</span>
            <div>
              <span style={styles.label}>Phone</span>
              <a
                href="tel:9767980595"
                style={styles.link}
              >
                +91 9767980595
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div style={styles.item}>
            <span style={styles.icon}>💬</span>
            <div>
              <span style={styles.label}>WhatsApp</span>
              <a
                href="https://wa.me/9803946096"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                +91 9803946096
              </a>
            </div>
          </div>
        </div>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} Kriti Thapaliya
        </footer>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9fafb",
    padding: "40px",
  },
  section: {
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 600,
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "30px",
    textAlign: "center" as const,
  },
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "30px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "22px",
  },
  icon: {
    fontSize: "1.6rem",
  },
  label: {
    display: "block",
    fontSize: "0.85rem",
    color: "#777",
    marginBottom: "2px",
  },
  link: {
    fontSize: "1.05rem",
    color: "#111",
    textDecoration: "none",
    fontWeight: 500,
  },
  footer: {
    marginTop: "30px",
    textAlign: "center" as const,
    fontSize: "0.85rem",
    color: "#999",
  },
};