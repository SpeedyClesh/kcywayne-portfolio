"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface Post {
  id: string;
  title: string;
  tag: string;
  published: boolean;
  createdAt: string;
}

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [subscribers, setSubscribers] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", excerpt: "", tag: "TON", published: false });

  useEffect(() => { fetchPosts(); fetchSubscribers(); }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts/all");
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
  };

  const fetchSubscribers = async () => {
    const res = await fetch("/api/subscribers");
    const data = await res.json();
    setSubscribers(Array.isArray(data) ? data.length : 0);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content) return alert("Title and content required");
    setLoading(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const post = await res.json();
    setLoading(false);
    if (res.ok) {
      setShowForm(false);
      setForm({ title: "", content: "", excerpt: "", tag: "TON", published: false });
      fetchPosts();
      if (form.published && post.id) {
        await fetch("/api/telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postId: post.id }),
        });
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  return (
    <main style={{ backgroundColor: "#0a0a0f", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#0d1117", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={36} height={36}
            style={{ borderRadius: "50%", border: "2px solid #00d4ff" }} />
          <span style={{ fontWeight: "bold", color: "#00d4ff" }}>Kcywayne CMS</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{ fontSize: "12px", color: "#94a3b8", textDecoration: "none" }}>View Site</Link>
          <button onClick={() => signOut({ callbackUrl: "/login" })}
            style={{ fontSize: "12px", padding: "8px 12px", borderRadius: "8px", backgroundColor: "#1e293b", color: "#94a3b8", border: "none", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#f1f5f9", margin: 0 }}>Dashboard</h1>
            <p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>Welcome back, Kcywayne 👋</p>
          </div>
          <button onClick={() => setShowForm(!showForm)}
            style={{ padding: "10px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", backgroundColor: "#00d4ff", color: "#0a0a0f", border: "none", cursor: "pointer" }}>
            + New Post
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "40px" }}>
          {[
            { label: "Total Posts", value: posts.length, icon: "📝", color: "#00d4ff" },
            { label: "Subscribers", value: subscribers, icon: "🔔", color: "#22c55e" },
            { label: "Published", value: posts.filter(p => p.published).length, icon: "📨", color: "#8b5cf6" },
            { label: "Drafts", value: posts.filter(p => !p.published).length, icon: "📄", color: "#f59e0b" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: "20px", borderRadius: "12px", backgroundColor: "#111827", border: "1px solid #1e293b" }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{stat.icon}</div>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {showForm && (
          <div style={{ marginBottom: "40px", padding: "24px", borderRadius: "12px", backgroundColor: "#111827", border: "1px solid #00d4ff" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "24px", fontSize: "18px", color: "#f1f5f9" }}>New Post</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", fontSize: "14px", outline: "none", backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9", boxSizing: "border-box" }} />
              <input placeholder="Excerpt (short summary)" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", fontSize: "14px", outline: "none", backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9", boxSizing: "border-box" }} />
              <textarea placeholder="Content (full post)" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={8} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", fontSize: "14px", outline: "none", backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
                  style={{ padding: "12px 16px", borderRadius: "8px", fontSize: "14px", outline: "none", backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9" }}>
                  <option>TON</option>
                  <option>Money</option>
                  <option>Mindset</option>
                  <option>General</option>
                </select>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#94a3b8", cursor: "pointer" }}>
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                  Publish + Notify Telegram
                </label>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={handleSubmit} disabled={loading}
                  style={{ padding: "12px 24px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", backgroundColor: "#00d4ff", color: "#0a0a0f", border: "none", cursor: "pointer", opacity: loading ? 0.5 : 1 }}>
                  {loading ? "Saving..." : "Save Post"}
                </button>
                <button onClick={() => setShowForm(false)}
                  style={{ padding: "12px 24px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", backgroundColor: "#1e293b", color: "#94a3b8", border: "none", cursor: "pointer" }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#111827", border: "1px solid #1e293b" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #1e293b" }}>
            <h2 style={{ fontWeight: "600", color: "#f1f5f9", margin: 0 }}>All Posts</h2>
          </div>
          {posts.length === 0 ? (
            <div style={{ padding: "40px 24px", textAlign: "center", fontSize: "14px", color: "#475569" }}>
              No posts yet. Click "+ New Post" to create your first one!
            </div>
          ) : (
            posts.map((post, i) => (
              <div key={post.id} style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: i < posts.length - 1 ? "1px solid #1e293b" : "none" }}>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "500", color: "#f1f5f9", margin: 0 }}>{post.title}</p>
                  <p style={{ fontSize: "12px", color: "#475569", marginTop: "4px" }}>{new Date(post.createdAt).toLocaleDateString()} · {post.tag}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "12px", padding: "4px 8px", borderRadius: "9999px", backgroundColor: post.published ? "#00d4ff20" : "#f59e0b20", color: post.published ? "#00d4ff" : "#f59e0b" }}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <button onClick={() => handleDelete(post.id)} style={{ fontSize: "12px", color: "#ef4444", background: "none", border: "none", cursor: "pointer" }}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
