import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Total Posts", value: "6", icon: "📝", color: "#00d4ff" },
  { label: "Subscribers", value: "0", icon: "🔔", color: "#22c55e" },
  { label: "Telegram Sent", value: "0", icon: "📨", color: "#8b5cf6" },
  { label: "Total Views", value: "0", icon: "👁️", color: "#f59e0b" },
];

const recentPosts = [
  { title: "Why TON Blockchain is the Future", date: "May 5, 2025", tag: "TON", status: "Published" },
  { title: "How I Made My First $1K Online", date: "May 2, 2025", tag: "Money", status: "Published" },
  { title: "Mindset Shifts That Changed Everything", date: "Apr 28, 2025", tag: "Mindset", status: "Published" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
      <nav style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#0d1117" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={36} height={36}
            className="rounded-full" style={{ border: "2px solid #00d4ff" }} />
          <span className="font-bold" style={{ color: "#00d4ff" }}>Kcywayne CMS</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs hover:opacity-80" style={{ color: "#94a3b8" }}>View Site</Link>
          <button className="text-xs px-3 py-2 rounded-lg hover:opacity-80"
            style={{ backgroundColor: "#1e293b", color: "#94a3b8" }}>Sign Out</button>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "#f1f5f9" }}>Dashboard</h1>
            <p className="text-sm" style={{ color: "#94a3b8" }}>Welcome back, Kcywayne 👋</p>
          </div>
          <button className="px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-80"
            style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>+ New Post</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl" style={{ backgroundColor: "#111827", border: "1px solid #1e293b" }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111827", border: "1px solid #1e293b" }}>
          <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #1e293b" }}>
            <h2 className="font-semibold" style={{ color: "#f1f5f9" }}>Recent Posts</h2>
            <Link href="/posts" className="text-xs hover:opacity-80" style={{ color: "#00d4ff" }}>View all</Link>
          </div>
          {recentPosts.map((post, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between"
              style={{ borderBottom: i < recentPosts.length - 1 ? "1px solid #1e293b" : "none" }}>
              <div>
                <p className="text-sm font-medium" style={{ color: "#f1f5f9" }}>{post.title}</p>
                <p className="text-xs mt-1" style={{ color: "#475569" }}>{post.date} · {post.tag}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "#00d4ff20", color: "#00d4ff" }}>{post.status}</span>
                <button className="text-xs hover:opacity-80" style={{ color: "#94a3b8" }}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
