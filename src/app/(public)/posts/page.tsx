import Link from "next/link";
import Image from "next/image";

const mockPosts = [
  { id: "1", title: "Why TON Blockchain is the Future", excerpt: "TON processes millions of transactions per second at near-zero cost. Here is why every builder should pay attention.", date: "May 5, 2025", tag: "TON" },
  { id: "2", title: "How I Made My First $1K Online", excerpt: "The exact steps I took to go from zero to my first thousand dollars online. No fluff, just the real process.", date: "May 2, 2025", tag: "Money" },
  { id: "3", title: "Mindset Shifts That Changed Everything", excerpt: "Before strategy comes mindset. These are the 5 mental shifts that unlocked real growth for me.", date: "Apr 28, 2025", tag: "Mindset" },
  { id: "4", title: "Building on TON: Getting Started", excerpt: "A practical guide to setting up your dev environment and deploying your first smart contract on TON.", date: "Apr 20, 2025", tag: "TON" },
  { id: "5", title: "The $10 to $10,000 Roadmap", excerpt: "Most people overcomplicate making money online. Here is the simplest roadmap that actually works.", date: "Apr 15, 2025", tag: "Money" },
  { id: "6", title: "Why Most People Stay Broke", excerpt: "It is not about how much you earn. It is about what you do with it. The honest truth about financial freedom.", date: "Apr 10, 2025", tag: "Mindset" },
];

const tagColors: Record<string, string> = {
  TON: "#00d4ff", Money: "#22c55e", Mindset: "#8b5cf6",
};

export default function PostsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0a0a0f" }}>
      <nav style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#0d1117", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={40} height={40} style={{ borderRadius: "50%", border: "2px solid #00d4ff" }} />
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "#00d4ff" }}>Kcywayne</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Home</Link>
          <Link href="/posts" style={{ fontSize: "14px", color: "#00d4ff", textDecoration: "none" }}>Insights</Link>
          <Link href="/#subscribe" style={{ fontSize: "14px", padding: "8px 16px", borderRadius: "8px", fontWeight: "500", backgroundColor: "#00d4ff", color: "#0a0a0f", textDecoration: "none" }}>Subscribe</Link>
        </div>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "112px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#f1f5f9", margin: "0 0 12px" }}>Insights 💡</h1>
          <p style={{ fontSize: "14px", color: "#94a3b8" }}>Thoughts, builds and strategies from Kcywayne</p>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}>
          {["All", "TON", "Money", "Mindset"].map((filter) => (
            <button key={filter} style={{ padding: "8px 16px", borderRadius: "9999px", fontSize: "14px", fontWeight: "500", backgroundColor: filter === "All" ? "#00d4ff" : "#111827", color: filter === "All" ? "#0a0a0f" : "#94a3b8", border: "1px solid #1e293b", cursor: "pointer" }}>
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {mockPosts.map((post) => (
            <div key={post.id} style={{ padding: "24px", borderRadius: "12px", backgroundColor: "#111827", border: "1px solid #1e293b", cursor: "pointer", transition: "transform 0.2s" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "9999px", fontWeight: "500", backgroundColor: `${tagColors[post.tag]}20`, color: tagColors[post.tag] }}>
                  {post.tag}
                </span>
                <span style={{ fontSize: "12px", color: "#475569" }}>{post.date}</span>
              </div>
              <h2 style={{ fontWeight: "bold", fontSize: "16px", color: "#f1f5f9", margin: "0 0 8px" }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "16px", lineHeight: "1.6" }}>{post.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "500", color: "#00d4ff" }}>
                <span>Read more</span><span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
          © 2025 Kcywayne · Built on TON 💎 ·{" "}
          <a href="https://t.me/tonversalphas" target="_blank" style={{ color: "#00d4ff", textDecoration: "none" }}>Join Telegram</a>
        </p>
      </footer>
    </main>
  );
}
