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
  TON: "#00d4ff",
  Money: "#22c55e",
  Mindset: "#8b5cf6",
};

export default function PostsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
      <nav style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#0d1117" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={40} height={40}
            className="rounded-full" style={{ border: "2px solid #00d4ff" }} />
          <span className="font-bold text-lg" style={{ color: "#00d4ff" }}>Kcywayne</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-cyan-400 transition-colors" style={{ color: "#94a3b8" }}>Home</Link>
          <Link href="/posts" className="text-sm" style={{ color: "#00d4ff" }}>Insights</Link>
          <Link href="/#subscribe" className="text-sm px-4 py-2 rounded-lg font-medium hover:opacity-80" style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>Subscribe</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#f1f5f9" }}>Insights 💡</h1>
          <p className="text-sm" style={{ color: "#94a3b8" }}>Thoughts, builds and strategies from Kcywayne</p>
        </div>
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {["All", "TON", "Money", "Mindset"].map((filter) => (
            <button key={filter} className="px-4 py-2 rounded-full text-sm font-medium hover:opacity-80"
              style={{ backgroundColor: filter === "All" ? "#00d4ff" : "#111827", color: filter === "All" ? "#0a0a0f" : "#94a3b8", border: "1px solid #1e293b" }}>
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockPosts.map((post) => (
            <div key={post.id} className="p-6 rounded-xl transition-all hover:scale-105 cursor-pointer"
              style={{ backgroundColor: "#111827", border: "1px solid #1e293b" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: `${tagColors[post.tag]}20`, color: tagColors[post.tag] }}>
                  {post.tag}
                </span>
                <span className="text-xs" style={{ color: "#475569" }}>{post.date}</span>
              </div>
              <h2 className="font-bold text-base mb-2" style={{ color: "#f1f5f9" }}>{post.title}</h2>
              <p className="text-sm mb-4" style={{ color: "#94a3b8" }}>{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "#00d4ff" }}>
                <span>Read more</span><span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="px-6 py-8 text-center" style={{ borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          © 2025 Kcywayne · Built on TON 💎 ·{" "}
          <a href="https://t.me/tonversalphas" target="_blank" style={{ color: "#00d4ff" }}>Join Telegram</a>
        </p>
      </footer>
    </main>
  );
}
