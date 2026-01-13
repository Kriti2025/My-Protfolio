import ClientNavbar from "../components/ClientNavbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <ClientNavbar />

      {/* Page content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "3rem 1rem",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          {children}
        </div>
      </main>
    </div>
  );
}