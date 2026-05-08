import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <Link href="/posts" className="text-sm hover:text-cyan-400 transition-colors" style={{ color: "#94a3b8" }}>Insights</Link>
          <Link href="#about" className="text-sm hover:text-cyan-400 transition-colors" style={{ color: "#94a3b8" }}>About</Link>
          <Link href="#subscribe" className="text-sm px-4 py-2 rounded-lg font-medium transition-all hover:opacity-80" style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>Subscribe</Link>
        </div>
      </nav>

      <div className="relative w-full pt-16" style={{ height: "280px" }}>
        <Image src="/images/kc_banner.jpg" alt="Mindset is Everything" fill className="object-cover" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0f)" }} />
      </div>

      <section className="relative px-6 pb-20" style={{ marginTop: "-60px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={120} height={120}
                className="rounded-full" style={{ border: "4px solid #00d4ff", boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)" }} />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#00d4ff" }}>
                <span className="text-xs">⚡</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#f1f5f9" }}>Kcywayne</h1>
            <p className="text-sm font-medium mb-4" style={{ color: "#00d4ff" }}>TON Blockchain Builder · @kcnuel4real</p>
            <p className="text-base max-w-xl mb-8" style={{ color: "#94a3b8" }}>I teach the following 💰 Make money online 📈 Grow your Business. Building on the TON blockchain ecosystem.</p>
            <div className="flex gap-8 mb-10">
              {[{ label: "Insights", value: "100+" }, { label: "Followers", value: "10K+" }, { label: "Builds", value: "TON" }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold" style={{ color: "#00d4ff" }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/posts" className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-80" style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>Read Insights</Link>
              <Link href="https://t.me/tonversalphas" target="_blank" className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-80" style={{ backgroundColor: "#1e293b", color: "#00d4ff", border: "1px solid #00d4ff" }}>Join Telegram 💎</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20" style={{ borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: "#f1f5f9" }}>About Kcywayne</h2>
          <p className="text-center mb-12 text-sm" style={{ color: "#00d4ff" }}>Builder. Teacher. TON Ecosystem Contributor.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "TON Builder", desc: "Actively building and contributing to the TON blockchain ecosystem with real projects and insights." },
              { icon: "💰", title: "Money Educator", desc: "Teaching practical strategies to make money online and grow sustainable businesses." },
              { icon: "📈", title: "Growth Mindset", desc: "Mindset is Everything. Sharing the mental frameworks that drive real financial growth." }
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl" style={{ backgroundColor: "#111827", border: "1px solid #1e293b" }}>
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-semibold mb-2" style={{ color: "#f1f5f9" }}>{card.title}</h3>
                <p className="text-sm" style={{ color: "#94a3b8" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#f1f5f9" }}>Get Notified 🔔</h2>
          <p className="mb-8 text-sm" style={{ color: "#94a3b8" }}>Subscribe with your Telegram username and get notified every time Kcywayne drops a new insight.</p>
          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Your Telegram username (e.g. @yourname)"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
              style={{ backgroundColor: "#111827", border: "1px solid #1e293b", color: "#f1f5f9" }} />
            <button className="w-full py-3 rounded-lg font-semibold transition-all hover:opacity-80"
              style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>Subscribe for Updates</button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center" style={{ borderTop: "1px solid #1e293b", backgroundColor: "#0d1117" }}>
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          © 2025 Kcywayne · Built on TON 💎 ·{" "}
          <a href="https://t.me/tonversalphas" target="_blank" className="hover:text-cyan-400 transition-colors" style={{ color: "#00d4ff" }}>Join Telegram</a>
        </p>
      </footer>

    </main>
  );
}
