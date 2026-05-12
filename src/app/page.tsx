import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0a0a0f" }}>

      {/* NAVBAR */}
      <nav style={{ borderBottom: "1px solid #1e293b", backgroundColor: "#0d1117", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={40} height={40}
            style={{ borderRadius: "50%", border: "2px solid #00d4ff" }} />
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "#00d4ff" }}>Kcywayne</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/posts" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Insights</Link>
          <Link href="#about" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>About</Link>
          <Link href="#subscribe" style={{ fontSize: "14px", padding: "8px 16px", borderRadius: "8px", fontWeight: "500", backgroundColor: "#00d4ff", color: "#0a0a0f", textDecoration: "none" }}>Subscribe</Link>
        </div>
      </nav>

      {/* BANNER */}
      <div style={{ position: "relative", width: "100%", height: "280px", marginTop: "72px" }}>
        <Image src="/images/kc_banner.jpg" alt="Mindset is Everything" fill style={{ objectFit: "cover", opacity: 0.7 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #0a0a0f)" }} />
      </div>

      {/* HERO */}
      <section style={{ padding: "0 24px 80px", marginTop: "-60px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ position: "relative", marginBottom: "24px" }}>
            <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={120} height={120}
              style={{ borderRadius: "50%", border: "4px solid #00d4ff", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }} />
            <div style={{ position: "absolute", bottom: "-4px", right: "-4px", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#00d4ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>⚡</div>
          </div>
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#f1f5f9", margin: "0 0 8px" }}>Kcywayne</h1>
          <p style={{ fontSize: "14px", fontWeight: "500", color: "#00d4ff", marginBottom: "16px" }}>TON Blockchain Builder · @kcnuel4real</p>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "500px", marginBottom: "32px", lineHeight: "1.6" }}>
            I teach the following 💰 Make money online 📈 Grow your Business. Building on the TON blockchain ecosystem.
          </p>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
            {[{ label: "Insights", value: "100+" }, { label: "Followers", value: "10K+" }, { label: "Builds", value: "TON" }].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#00d4ff", margin: 0 }}>{stat.value}</p>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/posts" style={{ padding: "12px 24px", borderRadius: "8px", fontWeight: "600", backgroundColor: "#00d4ff", color: "#0a0a0f", textDecoration: "none" }}>Read Insights</Link>
            <Link href="https://t.me/tonversalphas" target="_blank" style={{ padding: "12px 24px", borderRadius: "8px", fontWeight: "600", backgroundColor: "#1e293b", color: "#00d4ff", border: "1px solid #00d4ff", textDecoration: "none" }}>Join Telegram 💎</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 24px", borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#f1f5f9", margin: "0 0 12px" }}>About Kcywayne</h2>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#00d4ff", marginBottom: "48px" }}>Builder. Teacher. TON Ecosystem Contributor.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {[
              { icon: "⚡", title: "TON Builder", desc: "Actively building and contributing to the TON blockchain ecosystem with real projects and insights." },
              { icon: "💰", title: "Money Educator", desc: "Teaching practical strategies to make money online and grow sustainable businesses." },
              { icon: "📈", title: "Growth Mindset", desc: "Mindset is Everything. Sharing the mental frameworks that drive real financial growth." }
            ].map((card) => (
              <div key={card.title} style={{ padding: "24px", borderRadius: "12px", backgroundColor: "#111827", border: "1px solid #1e293b" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
                <h3 style={{ fontWeight: "600", color: "#f1f5f9", margin: "0 0 8px" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#f1f5f9", margin: "0 0 12px" }}>Get Notified 🔔</h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "32px", lineHeight: "1.6" }}>
            Subscribe with your Telegram username and get notified every time Kcywayne drops a new insight.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input type="text" placeholder="Your Telegram username (e.g. @yourname)"
              style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", fontSize: "14px", outline: "none", backgroundColor: "#111827", border: "1px solid #1e293b", color: "#f1f5f9", boxSizing: "border-box" }} />
            <button style={{ width: "100%", padding: "12px", borderRadius: "8px", fontWeight: "600", backgroundColor: "#00d4ff", color: "#0a0a0f", border: "none", cursor: "pointer", fontSize: "14px" }}>
              Subscribe for Updates
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
          © 2025 Kcywayne · Built on TON 💎 ·{" "}
          <a href="https://t.me/tonversalphas" target="_blank" style={{ color: "#00d4ff", textDecoration: "none" }}>Join Telegram</a>
        </p>
      </footer>

    </main>
  );
}
