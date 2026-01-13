import Link from "next/link";

const sections = [
  {
    title: "Communication & Electronics",
    desc: "Core engineering fundamentals",
    pills: [
      "Communication systems",
      "Signals & systems (basic)",
      "Circuit analysis (basic)",
      "Component-level understanding",
    ],
  },
  {
    title: "Simulation & Tools",
    desc: "Learning by modeling and testing",
    pills: [
      "Circuit simulators (basic)",
      "Signal modeling (intro)",
      "Proteus / similar tools",
      "Documentation of results",
    ],
  },
  {
    title: "Software & Programming",
    desc: "Strong fundamentals for engineering problem-solving",
    pills: [
      "C programming (Turbo C)",
      "Logic building",
      "Debugging basics",
      "Next.js (learning)",
    ],
  },
  {
    title: "Security (Learning)",
    desc: "Modern system awareness",
    pills: ["Networking basics", "Security fundamentals", "Safe practices"],
  },
];

export default function SkillsPage() {
  return (
    <main style={styles.page}>
      {/* Top Bar */}
      <header style={styles.header}>
        <div>
          <div style={styles.kickerRow}>
            <span style={styles.kickerDot} />
            <p style={styles.kicker}>SKILLS</p>
          </div>

          <h1 style={styles.title}>Skills & Tools</h1>

          <p style={styles.quote}>
            Focused on building strong fundamentals in communication systems,
            electronics, and software tools.
          </p>
        </div>


      </header>

      {/* Cards */}
      <section style={styles.grid}>
        {sections.map((s) => (
          <article key={s.title} style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>{s.title}</h2>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>

            <div style={styles.pills}>
              {s.pills.map((p) => (
                <span key={p} style={styles.pill}>
                  {p}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Want details about any tool (Simulator / Turbo C)?{" "}
          <Link href="/contact" style={styles.footerLink}>
            Contact me
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "70px 20px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0))",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 28,
    paddingBottom: 18,
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  },

  kickerRow: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 },
  kickerDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "linear-gradient(90deg, #111, #666)",
  },
  kicker: { margin: 0, fontSize: 12, letterSpacing: 3, opacity: 0.7 },

  title: { margin: 0, fontSize: 40, lineHeight: 1.1 },
  quote: {
    margin: "10px 0 0 0",
    maxWidth: 560,
    fontSize: 15,
    lineHeight: 1.7,
    opacity: 0.8,
  },

  actions: { display: "flex", gap: 10 },

  btnPrimary: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    background: "#111",
    color: "#fff",
    fontSize: 14,
  },
  btnGhost: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.15)",
    background: "rgba(255,255,255,0.6)",
    color: "#111",
    fontSize: 14,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
    marginTop: 18,
  },

  card: {
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 16,
    padding: 16,
    background: "rgba(255,255,255,0.65)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },

  cardHeader: { marginBottom: 12 },
  cardTitle: { margin: 0, fontSize: 18 },
  cardDesc: { margin: "6px 0 0 0", fontSize: 13, opacity: 0.75, lineHeight: 1.5 },

  pills: { display: "flex", flexWrap: "wrap", gap: 8 },
  pill: {
    fontSize: 13,
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(0,0,0,0.12)",
    background: "rgba(0,0,0,0.03)",
  },

  footer: {
    marginTop: 28,
    paddingTop: 14,
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  footerText: { margin: 0, fontSize: 13, opacity: 0.75 },
  footerLink: { color: "#111", textDecoration: "underline" },
};