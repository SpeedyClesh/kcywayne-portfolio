"use client";
import { useState } from "react";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <Image src="/images/kc_pfp.jpg" alt="Kcywayne" width={70} height={70}
            className="rounded-full mb-4" style={{ border: "3px solid #00d4ff", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }} />
          <h1 className="text-2xl font-bold" style={{ color: "#f1f5f9" }}>Admin Login</h1>
          <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>Kcywayne Portfolio CMS</p>
        </div>
        <div className="p-8 rounded-2xl" style={{ backgroundColor: "#111827", border: "1px solid #1e293b" }}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium mb-2 block" style={{ color: "#94a3b8" }}>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kcywayne.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9" }} />
            </div>
            <div>
              <label className="text-xs font-medium mb-2 block" style={{ color: "#94a3b8" }}>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ backgroundColor: "#0d1117", border: "1px solid #1e293b", color: "#f1f5f9" }} />
            </div>
            <button className="w-full py-3 rounded-lg font-semibold mt-2 transition-all hover:opacity-80"
              style={{ backgroundColor: "#00d4ff", color: "#0a0a0f" }}>Sign In</button>
          </div>
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "#475569" }}>Kcywayne Portfolio · Admin Panel</p>
      </div>
    </main>
  );
}
