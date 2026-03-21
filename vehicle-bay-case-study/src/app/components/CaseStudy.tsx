import imgLogo from "../../assets/dd1ba9213e0f99a29ead198c056d52c268d5a8d3.png";
import imgSuccess from "../../assets/b98d7b0607eb6c38311aaeba2db024cf532c557b.png";
import imgMap from "../../assets/b04270bf414644ae27e3a9a89efad16d245d77c7.png";

const arjunImg =
  "https://images.unsplash.com/photo-1765366574945-e2f1b4b1a5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNjY4OTAzfDA&ixlib=rb-4.1.0&q=80&w=400";
const priyaImg =
  "https://images.unsplash.com/photo-1734764627105-b5ff03f02b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMHdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NzM2Njg5MDd8MA&ixlib=rb-4.1.0&q=80&w=400";

// ─── Reusable helpers ──────────────────────────────────────────────────────────
const GRID_RED = {
  backgroundImage: "linear-gradient(#FF5252 1px,transparent 1px),linear-gradient(90deg,#FF5252 1px,transparent 1px)",
  backgroundSize: "40px 40px",
};
const GRID_VIOLET = {
  backgroundImage: "linear-gradient(#6C63FF 1px,transparent 1px),linear-gradient(90deg,#6C63FF 1px,transparent 1px)",
  backgroundSize: "40px 40px",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-[#6C63FF] mb-3" style={{ fontWeight: 700 }}>
      {children}
    </p>
  );
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white text-3xl md:text-4xl mb-4 leading-tight" style={{ fontWeight: 700 }}>
      {children}
    </h2>
  );
}
function SectionDivider({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[#6C63FF] text-5xl opacity-20" style={{ fontWeight: 800 }}>{num}</span>
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-[#6C63FF] text-xs uppercase tracking-widest" style={{ fontWeight: 700 }}>{title}</span>
    </div>
  );
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#16213E] border border-white/10 rounded-2xl p-6 ${className}`}>{children}</div>
  );
}
function Tag({ children, color = "#6C63FF" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block text-xs px-3 py-1 rounded-full border"
      style={{ color, borderColor: color + "40", background: color + "15", fontWeight: 600 }}>
      {children}
    </span>
  );
}

// ─── Phone mockup wrapper ──────────────────────────────────────────────────────
function Phone({ bg = "#1A1A2E", children, label, annotation }: {
  bg?: string; children: React.ReactNode; label: string; annotation: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 shrink-0">
      <div
        className="relative rounded-[2.2rem] border-[5px] border-[#0a0a1a] shadow-[0_20px_60px_rgba(108,99,255,0.25)] overflow-hidden"
        style={{ width: 195, height: 390, background: bg }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a0a1a] rounded-b-2xl z-20" />
        <div className="size-full overflow-hidden">{children}</div>
      </div>
      <div className="text-center w-[195px]">
        <p className="text-white text-sm" style={{ fontWeight: 600 }}>{label}</p>
        <p className="text-[#A0AEC0] text-xs mt-1 leading-relaxed">{annotation}</p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 01 — COVER
// ══════════════════════════════════════════════════════════════════════════════
function Cover() {
  return (
    <section id="cover"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 py-24"
      style={{ background: "radial-gradient(ellipse at 50% 0%,#2a1f6b 0%,#1A1A2E 55%,#0d0d1a 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={GRID_VIOLET} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-[#6C63FF]" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-10 bg-[#6C63FF]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
          <span className="text-[#A0AEC0] text-xs tracking-widest uppercase" style={{ fontWeight: 600 }}>UI/UX Case Study · 2025</span>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-[1.8rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(108,99,255,0.4)]">
            <img src={imgLogo} alt="Vehicle Bay" className="size-full object-cover" />
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl text-white tracking-tight mb-4" style={{ fontWeight: 800 }}>Vehicle Bay</h1>
        <p className="text-[#6C63FF] text-xl md:text-2xl mb-6" style={{ fontWeight: 600 }}>A smart parking slot booking mobile app</p>
        <div className="flex justify-center mb-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent" />
        </div>
        <p className="text-3xl md:text-4xl text-white mb-10" style={{ fontWeight: 700 }}>"Find it. Book it. Park it."</p>
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          {[{ label: "Designer", value: "Siddhu" }, { label: "Role", value: "UI/UX Designer" }, { label: "Tools", value: "Figma" }, { label: "Year", value: "2025" }].map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-1">
              <span className="text-[#A0AEC0] text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>{i.label}</span>
              <span className="text-white text-sm" style={{ fontWeight: 700 }}>{i.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-[#6C63FF] to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 02 — PROJECT OVERVIEW + DESIGN GOALS
// ══════════════════════════════════════════════════════════════════════════════
function ProjectOverview() {
  return (
    <section id="overview" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="02" title="Project Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <SectionLabel>About the project</SectionLabel>
          <SectionHeading>What is Vehicle Bay?</SectionHeading>
          <div className="space-y-4 text-[#A0AEC0] leading-relaxed text-sm">
            <p>Vehicle Bay is a mobile-first parking management application designed for urban commuters, outstation travellers, and weekend drivers in India. The app lets users discover, compare, and pre-book parking slots near their destination — before they even leave home.</p>
            <p>The target audience is anyone who drives in Indian cities: daily office commuters, tourists visiting new cities, and college students heading to crowded malls. The core problem is the complete absence of a reliable, real-time parking discovery layer in Indian cities.</p>
            <p>As the sole UI/UX Designer, I led the end-to-end process — from user research and persona development through wireframing, design system creation, and high-fidelity prototyping in Figma.</p>
          </div>
        </div>
        <div>
          <SectionLabel>Project at a Glance</SectionLabel>
          <Card>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⏱️", label: "Timeline", value: "8 Weeks" },
                { icon: "🎨", label: "My Role", value: "UI/UX Designer" },
                { icon: "📱", label: "Platform", value: "Mobile — iOS" },
                { icon: "🛠️", label: "Tools", value: "Figma" },
                { icon: "📂", label: "Status", value: "Portfolio Project" },
                { icon: "🏙️", label: "Market", value: "India — Tier 1 & 2" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#6C63FF]/15 rounded-lg flex items-center justify-center text-base shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[#A0AEC0] text-[10px] uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-xs" style={{ fontWeight: 600 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Design Goals */}
      <div>
        <SectionLabel>Design goals & success metrics</SectionLabel>
        <h3 className="text-white text-2xl mb-6" style={{ fontWeight: 700 }}>What does success look like?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { goal: "Reduce search time", metric: "From ~15 min → under 2 min", icon: "⏱️", color: "#6C63FF" },
            { goal: "Zero booking confusion", metric: "3-tap booking flow max", icon: "✅", color: "#4CAF50" },
            { goal: "Transparent pricing", metric: "Rate visible before any click", icon: "💰", color: "#FFB300" },
            { goal: "QR contactless entry", metric: "No ticket, no cash, no friction", icon: "📲", color: "#7B68EE" },
          ].map((g) => (
            <div key={g.goal} className="bg-[#16213E] border border-white/10 rounded-2xl p-5 relative overflow-hidden hover:border-[#6C63FF]/30 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: g.color }} />
              <span className="text-2xl block mb-3">{g.icon}</span>
              <p className="text-white text-sm mb-1" style={{ fontWeight: 700 }}>{g.goal}</p>
              <p className="text-[#A0AEC0] text-xs leading-relaxed">{g.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 03 — PROBLEM STATEMENT (STANDALONE, BOLD)
// ══════════════════════════════════════════════════════════════════════════════
function ProblemStatement() {
  return (
    <section id="problem" className="py-0 px-0">
      {/* Full-bleed problem hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1a0505 0%,#280808 35%,#1a0a12 70%,#16213E 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={GRID_RED} />
        {/* Red glow orb */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-[#FF5252]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5252] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-[#FF5252]/20 border border-[#FF5252]/40 rounded-xl flex items-center justify-center text-base">⚠️</div>
            <span className="text-[#FF5252] text-xs uppercase tracking-widest" style={{ fontWeight: 700 }}>Section 03 · Problem Statement</span>
          </div>

          {/* Main problem headline */}
          <div className="max-w-4xl mb-14">
            <p className="text-[#FF5252] text-sm uppercase tracking-widest mb-4" style={{ fontWeight: 700 }}>The Core Problem</p>
            <h2 className="text-white text-4xl md:text-6xl leading-[1.1] mb-6" style={{ fontWeight: 800 }}>
              Every day, millions of urban drivers waste{" "}
              <span className="relative inline-block">
                <span className="text-[#FF5252]">17+ minutes</span>
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#FF5252]/40 rounded" />
              </span>{" "}
              circling streets looking for parking.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              People who are constantly travelling — daily commuters, outstation visitors, tourists — have <span className="text-white/90">no reliable way</span> to know where to park when they arrive at an unfamiliar location. This leads to wasted time, frustration, traffic congestion, and sometimes fines for illegal parking.
            </p>
          </div>

          {/* HMW statement — prominent box */}
          <div className="bg-[#FF5252]/10 border-2 border-[#FF5252]/30 rounded-3xl p-8 md:p-10 mb-14 relative overflow-hidden max-w-4xl">
            <div className="absolute -top-4 -left-4 text-[120px] text-[#FF5252]/5 select-none" style={{ fontWeight: 800 }}>"</div>
            <p className="text-[#FF5252] text-[10px] uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>How Might We Question</p>
            <p className="text-white text-xl md:text-2xl leading-relaxed" style={{ fontWeight: 600 }}>
              How might we help frequent travellers quickly{" "}
              <span className="text-[#FF5252]">find, compare, and book</span> a parking slot near their destination —{" "}
              <em>before they even arrive?</em>
            </p>
          </div>

          {/* 4 pain points */}
          <div className="mb-14">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 600 }}>4 Key Pain Points Identified</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", icon: "📡", title: "No Real-Time Info", desc: "Drivers have zero visibility into parking slot availability before arriving at a location." },
                { num: "02", icon: "💸", title: "Pricing Uncertainty", desc: "Rates at unknown parking lots are opaque — users only learn the price when they're already stuck." },
                { num: "03", icon: "🔄", title: "Wasted Time", desc: "15–20 minutes wasted circling streets on an average parking search trip, every single day." },
                { num: "04", icon: "🚫", title: "No Advance Booking", desc: "No way to reserve a spot in advance — everything is first-come, first-served with zero reliability." },
              ].map((p) => (
                <div key={p.num} className="bg-white/5 border border-[#FF5252]/15 rounded-2xl p-6 hover:border-[#FF5252]/35 transition-colors relative">
                  <span className="absolute top-4 right-4 text-[#FF5252]/10 text-4xl" style={{ fontWeight: 800 }}>{p.num}</span>
                  <span className="text-3xl block mb-3">{p.icon}</span>
                  <p className="text-white text-sm mb-2" style={{ fontWeight: 700 }}>{p.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact stats row */}
          <div className="border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "78%", l: "struggle to find parking weekly" },
              { n: "65%", l: "waste 10–20 min on avg search" },
              { n: "54%", l: "have been late due to parking" },
              { n: "82%", l: "would use advance booking if available" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-[#FF5252] text-3xl md:text-4xl" style={{ fontWeight: 800 }}>{s.n}</p>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 04 — THE SOLUTION (STANDALONE, BOLD)
// ══════════════════════════════════════════════════════════════════════════════
function Solution() {
  return (
    <section id="solution" className="py-0 px-0">
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0820 0%,#151060 35%,#1a1640 70%,#16213E 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_VIOLET} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-[#6C63FF]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-[#6C63FF]/20 border border-[#6C63FF]/40 rounded-xl flex items-center justify-center text-base">💡</div>
            <span className="text-[#6C63FF] text-xs uppercase tracking-widest" style={{ fontWeight: 700 }}>Section 04 · The Solution</span>
          </div>

          {/* Logo + headline */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
            <img src={imgLogo} alt="Vehicle Bay" className="w-16 h-16 rounded-2xl object-cover border border-[#6C63FF]/30 shrink-0" />
            <div>
              <p className="text-[#6C63FF] text-sm uppercase tracking-widest mb-2" style={{ fontWeight: 700 }}>Introducing</p>
              <h2 className="text-white text-4xl md:text-6xl leading-[1.05]" style={{ fontWeight: 800 }}>
                Vehicle Bay — a parking app that puts{" "}
                <span className="text-[#6C63FF]">drivers in control</span>{" "}
                before they ever leave home.
              </h2>
            </div>
          </div>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-14">
            Vehicle Bay surfaces nearby parking lots with live slot counts, transparent hourly rates, and a seamless 3-tap booking flow that ends with a QR code — making city parking as simple as ordering a cab.
          </p>

          {/* Solution features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            {[
              { icon: "🗺️", title: "Live Map + Proximity Search", desc: "See every nearby lot on an interactive map with real-time slot counts and pricing overlaid on each pin. No guessing — just facts.", color: "#6C63FF" },
              { icon: "🅿️", title: "Visual Slot Selection Grid", desc: "A colour-coded 2D slot grid (green = available, grey = occupied, blue = selected) matches the real-world layout of the parking bay.", color: "#4CAF50" },
              { icon: "📱", title: "QR Code Contactless Entry", desc: "After booking, receive a unique QR code. Scan it at the barrier. No ticket, no cash, no queues — in under 3 seconds.", color: "#7B68EE" },
              { icon: "💰", title: "Full Price + Amenity Transparency", desc: "Hourly rate, distance, CCTV status, EV charging, WiFi, and operating hours — all visible on the detail screen before booking.", color: "#FFB300" },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#6C63FF]/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: f.color + "20", border: `1px solid ${f.color}30` }}>
                  {f.icon}
                </div>
                <div>
                  <p className="text-white text-sm mb-1" style={{ fontWeight: 700 }}>{f.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Before ↔ After */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 600 }}>Before Vehicle Bay → After Vehicle Bay</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { before: "17 min wasted circling streets", after: "Under 2 min — booked in advance", icon: "⏱️" },
                { before: "Cash-only, no-advance booking", after: "Book days ahead, QR entry", icon: "📲" },
                { before: "\"Is there even parking there?\"", after: "Live slot count before you drive", icon: "❓→✅" },
              ].map((item) => (
                <div key={item.before} className="bg-[#16213E] rounded-2xl p-5 flex items-start gap-4">
                  <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-[#FF5252] text-[10px] line-through opacity-60 mb-1">{item.before}</p>
                    <p className="text-[#4CAF50] text-sm" style={{ fontWeight: 600 }}>{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 05 — USER RESEARCH & SURVEY
// ══════════════════════════════════════════════════════════════════════════════
function UserResearch() {
  const stats = [
    { pct: "78%", desc: "struggled to find parking in an unfamiliar area at least once a week" },
    { pct: "65%", desc: "wasted 10–20 minutes on average searching for parking" },
    { pct: "82%", desc: "would use an app to book parking in advance if available" },
    { pct: "71%", desc: "said unclear pricing was a major concern at unknown locations" },
    { pct: "54%", desc: "missed appointments or were late due to parking issues" },
  ];
  const quotes = [
    { q: "I just want to know if there's parking before I even leave my house.", who: "Daily Commuter, Bangalore" },
    { q: "The worst part is not knowing the rate until you're already stuck there.", who: "Outstation Visitor, Hyderabad" },
    { q: "If I could book a spot like I book a cab, that would change everything.", who: "Weekend Driver, Chennai" },
  ];
  return (
    <section id="research" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="05" title="User Research & Survey" />
      <div className="mb-10">
        <SectionLabel>Parking experience survey — Urban travellers</SectionLabel>
        <SectionHeading>Research Findings</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {[
            { text: "42 Respondents", accent: true },
            { text: "Daily commuters · Age 18–40" },
            { text: "Tier 1 & Tier 2 Indian cities" },
            { text: "Survey method: Google Forms" },
          ].map((t, i) => (
            <span key={i} className={`text-xs px-4 py-1.5 rounded-full border ${t.accent ? "bg-[#6C63FF]/15 text-[#6C63FF] border-[#6C63FF]/30" : "bg-white/5 text-[#A0AEC0] border-white/10"}`} style={{ fontWeight: t.accent ? 700 : 400 }}>
              {t.text}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {stats.map((s, i) => (
          <Card key={i} className="relative overflow-hidden group hover:border-[#6C63FF]/40 transition-colors flex flex-col gap-2">
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#6C63FF] to-[#7B68EE] rounded-b-2xl" style={{ width: s.pct }} />
            <span className="text-[#6C63FF] text-4xl" style={{ fontWeight: 800 }}>{s.pct}</span>
            <p className="text-[#A0AEC0] text-sm leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
      <SectionLabel>Key insights from respondents</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <div key={i} className="bg-[#16213E] border-l-2 border-[#6C63FF] rounded-2xl p-6 relative">
            <span className="text-[#6C63FF] text-5xl absolute top-3 right-5 opacity-15" style={{ fontWeight: 800 }}>"</span>
            <p className="text-white text-sm leading-relaxed mb-4 italic">"{q.q}"</p>
            <p className="text-[#A0AEC0] text-xs">— {q.who}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 06 — USER PERSONAS
// ══════════════════════════════════════════════════════════════════════════════
function UserPersonas() {
  const personas = [
    {
      img: arjunImg, name: "Arjun", age: "27", occupation: "Sales Executive",
      detail: "Travels to 3+ cities per week for client meetings",
      goal: "Find guaranteed parking near client offices fast",
      frustration: "No time to waste circling streets — every minute costs a deal",
      quote: "I need parking sorted before I even arrive.",
      tags: ["Frequent Traveller", "Time-Sensitive", "Business User"],
    },
    {
      img: priyaImg, name: "Priya", age: "23", occupation: "College Student",
      detail: "Travels by car on weekends to malls & events",
      goal: "Safe, affordable parking near malls and events",
      frustration: "Overpriced and full parking lots on weekends; ends up parking far away",
      quote: "I always end up parking 10 minutes away and walking.",
      tags: ["Weekend Driver", "Budget-Conscious", "Safety-Aware"],
    },
  ];
  return (
    <section id="personas" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="06" title="User Personas" />
        <SectionLabel>Who are we designing for?</SectionLabel>
        <SectionHeading>Meet the Users</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((p) => (
            <div key={p.name} className="bg-[#16213E] border border-white/10 rounded-3xl overflow-hidden hover:border-[#6C63FF]/40 transition-colors">
              <div className="flex items-center gap-4 p-6 border-b border-white/10">
                <img src={p.img} alt={p.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-[#6C63FF]/30" />
                <div>
                  <h3 className="text-white text-xl" style={{ fontWeight: 700 }}>{p.name}, <span className="text-[#A0AEC0]">{p.age}</span></h3>
                  <p className="text-[#6C63FF] text-sm" style={{ fontWeight: 600 }}>{p.occupation}</p>
                  <p className="text-[#A0AEC0] text-xs mt-0.5">{p.detail}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <span className="w-8 h-8 bg-[#4CAF50]/15 rounded-lg flex items-center justify-center text-sm shrink-0">🎯</span>
                  <div><p className="text-[#A0AEC0] text-xs uppercase tracking-wide">Goal</p><p className="text-white text-sm">{p.goal}</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="w-8 h-8 bg-[#FF5252]/15 rounded-lg flex items-center justify-center text-sm shrink-0">😤</span>
                  <div><p className="text-[#A0AEC0] text-xs uppercase tracking-wide">Frustration</p><p className="text-white text-sm">{p.frustration}</p></div>
                </div>
                <div className="bg-[#1A1A2E] rounded-xl p-4 border-l-2 border-[#6C63FF]">
                  <p className="text-white text-sm italic">"{p.quote}"</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 07 — EMPATHY MAP
// ══════════════════════════════════════════════════════════════════════════════
function EmpathyMap() {
  const quadrants = [
    {
      label: "SAYS", icon: "💬", color: "#6C63FF",
      items: [
        "\"I just want to know if there's parking before I leave\"",
        "\"I've been fined twice for parking illegally\"",
        "\"App-based booking would save me so much stress\"",
        "\"I always budget extra time just for finding parking\"",
      ],
    },
    {
      label: "THINKS", icon: "💭", color: "#4CAF50",
      items: [
        "\"What if there's no parking when I get there?\"",
        "\"Is this area safe to park overnight?\"",
        "\"I'm going to be late if I can't find a spot soon\"",
        "\"Why isn't there a better way to do this?\"",
      ],
    },
    {
      label: "DOES", icon: "🤲", color: "#FFB300",
      items: [
        "Circles the same block 3–4 times hoping for a spot",
        "Arrives 20 min early to account for parking time",
        "Uses Google Maps but finds no real parking data",
        "Calls ahead to check if parking is available",
      ],
    },
    {
      label: "FEELS", icon: "❤️", color: "#FF5252",
      items: [
        "Anxious and stressed when approaching an unknown area",
        "Frustrated by wasted time and unpredictable costs",
        "Relieved and grateful when a spot is found quickly",
        "Embarrassed if late to a meeting because of parking",
      ],
    },
  ];
  return (
    <section id="empathy" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="07" title="Empathy Map" />
      <SectionLabel>Understanding Arjun's mental state</SectionLabel>
      <SectionHeading>Inside the user's mind</SectionHeading>
      <p className="text-[#A0AEC0] text-sm mb-10 max-w-xl">
        The empathy map captures what our primary persona says, thinks, does, and feels around the parking experience — revealing the emotional depth behind the problem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quadrants.map((q) => (
          <div key={q.label} className="bg-[#16213E] border border-white/10 rounded-3xl p-7 relative overflow-hidden hover:border-[#6C63FF]/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: q.color }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: q.color + "20", border: `1px solid ${q.color}30` }}>
                {q.icon}
              </div>
              <p style={{ color: q.color, fontWeight: 800, fontSize: 13, letterSpacing: "0.15em" }}>{q.label}</p>
            </div>
            <ul className="space-y-3">
              {q.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#A0AEC0]">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: q.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Centre — the user */}
      <div className="mt-6 bg-gradient-to-r from-[#6C63FF]/10 via-[#16213E] to-[#4CAF50]/10 border border-white/10 rounded-2xl p-6 flex items-center justify-center gap-6 flex-wrap">
        <img src={arjunImg} alt="Arjun" className="w-14 h-14 rounded-xl object-cover border-2 border-[#6C63FF]/30" />
        <div className="text-center">
          <p className="text-white text-sm" style={{ fontWeight: 700 }}>Arjun, 27 — Sales Executive</p>
          <p className="text-[#A0AEC0] text-xs mt-1">Primary Persona · Core user of Vehicle Bay</p>
        </div>
        <p className="text-[#6C63FF] text-sm italic max-w-sm text-center">"I need parking sorted before I even arrive."</p>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 08 — COMPETITIVE ANALYSIS
// ══════════════════════════════════════════════════════════════════════════════
function CompetitiveAnalysis() {
  const criteria = ["Real-time slot availability", "Advance slot booking", "In-app payment", "QR code entry", "Pricing transparency", "India-specific coverage"];
  const competitors = [
    { name: "Google Maps", sub: "Parking", vals: [false, false, false, false, true, true] },
    { name: "ParkWhiz", sub: "US-based", vals: [true, true, true, false, true, false] },
    { name: "JustPark", sub: "UK-based", vals: [true, true, true, false, true, false] },
    { name: "Vehicle Bay", sub: "Our App ✨", vals: [true, true, true, true, true, true], highlight: true },
  ];
  return (
    <section id="competitive" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="08" title="Competitive Analysis" />
        <SectionLabel>Market landscape</SectionLabel>
        <SectionHeading>Where competitors fall short</SectionHeading>
        <p className="text-[#A0AEC0] text-sm mb-10 max-w-xl">No single competitor checks all boxes — especially for India. Vehicle Bay is the only solution with every feature needed by Indian urban drivers.</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left py-3 pr-6 text-[#A0AEC0] text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`text-center py-3 px-4 text-xs uppercase tracking-wide ${c.highlight ? "text-[#6C63FF]" : "text-[#A0AEC0]"}`} style={{ fontWeight: 700 }}>
                    {c.name}<br /><span className="text-[10px] opacity-60 normal-case tracking-normal">{c.sub}</span>
                  </th>
                ))}
              </tr>
              <tr><td colSpan={5}><div className="h-px bg-white/10 my-1" /></td></tr>
            </thead>
            <tbody>
              {criteria.map((cr, ci) => (
                <tr key={cr} className={ci % 2 === 0 ? "bg-[#16213E]/50" : ""}>
                  <td className="py-3 pr-6 text-white text-sm pl-3 rounded-l-xl" style={{ fontWeight: 500 }}>{cr}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`text-center py-3 px-4 ${c.highlight ? "rounded-r-xl" : ""}`}>
                      {c.vals[ci] ? (
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm ${c.highlight ? "bg-[#6C63FF]/20 text-[#6C63FF]" : "bg-[#4CAF50]/15 text-[#4CAF50]"}`}>✓</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FF5252]/10 text-[#FF5252] text-sm">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-[#6C63FF]/10 border border-[#6C63FF]/25 rounded-2xl p-5 flex items-center gap-4">
          <span className="text-2xl">🏆</span>
          <p className="text-[#A0AEC0] text-sm">Vehicle Bay is the <span className="text-white" style={{ fontWeight: 600 }}>only solution</span> with real-time availability, advance booking, QR entry, transparent pricing, and <span className="text-[#6C63FF]" style={{ fontWeight: 600 }}>India-first coverage</span> — all in one app.</p>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 09 — USER JOURNEY MAP
// ══════════════════════════════════════════════════════════════════════════════
function UserJourneyMap() {
  const stages = [
    { stage: "Awareness", action: "Arjun realizes he needs parking for tomorrow's client meeting at an unfamiliar location.", emotion: "😟 Anxious", ec: "#FF5252", opp: "Send a proactive in-app reminder to book parking before travel." },
    { stage: "Discovery", action: "He opens Vehicle Bay, searches by destination, sees a map with nearby lots and slot counts.", emotion: "🤔 Curious", ec: "#FFB300", opp: "Ensure map loads instantly with clear slot count badges on each pin." },
    { stage: "Consideration", action: "He browses nearby lots, compares hourly rates, amenities, and checks operating hours.", emotion: "😌 Relieved", ec: "#26A69A", opp: "Surface key info (price, distance, slots) without making users dig." },
    { stage: "Decision", action: "Selects slot A7, sets check-in 2 PM to 5 PM, confirms booking in 3 taps.", emotion: "😊 Confident", ec: "#4CAF50", opp: "Keep the booking flow to 3 taps — remove all friction at this stage." },
    { stage: "Post-Use", action: "Arrives, scans QR code at the barrier, parks in his reserved spot, rates the experience.", emotion: "😄 Satisfied", ec: "#6C63FF", opp: "Prompt a quick rating right after exit to gather authentic data." },
  ];
  return (
    <section id="journey" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="09" title="User Journey Map" />
      <SectionLabel>Arjun's journey with Vehicle Bay</SectionLabel>
      <SectionHeading>From frustration to satisfaction</SectionHeading>
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={s.stage} className="grid grid-cols-[auto_1fr_auto_1fr] gap-4 md:gap-6 items-start bg-[#16213E] border border-white/10 rounded-2xl p-5 hover:border-[#6C63FF]/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center text-[#6C63FF] text-sm shrink-0" style={{ fontWeight: 700 }}>{i + 1}</div>
            <div>
              <p className="text-[#A0AEC0] text-[9px] uppercase tracking-widest mb-0.5" style={{ fontWeight: 600 }}>Stage</p>
              <p className="text-white text-sm" style={{ fontWeight: 700 }}>{s.stage}</p>
              <p className="text-[#A0AEC0] text-xs mt-1 leading-relaxed">{s.action}</p>
            </div>
            <div>
              <p className="text-[#A0AEC0] text-[9px] uppercase tracking-widest mb-1.5" style={{ fontWeight: 600 }}>Emotion</p>
              <span className="inline-block text-xs px-3 py-1.5 rounded-full border" style={{ color: s.ec, borderColor: s.ec + "40", background: s.ec + "15", fontWeight: 600 }}>{s.emotion}</span>
            </div>
            <div>
              <p className="text-[#A0AEC0] text-[9px] uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Design Opportunity</p>
              <p className="text-[#A0AEC0] text-xs leading-relaxed">{s.opp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 10 — USER FLOW DIAGRAM
// ══════════════════════════════════════════════════════════════════════════════
function UserFlowDiagram() {
  const flows = [
    {
      label: "New User Flow", color: "#6C63FF",
      steps: [
        { type: "start", text: "Opens App" },
        { type: "screen", text: "Splash" },
        { type: "screen", text: "Walkthrough" },
        { type: "decision", text: "Has Account?" },
        { type: "branch", branches: ["Sign Up", "Login"] },
        { type: "screen", text: "Home Screen" },
      ],
    },
  ];

  const mainFlow = [
    { icon: "🚀", label: "Splash", type: "screen" },
    { icon: "👋", label: "Walkthrough", type: "screen" },
    { icon: "🔐", label: "Login / Sign Up", type: "decision" },
    { icon: "🗺️", label: "Home (Map+List)", type: "screen" },
    { icon: "🔍", label: "Search Location", type: "action" },
    { icon: "📋", label: "Parking Detail", type: "screen" },
    { icon: "🅿️", label: "Select Slot & Time", type: "screen" },
    { icon: "✅", label: "Confirm Booking", type: "decision" },
    { icon: "📱", label: "QR Confirmation", type: "screen" },
    { icon: "🎉", label: "Success!", type: "end" },
  ];

  const sidePaths = [
    { label: "User cancels", icon: "↩️", dest: "Home Screen" },
    { label: "Slot unavailable", icon: "🔄", dest: "Search Again" },
    { label: "Payment fails", icon: "⚠️", dest: "Retry Payment" },
  ];

  return (
    <section id="flow" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="10" title="User Flow Diagram" />
        <SectionLabel>Happy path + edge cases</SectionLabel>
        <SectionHeading>How users navigate the app</SectionHeading>

        {/* Main flow */}
        <div className="mb-8">
          <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 600 }}>Primary Flow — Happy Path</p>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center gap-2 min-w-max">
              {mainFlow.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`flex flex-col items-center gap-2 ${step.type === "decision" ? "w-28" : "w-24"}`}>
                    <div className={`flex items-center justify-center text-xl shadow-lg ${
                      step.type === "end" ? "w-14 h-14 rounded-full bg-[#4CAF50]/20 border-2 border-[#4CAF50]/50" :
                      step.type === "start" ? "w-14 h-14 rounded-full bg-[#6C63FF]/20 border-2 border-[#6C63FF]/50" :
                      step.type === "decision" ? "w-14 h-14 rotate-45 bg-[#FFB300]/15 border border-[#FFB300]/30" :
                      step.type === "action" ? "w-12 h-12 rounded-xl bg-white/5 border border-white/20" :
                      "w-14 h-14 rounded-2xl bg-[#16213E] border border-[#6C63FF]/30"
                    }`}>
                      <span className={step.type === "decision" ? "-rotate-45" : ""}>{step.icon}</span>
                    </div>
                    <p className="text-white text-[9px] text-center leading-tight whitespace-nowrap" style={{ fontWeight: 600 }}>{step.label}</p>
                  </div>
                  {i < mainFlow.length - 1 && (
                    <div className="flex items-center gap-0.5 mb-5">
                      <div className="w-5 h-px bg-[#6C63FF]/30" />
                      <span className="text-[#6C63FF]/50 text-xs">›</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { shape: "rounded-full", color: "#6C63FF", label: "Start / End" },
            { shape: "rounded-xl", color: "#6C63FF", label: "Screen" },
            { shape: "rotate-45", color: "#FFB300", label: "Decision Point" },
            { shape: "rounded-lg", color: "white", label: "Action" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs text-[#A0AEC0]">
              <div className={`w-4 h-4 border ${l.shape}`} style={{ borderColor: l.color + "60", background: l.color + "20" }} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Edge cases / alternate paths */}
        <div>
          <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 600 }}>Alternate Paths & Edge Cases</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {sidePaths.map((p) => (
              <div key={p.label} className="bg-[#16213E] border border-[#FFB300]/20 rounded-xl p-4 flex items-center gap-4">
                <span className="text-xl">{p.icon}</span>
                <div>
                  <p className="text-[#FFB300] text-xs" style={{ fontWeight: 700 }}>{p.label}</p>
                  <p className="text-[#A0AEC0] text-xs">→ {p.dest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 11 — INFORMATION ARCHITECTURE
// ══════════════════════════════════════════════════════════════════════════════
function InfoArchitecture() {
  const nodes = [
    { label: "Splash", icon: "🚗" }, { label: "Walkthrough", icon: "👋" },
    { label: "Login /\nSign Up", icon: "🔐" }, { label: "Home\n(Map+List)", icon: "🗺️" },
    { label: "Parking\nDetail", icon: "📋" }, { label: "Select Slot\n& Time", icon: "🅿️" },
    { label: "Confirm\nBooking", icon: "📱" },
  ];
  return (
    <section id="ia" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="11" title="Information Architecture" />
      <SectionLabel>App screen map</SectionLabel>
      <SectionHeading>How screens connect</SectionHeading>
      <div className="overflow-x-auto pb-4">
        <div className="flex items-center gap-3 min-w-max">
          {nodes.map((node, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2 w-28">
                <div className="w-14 h-14 rounded-2xl bg-[#16213E] border border-[#6C63FF]/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(108,99,255,0.1)]">{node.icon}</div>
                <p className="text-white text-[10px] text-center leading-tight whitespace-pre-line" style={{ fontWeight: 600 }}>{node.label}</p>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex items-center gap-1 text-[#6C63FF]/40 mb-6">
                  <div className="w-5 h-px bg-[#6C63FF]/30" /><span className="text-[#6C63FF]/60 text-xs">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[#A0AEC0] text-xs flex items-center gap-2">
        <span className="text-[#6C63FF]/60">↩</span> Booking Confirmation loops back to the Home screen after completion
      </p>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 12 — DESIGN PROCESS (DOUBLE DIAMOND)
// ══════════════════════════════════════════════════════════════════════════════
function DesignProcess() {
  const diamonds = [
    { phase: "Discover", color: "#6C63FF", items: ["User research (surveys)", "Competitor audit", "Field observation"], icon: "🔍" },
    { phase: "Define", color: "#7B68EE", items: ["User personas", "Empathy map", "Journey mapping", "Problem framing"], icon: "📐" },
    { phase: "Develop", color: "#9B8FEE", items: ["Lo-fi wireframes", "User flow diagrams", "Iteration rounds"], icon: "✏️" },
    { phase: "Deliver", color: "#B3ABEE", items: ["Final hi-fi UI", "Interactive prototype", "Design system", "Usability test"], icon: "🚀" },
  ];
  return (
    <section id="process" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="12" title="Design Process" />
        <SectionLabel>The Double Diamond model</SectionLabel>
        <SectionHeading>How I approached the problem</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {diamonds.map((d, i) => (
            <div key={d.phase} className="bg-[#16213E] border border-white/10 rounded-2xl p-6 relative overflow-hidden hover:border-[#6C63FF]/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: d.color }} />
              <span className="text-3xl mb-3 block">{d.icon}</span>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] text-white" style={{ background: d.color, fontWeight: 800 }}>{i + 1}</div>
                <p className="text-sm" style={{ fontWeight: 700, color: d.color }}>{d.phase}</p>
              </div>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="text-[#A0AEC0] text-xs flex items-start gap-2">
                    <span style={{ color: d.color }} className="mt-0.5 shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 13 — WIREFRAMES & ITERATIONS
// ══════════════════════════════════════════════════════════════════════════════
function Wireframes() {
  const decisions = [
    { title: "Home Screen Layout", before: "List of parking lots only — no spatial context for user", after: "Map + List hybrid: map gives proximity, list gives detail", why: "Users need to understand 'how close is this?' before engaging" },
    { title: "Slot Selection", before: "Simple dropdown list to pick a slot number", after: "Colour-coded 2D grid matching real bay layout", why: "Spatial grid matches real-world mental model of a parking lot" },
    { title: "Confirmation Screen", before: "Text-based page with a booking ID to memorise", after: "QR code as hero element with booking summary below", why: "QR is actionable — scan at barrier, not a number to remember" },
  ];
  return (
    <section id="wireframes" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="13" title="Wireframes & Iterations" />
      <SectionLabel>Lo-fi thinking & design evolution</SectionLabel>
      <SectionHeading>Before → After Design Decisions</SectionHeading>

      {/* Lo-fi wireframe representation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {[
          { label: "Home — Lo-fi v1", note: "List only, no map", elements: ["search bar", "list item", "list item", "list item", "list item"] },
          { label: "Slot Select — Lo-fi v1", note: "Dropdown only", elements: ["date picker", "dropdown: slot", "time picker", "CTA button"] },
          { label: "Home — Lo-fi v2", note: "Map + List added", elements: ["search bar", "MAP VIEW", "list item", "list item"] },
        ].map((w) => (
          <div key={w.label} className="bg-[#16213E] border border-white/10 rounded-2xl p-5">
            <p className="text-white text-xs mb-1" style={{ fontWeight: 600 }}>{w.label}</p>
            <p className="text-[#A0AEC0] text-[10px] mb-4">{w.note}</p>
            <div className="bg-white/5 rounded-xl p-3 space-y-2">
              {w.elements.map((el, i) => (
                <div key={i} className={`h-7 rounded-lg flex items-center px-3 ${el === "MAP VIEW" ? "bg-[#6C63FF]/15 border border-[#6C63FF]/20 h-14" : "bg-white/10"}`}>
                  <span className="text-white/40 text-[9px]">{el}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Before → After */}
      <div className="space-y-4">
        {decisions.map((d) => (
          <div key={d.title} className="bg-[#16213E] border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto_1fr] gap-4 items-center hover:border-[#6C63FF]/30 transition-colors">
            <div className="md:w-36">
              <p className="text-[#A0AEC0] text-xs uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>Screen</p>
              <p className="text-white text-sm" style={{ fontWeight: 700 }}>{d.title}</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="bg-[#FF5252]/10 border border-[#FF5252]/20 rounded-xl p-4">
              <p className="text-[#FF5252] text-[9px] uppercase tracking-wider mb-1" style={{ fontWeight: 700 }}>Before</p>
              <p className="text-[#A0AEC0] text-xs leading-relaxed">{d.before}</p>
            </div>
            <div className="text-center text-[#6C63FF] text-lg font-bold hidden md:block">→</div>
            <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-xl p-4">
              <p className="text-[#4CAF50] text-[9px] uppercase tracking-wider mb-1" style={{ fontWeight: 700 }}>After</p>
              <p className="text-[#A0AEC0] text-xs leading-relaxed">{d.after}</p>
              <p className="text-[#6C63FF] text-[9px] mt-2 italic">Why: {d.why}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 14 — DESIGN SYSTEM (COLOURS, TYPE, COMPONENTS)
// ══════════════════════════════════════════════════════════════════════════════
function DesignSystemSection() {
  const colors = [
    { hex: "#1A1A2E", name: "Primary BG", role: "Main background" },
    { hex: "#16213E", name: "Surface", role: "Cards & modals" },
    { hex: "#6C63FF", name: "Accent", role: "CTAs & highlights" },
    { hex: "#4CAF50", name: "Available", role: "Free slots" },
    { hex: "#FF5252", name: "Occupied", role: "Taken slots" },
    { hex: "#7B68EE", name: "Selected", role: "Active booking" },
    { hex: "#FFFFFF", name: "Text Primary", role: "Headings" },
    { hex: "#A0AEC0", name: "Text Secondary", role: "Descriptions" },
  ];
  const fonts = [
    { name: "Poppins Bold", usage: "Display / Headings", sample: "City Hall Parking", size: "20–36px" },
    { name: "Inter Regular", usage: "Body / Labels / Forms", sample: "alex@gmail.com", size: "12–15px" },
    { name: "Inter Light", usage: "Captions & hints", sample: "Forget password?", size: "11–12px" },
    { name: "Sansita One", usage: "Logo wordmark", sample: "Vehicle Bay", size: "36px" },
  ];

  return (
    <section id="system" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="14" title="Design System" />

        {/* Colours */}
        <div className="mb-16">
          <SectionLabel>Colour Palette</SectionLabel>
          <SectionHeading>Brand Colours</SectionHeading>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
            {colors.map((c) => (
              <div key={c.hex} className="flex flex-col gap-2">
                <div className="w-full aspect-square rounded-2xl border border-white/10" style={{ background: c.hex }} />
                <div>
                  <p className="text-white text-[10px]" style={{ fontWeight: 600 }}>{c.name}</p>
                  <p className="text-[#A0AEC0] text-[9px]">{c.hex}</p>
                  <p className="text-[#A0AEC0] text-[9px]">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="text-sm text-[#A0AEC0] leading-relaxed">
            <span className="text-[#6C63FF]" style={{ fontWeight: 600 }}>Reasoning:</span>{" "}
            Dark navy (#1A1A2E) reduces eye strain for travellers using the app at night or in bright sunlight. High contrast is critical when glancing at a screen while driving. Violet accent is distinctive in the mobility app space.
          </Card>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <SectionLabel>Typography</SectionLabel>
          <SectionHeading>Font System</SectionHeading>
          <div className="space-y-3">
            {fonts.map((f) => (
              <div key={f.name} className="bg-[#16213E] border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6C63FF]/15 rounded-xl flex items-center justify-center text-[#6C63FF]" style={{ fontWeight: 700, fontSize: 18 }}>Aa</div>
                  <div>
                    <p className="text-white text-sm" style={{ fontWeight: 700 }}>{f.name}</p>
                    <p className="text-[#A0AEC0] text-xs">{f.usage}</p>
                  </div>
                </div>
                <p className="text-[#6C63FF] text-sm flex-1 text-center hidden md:block">{f.sample}</p>
                <span className="bg-[#1A1A2E] text-[#A0AEC0] text-xs px-3 py-1.5 rounded-full border border-white/10">{f.size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Component States Showcase */}
        <div className="mb-16">
          <SectionLabel>Component States</SectionLabel>
          <SectionHeading>UI Components in Action</SectionHeading>

          {/* Buttons */}
          <div className="bg-[#16213E] border border-white/10 rounded-2xl p-7 mb-4">
            <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-5" style={{ fontWeight: 600 }}>Buttons — 3 States</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#6C63FF] text-white text-sm px-6 py-3 rounded-xl" style={{ fontWeight: 600 }}>Book Parking Slot</div>
                <span className="text-[#A0AEC0] text-[10px]">Primary (Default)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#7B68EE] text-white text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(108,99,255,0.4)]" style={{ fontWeight: 600 }}>Book Parking Slot</div>
                <span className="text-[#A0AEC0] text-[10px]">Hover / Pressed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#6C63FF]/30 text-white/40 text-sm px-6 py-3 rounded-xl cursor-not-allowed" style={{ fontWeight: 600 }}>Book Parking Slot</div>
                <span className="text-[#A0AEC0] text-[10px]">Disabled</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="border-2 border-[#6C63FF] text-[#6C63FF] text-sm px-6 py-3 rounded-xl" style={{ fontWeight: 600 }}>View Details</div>
                <span className="text-[#A0AEC0] text-[10px]">Secondary (Outlined)</span>
              </div>
            </div>
          </div>

          {/* Slot Cards */}
          <div className="bg-[#16213E] border border-white/10 rounded-2xl p-7 mb-4">
            <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-5" style={{ fontWeight: 600 }}>Parking Slot Card — 3 States</p>
            <div className="flex flex-wrap gap-4">
              {[
                { id: "A1", state: "Available", bg: "#4CAF50", border: "#4CAF50", icon: "✓" },
                { id: "A2", state: "Occupied", bg: "#374151", border: "#4B5563", icon: "✗" },
                { id: "A3", state: "Selected", bg: "#6C63FF", border: "#7B68EE", icon: "★" },
              ].map((slot) => (
                <div key={slot.id} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 border-2"
                    style={{ background: slot.bg + "20", borderColor: slot.border + "60" }}>
                    <span className="text-xl" style={{ color: slot.bg }}>{slot.icon}</span>
                    <span className="text-white text-sm" style={{ fontWeight: 700 }}>{slot.id}</span>
                  </div>
                  <span className="text-xs" style={{ color: slot.bg, fontWeight: 600 }}>{slot.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form fields */}
          <div className="bg-[#16213E] border border-white/10 rounded-2xl p-7">
            <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-5" style={{ fontWeight: 600 }}>Input Fields — 4 States</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Default", border: "border-white/20", text: "E-mail address", placeholder: true },
                { label: "Focused", border: "border-[#6C63FF]", text: "alex@gmail.com", placeholder: false, shadow: "shadow-[0_0_0_3px_rgba(108,99,255,0.15)]" },
                { label: "Filled", border: "border-[#4CAF50]/50", text: "alex@gmail.com", placeholder: false },
                { label: "Error", border: "border-[#FF5252]", text: "invalid@", placeholder: false, error: "Invalid email format" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <p className="text-[#A0AEC0] text-[10px]">{f.label}</p>
                  <div className={`bg-white/5 border ${f.border} ${f.shadow || ""} rounded-xl px-4 py-3 text-sm ${f.placeholder ? "text-white/30" : "text-white"}`}>{f.text}</div>
                  {f.error && <p className="text-[#FF5252] text-[10px]">{f.error}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SectionLabel>Spacing System</SectionLabel>
            <h3 className="text-white text-xl mb-4" style={{ fontWeight: 700 }}>8pt Grid</h3>
            <div className="space-y-3">
              {[{ label: "Base", value: "8px", w: "w-8" }, { label: "Small", value: "16px", w: "w-16" }, { label: "Medium", value: "24px", w: "w-24" }, { label: "Large", value: "32px", w: "w-32" }].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="text-[#A0AEC0] text-xs w-16">{s.label}</span>
                  <div className={`${s.w} h-4 bg-[#6C63FF]/30 rounded border border-[#6C63FF]/30`} />
                  <span className="text-[#6C63FF] text-xs" style={{ fontWeight: 600 }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Iconography</SectionLabel>
            <h3 className="text-white text-xl mb-4" style={{ fontWeight: 700 }}>Icon Style Guide</h3>
            <div className="grid grid-cols-5 gap-3">
              {["🗺️","🅿️","📱","💰","🚗","🔐","⚡","📶","🛡️","📹"].map((icon, i) => (
                <div key={i} className="w-12 h-12 bg-[#16213E] border border-white/10 rounded-xl flex items-center justify-center text-xl hover:border-[#6C63FF]/30 transition-colors">
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-[#A0AEC0] text-xs mt-3">Rounded, filled icon style. Categories: Navigation, Parking, Payment, Vehicle, Amenities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 15 — USABILITY TESTING
// ══════════════════════════════════════════════════════════════════════════════
function UsabilityTesting() {
  const tasks = [
    { task: "Find parking near 'City Hall' and book slot A7 for 2 PM–5 PM", success: "3/3", time: "1m 42s", issues: "None" },
    { task: "Identify the hourly rate for Diamond Parking without tapping into it", success: "3/3", time: "0m 18s", issues: "None" },
    { task: "Use the QR code screen to simulate scanning at entry", success: "2/3", time: "0m 55s", issues: "QR too small on 1 device" },
    { task: "Navigate back to Home from the Success screen", success: "3/3", time: "0m 12s", issues: "None" },
  ];
  const findings = [
    { severity: "High", issue: "QR code was too small on smaller phone screens — hard to scan at real-world distance", fix: "Increased QR card size and added minimum padding around the QR pattern", color: "#FF5252" },
    { severity: "Medium", issue: "Slot grid colour coding was initially confusing — users weren't sure what 'blue' meant", fix: "Added text labels (Available / Occupied / Selected) below the colour legend", color: "#FFB300" },
    { severity: "Low", issue: "Some users wanted to see total cost before selecting slot & time", fix: "Added dynamic price preview that updates as duration changes", color: "#4CAF50" },
  ];
  return (
    <section id="testing" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="15" title="Usability Testing" />
      <SectionLabel>Peer usability test — 3 participants</SectionLabel>
      <SectionHeading>Testing, Findings & Iterations</SectionHeading>

      {/* Methodology */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Method", value: "Think-aloud protocol", icon: "🗣️" },
          { label: "Participants", value: "3 peers (target audience)", icon: "👤" },
          { label: "Sessions", value: "Moderated, 15 min each", icon: "⏱️" },
          { label: "Tool", value: "Figma prototype", icon: "🎨" },
        ].map((m) => (
          <Card key={m.label} className="text-center">
            <span className="text-3xl block mb-2">{m.icon}</span>
            <p className="text-[#A0AEC0] text-[10px] uppercase tracking-wider mb-1">{m.label}</p>
            <p className="text-white text-sm" style={{ fontWeight: 600 }}>{m.value}</p>
          </Card>
        ))}
      </div>

      {/* Task results */}
      <div className="mb-12">
        <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-5" style={{ fontWeight: 600 }}>Task Completion Results</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-[#16213E]">
                <th className="text-left py-3 px-4 text-[#A0AEC0] text-xs rounded-l-xl" style={{ fontWeight: 600 }}>Task</th>
                <th className="text-center py-3 px-4 text-[#A0AEC0] text-xs" style={{ fontWeight: 600 }}>Success Rate</th>
                <th className="text-center py-3 px-4 text-[#A0AEC0] text-xs" style={{ fontWeight: 600 }}>Avg. Time</th>
                <th className="text-left py-3 px-4 text-[#A0AEC0] text-xs rounded-r-xl" style={{ fontWeight: 600 }}>Issues Found</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#16213E]/40" : ""}>
                  <td className="py-3 px-4 text-white text-xs">{t.task}</td>
                  <td className="py-3 px-4 text-center"><span className="text-[#4CAF50] text-sm" style={{ fontWeight: 700 }}>{t.success}</span></td>
                  <td className="py-3 px-4 text-center text-[#A0AEC0] text-xs">{t.time}</td>
                  <td className="py-3 px-4 text-xs text-[#A0AEC0]">{t.issues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Findings & fixes */}
      <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-5" style={{ fontWeight: 600 }}>Issues Found → Design Fixes</p>
      <div className="space-y-4">
        {findings.map((f, i) => (
          <div key={i} className="bg-[#16213E] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#6C63FF]/30 transition-colors">
            <span className="text-xs px-3 py-1.5 rounded-full border shrink-0 h-fit" style={{ color: f.color, borderColor: f.color + "40", background: f.color + "15", fontWeight: 700 }}>
              {f.severity} Priority
            </span>
            <div className="flex-1">
              <p className="text-[#FF5252] text-sm mb-2" style={{ fontWeight: 600 }}>Issue: {f.issue}</p>
              <p className="text-[#A0AEC0] text-xs flex items-start gap-2"><span className="text-[#4CAF50]" style={{ fontWeight: 700 }}>Fix →</span>{f.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 16 — FINAL UI SCREENS
// ══════════════════════════════════════════════════════════════════════════════
function FinalScreens() {
  return (
    <section id="screens" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="16" title="Final UI Screens" />
        <SectionLabel>High-fidelity designs</SectionLabel>
        <SectionHeading>The complete screen flow</SectionHeading>
        <div className="flex flex-wrap justify-center gap-8">

          {/* 01. Splash */}
          <Phone bg="#000000" label="01 · Splash Screen"
            annotation="Bold brand identity on deep black — commands attention on first launch.">
            <div className="size-full flex items-center justify-center">
              <img src={imgLogo} alt="Logo" className="w-32 h-32 rounded-[1.8rem] object-cover" />
            </div>
          </Phone>

          {/* 02. Login */}
          <Phone bg="#3a3e63" label="02 · Login Page"
            annotation="Clean credentials on brand navy. Google & Apple SSO reduce sign-in barrier.">
            <div className="p-4 pt-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <img src={imgLogo} alt="Logo" className="w-7 h-7 rounded-lg object-cover" />
                <span className="text-white text-[10px]" style={{ fontWeight: 700 }}>Vehicle Bay</span>
              </div>
              <p className="text-white text-lg" style={{ fontWeight: 700 }}>Login</p>
              <p className="text-white/50 text-[8px] mb-1">please login to your account</p>
              <div><p className="text-white text-[7px] mb-1">E-mail address</p><div className="bg-white rounded-lg h-6 w-full flex items-center px-2"><span className="text-gray-500 text-[7px]">alex@gmail.com</span></div></div>
              <div><p className="text-white text-[7px] mb-1">Password</p><div className="bg-white rounded-lg h-6 w-full flex items-center px-2"><span className="text-gray-400 text-[8px]">••••••••</span></div></div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1"><div className="w-2 h-2 border border-white/50" /><p className="text-white/70 text-[6.5px]">Remember me</p></div>
                <p className="text-white/50 text-[6.5px]">Forget password?</p>
              </div>
              <div className="bg-white/20 rounded-xl h-7 flex items-center justify-center border border-white/30 mt-1"><p className="text-white text-[9px]" style={{ fontWeight: 600 }}>login</p></div>
              <p className="text-white/40 text-[6px] text-center mt-1">Or signup with</p>
              <div className="flex gap-2">
                <div className="bg-[#15151a] rounded px-2 py-1 text-white text-[6.5px] flex items-center gap-1"><span>G</span> Google</div>
                <div className="bg-[#15151a] rounded px-2 py-1 text-white text-[6.5px] flex items-center gap-1"><span>⌘</span> Apple</div>
              </div>
            </div>
          </Phone>

          {/* 03. Sign Up */}
          <Phone bg="#3a3e63" label="03 · Sign Up Page"
            annotation="Mirrors login for consistency. Minimal fields keep registration fast.">
            <div className="p-4 pt-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1"><img src={imgLogo} alt="Logo" className="w-7 h-7 rounded-lg object-cover" /><span className="text-white text-[10px]" style={{ fontWeight: 700 }}>Vehicle Bay</span></div>
              <p className="text-white text-lg" style={{ fontWeight: 700 }}>Sign Up</p>
              <p className="text-white/50 text-[8px] mb-1">create your account</p>
              {["Full Name", "E-mail address", "Password", "Confirm Password"].map((f) => (
                <div key={f}><p className="text-white text-[7px] mb-1">{f}</p><div className="bg-white rounded-lg h-6 w-full" /></div>
              ))}
              <div className="bg-[#6C63FF] rounded-xl h-7 flex items-center justify-center mt-2"><p className="text-white text-[9px]" style={{ fontWeight: 600 }}>Create Account</p></div>
            </div>
          </Phone>

          {/* 04. Home */}
          <Phone bg="#ffffff" label="04 · Home — Map + List"
            annotation="Map + list hybrid gives spatial context. Search bar immediately accessible.">
            <div className="size-full flex flex-col">
              <div className="bg-[#3a3e63] px-3 pb-3 pt-7">
                <p className="text-white text-[9px] italic mb-2" style={{ fontWeight: 600 }}>Welcome back, Arjun 👋</p>
                <p className="text-white/70 text-[7px] mb-1">Find parking</p>
                <div className="bg-white rounded-md h-5 flex items-center px-2"><span className="text-gray-400 text-[7px]">🔍 search location..</span></div>
              </div>
              <div className="mx-2 mt-1 rounded-xl overflow-hidden h-24 relative">
                <img src={imgMap} alt="Map" className="size-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center"><div className="bg-[#6C63FF] text-white text-[7px] px-2 py-0.5 rounded-full border border-white shadow" style={{ fontWeight: 700 }}>🅿 ₹40/hr</div></div>
              </div>
              <p className="px-2 text-[8px] mt-1.5 text-gray-800" style={{ fontWeight: 700 }}>Nearby Parking</p>
              <div className="px-2 space-y-1 mt-1">
                {[{ name: "City Hall Parking", slots: "10 slots", rate: "₹40/hr", km: "0.5 km" }, { name: "Diamond Parking", slots: "8 slots", rate: "₹41/hr", km: "1.5 km" }, { name: "Central Parking", slots: "20 slots", rate: "₹35/hr", km: "2.1 km" }].map((p) => (
                  <div key={p.name} className="border border-gray-200 rounded-lg h-9 flex items-center px-2 gap-2">
                    <div className="w-5 h-5 bg-[#3618e3] rounded shrink-0 flex items-center justify-center text-[8px] text-white">🚗</div>
                    <div className="flex-1 min-w-0"><p className="text-[7px] text-gray-800 truncate" style={{ fontWeight: 600 }}>{p.name}</p><p className="text-[6px] text-green-600">{p.slots} · {p.km}</p></div>
                    <p className="text-[6.5px] text-gray-700 shrink-0" style={{ fontWeight: 700 }}>{p.rate}</p>
                  </div>
                ))}
              </div>
            </div>
          </Phone>

          {/* 05. Parking Detail */}
          <Phone bg="#ffffff" label="05 · Parking Lot Detail"
            annotation="Rate, slots, amenities, hours — all visible before committing. CTA at bottom.">
            <div className="size-full flex flex-col">
              <div className="bg-[#3a3e63] h-14 flex items-center justify-center"><div className="w-10 h-10 bg-[#3618e3] rounded-xl flex items-center justify-center text-white text-lg">🚗</div></div>
              <div className="px-3 py-2 flex flex-col gap-1.5">
                <p className="text-[10px] text-black" style={{ fontWeight: 700 }}>City Hall Parking</p>
                <div className="flex items-center gap-1"><span className="text-yellow-500 text-[8px]">★ 4.5</span><span className="text-gray-400 text-[7px]">(247 reviews)</span></div>
                <div className="flex items-center gap-1"><span className="text-[7px] text-gray-500">📍 0.5 km away</span></div>
                <div className="bg-[#f3fdf5] border border-[#1bab38] rounded-lg px-2 py-1"><p className="text-[7px] text-[#19761d]" style={{ fontWeight: 600 }}>10 slots available</p></div>
                <div className="bg-[#f1f6fe] rounded-lg px-2 py-1.5"><p className="text-[7px] text-black">Parking Rate</p><p className="text-[#2562d2] text-[12px]" style={{ fontWeight: 700 }}>₹40 <span className="text-gray-500 text-[7px]">per hour</span></p></div>
                <div className="grid grid-cols-4 gap-1">{["📹 CCTV", "🛡️ Security", "⚡ EV", "📶 WiFi"].map((a) => (<div key={a} className="bg-[#dadef3] rounded-md h-9 flex flex-col items-center justify-center gap-0.5"><span className="text-[9px]">{a.split(" ")[0]}</span><span className="text-[5.5px] text-gray-700" style={{ fontWeight: 700 }}>{a.split(" ")[1]}</span></div>))}</div>
                <div className="flex items-center gap-1"><span className="text-green-500 text-[8px]">●</span><span className="text-green-500 text-[7px]">Open 24/7</span></div>
                <div className="bg-[#285ee8] rounded-lg h-6 flex items-center justify-center"><p className="text-white text-[7.5px]" style={{ fontWeight: 600 }}>Book Parking Slot</p></div>
              </div>
            </div>
          </Phone>

          {/* 06. Slot Selection */}
          <Phone bg="#ffffff" label="06 · Slot & Time Selection"
            annotation="Colour-coded 2D grid mirrors real-world parking bay layout.">
            <div className="px-3 py-3 pt-7 flex flex-col gap-2">
              <p className="text-[10px] text-black" style={{ fontWeight: 700 }}>Select Slot & Time</p>
              <div className="grid grid-cols-2 gap-1">
                {[{ l: "Date", v: "26 Dec 2025" }, { l: "Duration", v: "3 Hours" }, { l: "Check-in", v: "2:00 PM" }, { l: "Check-out", v: "5:00 PM" }].map((f) => (
                  <div key={f.l} className="border border-gray-300 rounded-lg px-2 py-1.5"><p className="text-gray-400 text-[5.5px]">{f.l}</p><p className="text-[7px] text-black" style={{ fontWeight: 600 }}>{f.v}</p></div>
                ))}
              </div>
              <p className="text-[8px] text-black mt-1" style={{ fontWeight: 700 }}>Select Parking Slot</p>
              <div className="grid grid-cols-3 gap-1">
                {[{ id: "A1", s: "available" }, { id: "A2", s: "occupied" }, { id: "A3", s: "available" }, { id: "A4", s: "occupied" }, { id: "A5", s: "occupied" }, { id: "A6", s: "available" }, { id: "A7", s: "selected" }, { id: "B1", s: "occupied" }, { id: "B2", s: "available" }].map((slot) => (
                  <div key={slot.id} className="h-9 rounded-lg flex items-center justify-center text-white text-[8px]" style={{ background: slot.s === "available" ? "#4CAF50" : slot.s === "selected" ? "#6C63FF" : "#374151", fontWeight: 700 }}>{slot.id}</div>
                ))}
              </div>
              <div className="flex gap-2 text-[6px] text-gray-600">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#4CAF50]" />Available</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#374151]" />Occupied</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#6C63FF]" />Selected</span>
              </div>
              <div className="bg-[#292ec4] rounded-lg h-6 flex items-center justify-center"><p className="text-white text-[8px]" style={{ fontWeight: 600 }}>Confirm Slot</p></div>
            </div>
          </Phone>

          {/* 07. QR Confirmation */}
          <Phone bg="#ffffff" label="07 · Booking Confirmation"
            annotation="QR is the hero — large enough to scan. Booking summary below for reference.">
            <div className="px-3 py-3 pt-7 flex flex-col gap-1.5">
              <p className="text-[9px] text-black" style={{ fontWeight: 700 }}>Booking Confirmed! 🎉</p>
              <p className="text-gray-500 text-[6.5px]">Show QR at the entry barrier</p>
              <div className="bg-gray-100 rounded-xl p-3 flex items-center justify-center h-24 my-1">
                <div className="grid grid-cols-5 gap-0.5">
                  {[1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1].map((b, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: b ? "#000" : "#f3f4f6" }} />
                  ))}
                </div>
              </div>
              <div className="bg-[#f1f6fe] rounded-xl p-2.5">
                {[["Parking","City Hall"],["Slot","A7"],["Date","26 Dec 2025"],["Time","2:00–5:00 PM"],["Duration","3 hours"]].map(([k,v]) => (
                  <div key={k} className="flex justify-between py-0.5"><span className="text-[6.5px] text-gray-500">{k}</span><span className="text-[6.5px] text-black" style={{ fontWeight: 700 }}>{v}</span></div>
                ))}
                <div className="border-t border-blue-200 pt-1 mt-1 flex justify-between"><span className="text-[7px] text-black" style={{ fontWeight: 700 }}>Total Paid</span><span className="text-[7px] text-[#1e30cd]" style={{ fontWeight: 700 }}>₹120</span></div>
              </div>
              <div className="bg-[#1b32c9] rounded-lg h-6 flex items-center justify-center mt-1"><p className="text-white text-[7.5px]" style={{ fontWeight: 600 }}>Confirm</p></div>
            </div>
          </Phone>

          {/* 08. Success */}
          <Phone bg="#ffffff" label="08 · Success Screen"
            annotation="Delight micro-moment after completion. Positive closure increases confidence.">
            <div className="size-full flex flex-col items-center justify-between py-10 px-4">
              <div />
              <div className="flex flex-col items-center gap-3 text-center">
                <img src={imgSuccess} alt="Success" className="w-24 h-24 object-contain" />
                <p className="text-black text-[10px]" style={{ fontWeight: 700 }}>Booking Successful!</p>
                <p className="text-gray-500 text-[7px]">Have a safe drive, Arjun 🚗</p>
              </div>
              <div className="bg-[#112cc5] rounded-xl w-full h-8 flex items-center justify-center"><p className="text-white text-[8px]" style={{ fontWeight: 600 }}>Back to Home</p></div>
            </div>
          </Phone>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 17 — KEY DESIGN DECISIONS
// ══════════════════════════════════════════════════════════════════════════════
function DesignDecisions() {
  const decisions = [
    { chose: "Visual slot grid", over: "a list-based slot picker", because: "Travellers need spatial understanding of where their slot is within the lot. A grid matches the real-world mental model and reduces cognitive load.", icon: "🅿️" },
    { chose: "QR code confirmation", over: "a PIN-based entry system", because: "QR codes are faster, fully contactless, and require zero human interaction at the barrier — reducing friction at the most stressful moment.", icon: "📱" },
    { chose: "Dark UI (#1A1A2E)", over: "a light / white theme", because: "The app is primarily used during commutes — in cars, in sunlight, or at night. Dark UI with high-contrast violet accents ensures legibility in all conditions.", icon: "🌙" },
  ];
  return (
    <section id="decisions" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="17" title="Key Design Decisions" />
      <SectionLabel>Rationale</SectionLabel>
      <SectionHeading>I chose X over Y because Z</SectionHeading>
      <div className="space-y-4">
        {decisions.map((d, i) => (
          <div key={i} className="bg-[#16213E] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-6 hover:border-[#6C63FF]/40 transition-colors">
            <div className="w-16 h-16 bg-[#6C63FF]/15 rounded-2xl flex items-center justify-center text-3xl shrink-0">{d.icon}</div>
            <div className="flex-1">
              <p className="text-white text-base leading-relaxed">
                I chose <span className="text-[#6C63FF]" style={{ fontWeight: 700 }}>"{d.chose}"</span> over <span className="text-[#FF5252]" style={{ fontWeight: 600 }}>"{d.over}"</span>
              </p>
              <p className="text-[#A0AEC0] text-sm mt-2 leading-relaxed"><span className="text-white" style={{ fontWeight: 600 }}>Because:</span> {d.because}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 18 — USABILITY & ACCESSIBILITY
// ══════════════════════════════════════════════════════════════════════════════
function UsabilityAccessibility() {
  const checks = [
    "Minimum touch target: 44×44px on all CTAs",
    "Colour contrast ratio: WCAG AA compliant throughout",
    "Error states designed for all form fields (empty, invalid)",
    "Empty state designed for 'no parking found nearby'",
    "Loading state considered for map data fetch",
    "Slot states differentiated by both colour AND label text",
    "Bottom navigation uses icons + labels (never icons alone)",
    "Back navigation present on every sub-screen",
  ];
  return (
    <section id="a11y" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="18" title="Usability & Accessibility" />
        <SectionLabel>Inclusive design considerations</SectionLabel>
        <SectionHeading>Designed for everyone</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checks.map((c, i) => (
            <div key={i} className="bg-[#16213E] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-[#4CAF50]/30 transition-colors">
              <div className="w-8 h-8 bg-[#4CAF50]/15 rounded-lg flex items-center justify-center text-[#4CAF50] text-sm shrink-0" style={{ fontWeight: 700 }}>✓</div>
              <p className="text-[#A0AEC0] text-sm">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 19 — RESULTS & LEARNINGS
// ══════════════════════════════════════════════════════════════════════════════
function Results() {
  const outcomes = [
    { icon: "⏱️", stat: "~15 min → 2 min", sub: "Reduced parking search time with pre-booking flow" },
    { icon: "📱", stat: "8 Screens", sub: "Full end-to-end journey in a tight, cohesive flow" },
    { icon: "✅", stat: "100%", sub: "3/3 peer test users completed booking without guidance" },
  ];
  const learned = [
    "Map + list hybrid was significantly more intuitive than map-only, discovered after early peer feedback.",
    "Slot grid needed clear colour coding — early version confused available vs. selected states.",
    "QR confirmation screen needed larger font for real-world scanning distance.",
  ];
  const next = [
    "Vehicle type filter — 2-wheeler vs. 4-wheeler slots",
    "Live GPS navigation from current location to parking lot",
    "Booking history, favourites, and repeat booking flow",
    "Push notification: 'Your slot is reserved for 30 min'",
  ];
  return (
    <section id="results" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionDivider num="19" title="Results & Learnings" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {outcomes.map((o) => (
          <Card key={o.stat} className="text-center">
            <span className="text-4xl block mb-3">{o.icon}</span>
            <p className="text-[#6C63FF] text-3xl mb-2" style={{ fontWeight: 800 }}>{o.stat}</p>
            <p className="text-[#A0AEC0] text-sm leading-relaxed">{o.sub}</p>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SectionLabel>What I learned</SectionLabel>
          <h3 className="text-white text-xl mb-4" style={{ fontWeight: 700 }}>Key Takeaways</h3>
          <ul className="space-y-3">
            {learned.map((l, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#6C63FF]/20 rounded-full flex items-center justify-center text-[#6C63FF] text-[10px] shrink-0 mt-0.5" style={{ fontWeight: 700 }}>{i + 1}</span>
                <p className="text-[#A0AEC0] text-sm leading-relaxed">{l}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Next steps if continued…</SectionLabel>
          <h3 className="text-white text-xl mb-4" style={{ fontWeight: 700 }}>Future Features</h3>
          <ul className="space-y-3">
            {next.map((n, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#6C63FF] mt-0.5 shrink-0">→</span>
                <p className="text-[#A0AEC0] text-sm">{n}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 20 — REFLECTION (NEW)
// ══════════════════════════════════════════════════════════════════════════════
function Reflection() {
  return (
    <section id="reflection" className="py-24 px-6" style={{ background: "#0d0d1a" }}>
      <div className="max-w-6xl mx-auto">
        <SectionDivider num="20" title="Reflection" />
        <SectionLabel>Looking back with honest eyes</SectionLabel>
        <SectionHeading>What I'd do differently</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "🔬", title: "More research depth", body: "With more time, I'd conduct 10+ user interviews instead of just a survey. The empathy map would have been richer with qualitative data from actual car owners.", color: "#6C63FF" },
            { icon: "📊", title: "A/B test the map view", body: "I'd run an A/B test between the map-only and map+list views with real users — rather than deciding after only 3 peer reviews.", color: "#FFB300" },
            { icon: "♿", title: "Deeper accessibility audit", body: "I'd validate every colour pair with a dedicated tool like Stark or Figma's contrast checker — not just estimate compliance visually.", color: "#4CAF50" },
          ].map((r) => (
            <div key={r.title} className="bg-[#16213E] border border-white/10 rounded-2xl p-6 hover:border-[#6C63FF]/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: r.color + "15", border: `1px solid ${r.color}25` }}>{r.icon}</div>
              <p className="text-white text-sm mb-2" style={{ fontWeight: 700 }}>{r.title}</p>
              <p className="text-[#A0AEC0] text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <Card className="text-center">
          <p className="text-[#6C63FF] text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>Skills demonstrated in this project</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["User Research","Empathy Mapping","Persona Creation","Competitive Analysis","User Journey Mapping","Information Architecture","Wireframing","Design Systems","Component Design","Usability Testing","Interaction Design","Prototyping","WCAG Accessibility","Visual Design"].map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 21 — CLOSING
// ══════════════════════════════════════════════════════════════════════════════
function Closing() {
  return (
    <section id="closing" className="py-32 px-6 text-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 100%,#2a1f6b 0%,#1A1A2E 55%,#0d0d1a 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={GRID_VIOLET} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px] bg-[#6C63FF]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden border border-[#6C63FF]/30 shadow-[0_0_40px_rgba(108,99,255,0.3)]">
            <img src={imgLogo} alt="Vehicle Bay" className="size-full object-cover" />
          </div>
        </div>
        <p className="text-[#6C63FF] text-sm uppercase tracking-widest mb-4" style={{ fontWeight: 600 }}>Thanks for reading</p>
        <h2 className="text-white text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>Vehicle Bay</h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent mx-auto mb-8" />
        <blockquote className="text-[#A0AEC0] text-lg md:text-xl leading-relaxed italic mb-12">
          "Every frustrating parking experience was a{" "}
          <span className="text-[#6C63FF]" style={{ fontWeight: 600 }}>design opportunity</span> waiting to happen."
        </blockquote>
        <div className="bg-[#16213E] border border-white/10 rounded-3xl p-8 text-left mb-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#6C63FF]/20 rounded-2xl border border-[#6C63FF]/30 flex items-center justify-center text-[#6C63FF] text-2xl" style={{ fontWeight: 800 }}>S</div>
            <div>
              <p className="text-white text-xl text-center sm:text-left" style={{ fontWeight: 700 }}>Siddhu</p>
              <p className="text-[#6C63FF] text-sm text-center sm:text-left" style={{ fontWeight: 600 }}>Jr. UI/UX Designer</p>
              <p className="text-[#A0AEC0] text-xs text-center sm:text-left">Figma · Product Design · Mobile UX</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="https://www.figma.com/design/KLlM84Icr7t7cINou8gFzW/Vehicle-parking?t=JNn2g5tX3pHC6c6X-0"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-[#6C63FF] text-white hover:bg-[#7B68EE] transition-colors"
              style={{ fontWeight: 600 }}>
              <span>🎨</span> View Figma File
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
              style={{ fontWeight: 600 }}>
              <span>💼</span> LinkedIn
            </a>
            <a
              href="/index.html"
              target="_top"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
              style={{ fontWeight: 600 }}>
              <span>🌐</span> Portfolio
            </a>
            <a
              href="mailto:siddhudesign@gmail.com"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors"
              style={{ fontWeight: 600 }}>
              <span>✉️</span> Email Me
            </a>
          </div>
        </div>
        <p className="text-[#A0AEC0] text-xs">Vehicle Bay · UI/UX Case Study · 2025 · Designed in Figma</p>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// STICKY TOP NAV
// ══════════════════════════════════════════════════════════════════════════════
function TopNav() {
  const sections = [
    "Cover","Overview","Problem","Solution","Research","Personas",
    "Empathy","Competitive","Journey","Flow","IA","Process",
    "Wireframes","System","Testing","Screens","Decisions","A11y","Results","Reflection","Closing",
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl" style={{ background: "rgba(26,26,46,0.95)" }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 py-3 overflow-x-auto">
        <a href="/index.html" target="_top" className="flex items-center gap-2 shrink-0 mr-4 group">
          <img src={imgLogo} alt="VB" className="w-6 h-6 rounded-lg object-cover border border-white/10 group-hover:border-[#6C63FF]/50 transition-colors" />
          <span className="text-white text-xs group-hover:text-[#6C63FF] transition-colors" style={{ fontWeight: 700 }}>Vehicle Bay</span>
        </a>
        {sections.map((s, i) => (
          <span key={s} className="text-[#A0AEC0] text-[10px] whitespace-nowrap px-3 py-1 rounded-full hover:bg-white/10 hover:text-white cursor-pointer transition-colors shrink-0" style={{ fontWeight: 500 }}>
            <span className="text-[#6C63FF]">{String(i + 1).padStart(2, "0")}</span> {s}
          </span>
        ))}
      </div>
    </nav>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT EXPORT
// ══════════════════════════════════════════════════════════════════════════════
export function CaseStudy() {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A2E", fontFamily: "Inter, system-ui, sans-serif" }}>
      <TopNav />
      <Cover />
      <ProjectOverview />
      <ProblemStatement />
      <Solution />
      <UserResearch />
      <UserPersonas />
      <EmpathyMap />
      <CompetitiveAnalysis />
      <UserJourneyMap />
      <UserFlowDiagram />
      <InfoArchitecture />
      <DesignProcess />
      <Wireframes />
      <DesignSystemSection />
      <UsabilityTesting />
      <FinalScreens />
      <DesignDecisions />
      <UsabilityAccessibility />
      <Results />
      <Reflection />
      <Closing />
    </div>
  );
}
