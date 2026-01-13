export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "80px 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>About Me</h1>

      <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
         I am an Electronics, Communication, and Information Engineering student passionate about turning ideas into innovative solutions.
      </p>

      <p style={{ lineHeight: 1.8, marginTop: 12, opacity: 0.9 }}>
Driven by curiosity and passion for innovation with skills in circuit design, signal processing, and programming, I enjoy bridging hardware and software to create practical, real-world technologies that make a meaningful impact.

      </p>

      <h2 style={{ marginTop: 32 }}>Current Focus:</h2>
      <ul style={{ lineHeight: 1.9 }}>
        <li>Communication systems & signal flow</li>
        <li>Simulation tools (Proteus / MATLAB basics)</li>
        <li>C programming / C++ programming/Turbo C fundamentals</li>
        <li>System-level electronics design</li>
      </ul>
    </main>
  );
}