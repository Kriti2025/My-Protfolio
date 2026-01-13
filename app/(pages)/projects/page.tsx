import Link from "next/link";

const projects = [
  {
    title: "Signal & Communication Mini Projects",
    subtitle: "Signal flow, modulation concepts, and communication basics",
    points: [
      "AM/FM concept demos (notes + diagrams)",
      "Noise & filtering experiments (basic)",
      "Signal pipeline: input → processing → output",
    ],
    tag: "Communication",
  },
  {
    title: "Circuit Design & Analysis",
    subtitle: "Hands-on electronics building blocks",
    points: [
      "Op-amp / comparator circuits (basic)",
      "Voltage regulation + sensor interfacing",
      "Breadboard prototyping + testing",
    ],
    tag: "Electronics",
  },
  {
    title: "Simulation & Tools Practice",
    subtitle: "Learning by building with simulators",
    points: [
      "Circuit simulation (Proteus / Multisim basics)",
      "Quick prototyping (Tinkercad basics)",
      "System behavior exploration using simulation",
    ],
    tag: "Simulation",
  },
  {
    title: "Software Practice (Turbo C / C Programming)",
    subtitle: "Programming fundamentals for logic building",
    points: [
      "C basics: loops, arrays, functions",
      "Problem solving & structured coding",
      "Debugging fundamentals (beginner)",
    ],
    tag: "Software",
  },
  {
    title: "App Development (Learning)",
    subtitle: "Building small applications step-by-step",
    points: [
      "Next.js portfolio website (this site)",
      "Navigation and multi-page structure",
      "Clean UI layout and content organization",
    ],
    tag: "App Dev",
  },
  {
    title: "Cybersecurity Fundamentals (Learning)",
    subtitle: "Safe practice + networking basics",
    points: [
      "Networking basics (TCP/IP, ports)",
      "Linux basics and safe lab practice",
      "Security awareness + documentation",
    ],
    tag: "Security",
  },
];

export default function ProjectsPage() {
  return (
    <main style={styles.page}>
      <header style={styles.topBar}>
        <div>
          <p style={styles.kicker}>PROJECTS</p>
          <h1 style={styles.h1}>My Work</h1>
          <p style={styles.sub}>
            Projects and learning areas aligned with Electronics, Communication & Information Engineering.
          </p>
        </div>

      </header>

      <section style={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.tag}>{p.tag}</span>
            </div>

            <h2 style={styles.cardTitle}>{p.title}</h2>
            <p style={styles.cardSub}>{p.subtitle}</p>

            <ul style={styles.list}>
              {p.points.map((x) => (
                <li key={x} style={styles.li}>
                  {x}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Want more details?{" "}
          <Link href="/contact" style={styles.link}>
            Reach out
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "44px 22px",
    maxWidth: 980,
    margin: "0 auto",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "flex-end",
    marginBottom: 26,
    flexWrap: "wrap",
  },
  kicker: {
    letterSpacing: 3,
    fontSize: 12,
    opacity: 0.7,
    margin: 0,
  },
  h1: {
    margin: "6px 0 0 0",
    fontSize: 38,
    lineHeight: 1.1,
  },
  sub: {
    margin: "10px 0 0 0",
    maxWidth: 560,
    opacity: 0.75,
    lineHeight: 1.6,
    fontSize: 14,
  },
  actions: {
    display: "flex",
    gap: 10,
  },
  btnPrimary: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    background: "#111",
    color: "#fff",
    fontSize: 14,
  },
  btnSecondary: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,.18)",
    color: "#111",
    fontSize: 14,
    background: "transparent",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 14,
  },
  card: {
    border: "1px solid rgba(0,0,0,.12)",
    borderRadius: 16,
    padding: 16,
    background: "rgba(0,0,0,.02)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  tag: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(0,0,0,.12)",
    background: "rgba(255,255,255,.8)",
  },
  cardTitle: {
    margin: "0 0 6px 0",
    fontSize: 18,
  },
  cardSub: {
    margin: "0 0 12px 0",
    opacity: 0.75,
    fontSize: 13,
    lineHeight: 1.5,
  },
  list: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.7,
    fontSize: 13,
    opacity: 0.9,
  },
  li: {
    marginBottom: 4,
  },
  footer: {
    marginTop: 26,
    paddingTop: 14,
    borderTop: "1px solid rgba(0,0,0,.12)",
  },
  footerText: {
    margin: 0,
    fontSize: 13,
    opacity: 0.8,
  },
  link: {
    color: "#111",
    textDecoration: "underline",
  },
};