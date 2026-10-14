"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const GITHUB = "https://github.com/alexanderwangwe";
const EMAIL = "alexanderwangwe@gmail.com";

const serif: CSSProperties = { fontFamily: "var(--serif)", fontWeight: 400 };
const h2Style: CSSProperties = { ...serif, margin: 0, fontSize: "clamp(32px, 4vw, 40px)", lineHeight: 1.1 };
const sectionStyle = (gap = 24): CSSProperties => ({ display: "flex", flexDirection: "column", gap, padding: "clamp(48px, 8vw, 80px) 0", borderTop: "1px solid var(--border)" });
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const INDEX = [
  ["about", "About"],
  ["experience", "Experience"],
  ["toolbox", "What I bring"],
  ["contact", "Contact"],
] as const;

const EXPERIENCE: { logo?: string; role: string; when: string; co: string; text: string }[] = [
  { logo: "/aw.png", role: "Independent Consultant", when: "2026 – Now", co: "AW Digital Solutions", text: "Two client engagements, found through my network and cold outreach. For a private cardiac clinic, I gathered their needs and built a website and Facebook presence, giving them a visible online presence. For a clothing brand, I built a custom Shopify theme with UI and UX choices aimed at better conversion." },
  { logo: "/swift.png", role: "Technical Support and QA Analyst (Intern)", when: "Apr – Jun 2026", co: "Swift Hailing", text: "Worked with 3 engineers and 2 business operations staff on a point-of-sale rollout. Ran manual QA across the POS and manager apps and the store web dashboard, wrote user manuals, trained users and visited stores. Spotted that online and cash payments were hard to reconcile and proposed a clearer way to record them." },
  { logo: "/mpesa.png", role: "Observability Engineering Associate", when: "Jan – Apr 2026", co: "M-Pesa Africa", text: "Lead associate on a research task. Interviewed members of the monitoring team, turned what I heard into requirements, and sketched a Figma dashboard for logs, metrics, events and alerts. Presented it to the team lead, who responded positively. The contract ended before the build." },
  { logo: "/ptechlogo.png", role: "Junior Web Developer", when: "2023 – Now", co: "P-Tech Systems", text: "Build and maintain web applications for client businesses including Norwa Africa, SbInnovations, Satte and Sigma Engineering. At Norwa, a company of 15+ people, I worked on the company website and CRM and gathered business needs from the team." },
];


const TOOLBOX = [
  ["Analysis & discovery", ["Stakeholder interviews", "Requirements gathering", "Process mapping", "User documentation"]],
  ["Product & quality", ["Manual QA", "Functional testing"]],
  ["Tools & platforms", ["Figma", "Grafana", "Dynatrace", "Shopify", "Git"]],
  ["Development", ["TypeScript", "React / Next.js", "React Native", "Kotlin / Compose", "Tailwind"]],
] as const;

const SOCIALS = [
  { name: "GitHub", note: "Where the code lives", href: GITHUB, icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  { name: "LinkedIn", note: "The buttoned-up version of me", href: "https://www.linkedin.com/in/alexander-wangwe/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "Strava", note: "Proof I do go outside", href: "https://www.strava.com/athletes/95879820", icon: "M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" },
];

const ABOUT_LINE = "I enjoy working at the intersection of business and technology, understanding people’s needs, and figuring out how to turn them into products that work better for the people who use them.".split(" ");

const SPARKLE = "M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12 6.4-.6 11.4-5.6 12-12z";

function Doodle({ blob, children }: { blob: [number, number]; children: ReactNode }) {
  return (
    <svg className="doo" width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx={blob[0]} cy={blob[1]} r="14" fill="var(--accent)" opacity="0.55" stroke="none" />
      {children}
    </svg>
  );
}

function Squiggle() {
  return (
    <svg width="76" height="12" viewBox="0 0 76 12" fill="none" aria-hidden="true" style={{ display: "block", marginTop: 10 }}>
      <path className="draw" pathLength="1" d="M2 7Q11 1 20 7T38 7T56 7T74 7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function useScrollEffects(setTime: (t: string) => void) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = document.querySelectorAll<HTMLElement>(".rv");
    const words = document.querySelectorAll<HTMLElement>("#about-line .wd");
    const line = document.getElementById("about-line");
    const bar = document.getElementById("progress");
    const links = document.querySelectorAll<HTMLElement>(".ix");

    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = Math.max(1, root.scrollHeight - vh);
      const atBottom = y >= max - 4;

      sections.forEach((el) => {
        if (reduce || atBottom || el.getBoundingClientRect().top < vh * 0.88) el.classList.add("in");
      });

      const fill = reduce || !line ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - line.getBoundingClientRect().top) / (vh * 0.5)));
      words.forEach((w, i) => { w.style.opacity = (i + 0.5) / words.length <= fill ? "1" : "0.18"; });

      let active = "";
      INDEX.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < vh * 0.4) active = id;
      });
      if (atBottom) active = "contact";
      links.forEach((a) => a.classList.toggle("on", a.dataset.ix === active));

      if (bar) bar.style.width = `${(Math.min(1, y / max) * 100).toFixed(1)}%`;
    };

    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Nairobi" }));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    tick();
    const timer = setInterval(tick, 30000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(timer);
    };
  }, [setTime]);
}

export default function Home() {
  const [time, setTime] = useState("");
  useScrollEffects(setTime);

  return (
    <div style={{ minHeight: "100vh", fontSize: 16 }}>
      <div id="progress" aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, zIndex: 30, height: 2, width: 0, background: "var(--accent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)" }}>
        <nav aria-label="Main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "20px 0" }}>
          <a href="#top" style={{ ...serif, fontSize: 28, lineHeight: 1, textDecoration: "none" }}>
            Alex<span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "4px 18px", fontSize: 14 }}>
            {[["#about", "About"], ["#work", "Work"], ["#contact", "Contact"]].map(([href, label]) => (
              <a key={href} href={href} className="ul" style={{ color: "var(--soft)" }}>{label}</a>
            ))}
            <ThemeToggle />
          </div>
        </nav>

        <div className="layout" style={{ paddingTop: "clamp(24px, 5vw, 48px)" }}>
          <aside className="aside rise" aria-label="Profile">
            <figure className="pol pol-wrap" style={{ margin: 0, padding: "10px 10px 0", background: "#FFFFFF", borderRadius: 6, boxShadow: "0 1px 2px rgba(0,0,0,0.08), 0 10px 28px rgba(0,0,0,0.14)" }}>
              <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 2, background: "#E7E7EA", overflow: "hidden" }}>
                <Image src="/pfp.jpg" alt="Alex Wangwe" fill sizes="168px" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ height: 36 }} aria-hidden="true" />
            </figure>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h1 style={{ ...serif, margin: 0, fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.01em" }}>Alex Wangwe</h1>
              <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--muted)" }}>
                <span className="dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} aria-hidden="true" />
                Business &amp; Product Analyst
              </p>
            </div>

            <p style={{ margin: 0, fontSize: 15, color: "var(--soft)" }}>
              I like understanding how things work, asking questions, and finding ways to make them better. With a background in business and technology, I enjoy working through problems with people and turning ideas into practical solutions. Always curious, always learning, and always up for a good conversation.
            </p>

            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px 16px", paddingTop: 18, borderTop: "1px dashed var(--border)", fontSize: 14 }}>
              {[
                ["Based in", "Nairobi, Kenya"],
                ["Currently", "Open to analyst roles"],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt style={{ fontSize: 12, color: "var(--muted)" }}>{k}</dt>
                  <dd style={{ margin: 0 }}>{v}</dd>
                </div>
              ))}
            </dl>

            <nav className="index" aria-label="On this page" style={{ flexDirection: "column", gap: 2, paddingTop: 18, borderTop: "1px dashed var(--border)" }}>
              <span style={{ fontSize: 12, color: "var(--muted)", paddingBottom: 6 }}>On this page</span>
              {INDEX.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="ix" data-ix={id} style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 28, fontSize: 14, textDecoration: "none" }}>
                  <span className="bar" style={{ height: 1.5, borderRadius: 2 }} />
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <main className="main" style={{ display: "flex", flexDirection: "column" }}>
            <header id="top" style={{ display: "flex", flexDirection: "column", gap: 28, paddingBottom: "clamp(56px, 9vw, 96px)" }}>
              <h2 className="rise" style={{ ...delay(120), ...serif, margin: 0, fontSize: "clamp(44px, 6.4vw, 80px)", lineHeight: 1.03, letterSpacing: "-0.02em" }}>
                I turn what people need into{" "}
                <em style={{ textDecoration: "underline wavy var(--accent)", textDecorationThickness: 2, textUnderlineOffset: "0.14em" }}>products</em>
                <svg className="twinkle" viewBox="0 0 24 24" aria-hidden="true" style={{ width: "0.4em", height: "0.4em", position: "relative", top: "-0.62em", marginLeft: "0.04em" }}>
                  <path d={SPARKLE} fill="var(--accent)" />
                </svg>{" "}
                they{" "}
                <span className="rot" style={{ fontStyle: "italic" }}>
                  <span>
                    {["actually use.", "can trust.", "come back to.", "actually use."].map((t, i) => <span key={i}>{t}</span>)}
                  </span>
                </span>
              </h2>
              <div className="rise" style={{ ...delay(260), display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                <a href={`mailto:${EMAIL}`} className="btn" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "var(--text)", color: "var(--bg)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Talk to me</a>
                <a href={SOCIALS[1].href} className="btn" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "var(--text)", color: "var(--bg)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>LinkedIn</a>
                <a href="#experience" className="btn" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--border)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>What I’ve worked on</a>
              </div>
            </header>

            <section id="about" className="rv" style={sectionStyle()}>
              <h2 style={h2Style}>
                <Doodle blob={[38, 24]}>
                  <path d="M32 10c-8 0-14 6-14 14 0 6 3 9 6 12 2 2 3 4 3 7h10c0-3 1-5 3-7 3-3 6-6 6-12 0-8-6-14-14-14z" />
                  <path d="M27 48h10M29 53h6M29 31l3 4 3-4" />
                  <path d="M32 2v3M13 8l2 2M51 8l-2 2M6 23h3M55 23h3" />
                </Doodle>
                About
                <Squiggle />
              </h2>
              <p id="about-line" style={{ ...serif, margin: 0, fontStyle: "italic", fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: 1.2, letterSpacing: "-0.015em" }}>
                {ABOUT_LINE.map((w, i) => <span key={i} className="wd">{w} </span>)}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 620, fontSize: 17, color: "var(--soft)" }}>
                <p style={{ margin: 0 }}>Good technology starts with understanding the people it’s meant to serve. That means looking beyond what a system does to understand why it’s needed, what could work better, and how it can make a real difference.</p>
              </div>
            </section>

            <section id="experience" className="rv" style={sectionStyle()}>
              <h2 style={h2Style}>
                <Doodle blob={[40, 42]}>
                  <path d="M6 56h12V46h12V36h12V26h14" />
                  <path d="M50 26V6l11 5-11 5" />
                  <path d="M12 40c2-4 6-6 10-6" />
                </Doodle>
                Experience
                <Squiggle />
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {EXPERIENCE.map((e, i) => (
                  <article key={e.co} className="card st" style={{ ...delay(150 + i * 120), display: "flex", gap: 16, padding: 20, borderRadius: 20, background: "var(--card)", border: "1px solid var(--border)" }}>
                    <div style={{ position: "relative", flex: "0 0 44px", height: 44, borderRadius: 12, background: "#E8E8EB", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", color: "#3A3A3F", fontWeight: 600 }}>
                      {e.logo ? <Image src={e.logo} alt={`${e.co} logo`} fill sizes="44px" style={{ objectFit: "contain", padding: 6 }} /> : e.co[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2px 16px" }}>
                        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{e.role}</h3>
                        <span style={{ fontSize: 13, color: "var(--muted)" }}>{e.when}</span>
                      </div>
                      <span style={{ fontSize: 14, color: "var(--muted)" }}>{e.co}</span>
                      <p style={{ margin: "6px 0 0", fontSize: 15, color: "var(--soft)" }}>{e.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              {/* TODO: add public/alex-wangwe-cv.pdf before shipping, or this link 404s */}
              <a href="/alex-wangwe-cv.pdf" download className="btn" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--border)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Download CV</a>
            </section>

            <section id="toolbox" className="rv" style={sectionStyle(20)}>
              <h2 style={h2Style}>
                <Doodle blob={[26, 30]}>
                  <path d="M9 14l32-4 4 36-32 4z" />
                  <path d="M16 24l3 3 5-6M28 22l10-1M18 36l3 3 5-6M30 34l9-1" />
                  <path d="M42 58l2-8 13-13 6 6-13 13zM53 41l6 6" />
                </Doodle>
                What I bring
                <Squiggle />
              </h2>
              <p style={{ margin: 0, maxWidth: 560, fontSize: 15, lineHeight: 1.6, color: "var(--soft)" }}>
                A mix of analytical thinking, collaboration and technical knowledge to help turn business needs into useful digital solutions.
              </p>
              {TOOLBOX.map(([label, items]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <h3 style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "var(--muted)" }}>{label}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 8, fontSize: 14 }}>
                    {items.map((t) => <li key={t} style={{ padding: "6px 14px", borderRadius: 999, border: "1px solid var(--border)" }}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section id="contact" className="rv" style={{ ...sectionStyle(), padding: "clamp(56px, 9vw, 104px) 0" }}>
              <h2 style={{ ...serif, margin: 0, fontSize: "clamp(38px, 5.4vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}>
                Have an idea? Let’s <em>figure it out.</em>
              </h2>
              <a href={`mailto:${EMAIL}`} className="ul" style={{ alignSelf: "flex-start", fontSize: "clamp(18px, 2.2vw, 22px)", fontWeight: 500 }}>
                {EMAIL} <span style={{ color: "var(--accent)" }}>→</span>
              </a>
            </section>

            <footer id="foot" className="rv" style={{ ...sectionStyle(28), padding: "clamp(40px, 7vw, 64px) 0 28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px" }}>
                <h2 style={{ ...serif, margin: 0, fontSize: "clamp(30px, 3.6vw, 38px)", lineHeight: 1.1 }}>Find me <em>elsewhere</em></h2>
                <span className="bob" style={{ ...serif, display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", border: "1px solid var(--border)", borderRadius: "999px 999px 999px 4px", background: "var(--card)", fontStyle: "italic", fontSize: 17 }}>
                  say hi!
                  <svg className="twinkle" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d={SPARKLE} fill="var(--accent)" /></svg>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                {SOCIALS.map((s, i) => (
                  <a key={s.name} href={s.href} className="soc card st" style={{ ...delay(120 + i * 100), display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 20, background: "var(--card)", border: "1px solid var(--border)", textDecoration: "none" }}>
                    <span className="ic" style={{ flex: "0 0 44px", height: 44, borderRadius: 14, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
                    </span>
                    <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: 600, fontSize: 15 }}>{s.name}</span>
                      <span style={{ fontSize: 13, color: "var(--muted)" }}>{s.note}</span>
                    </span>
                    <span className="arr" style={{ color: "var(--muted)" }} aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px 24px", paddingTop: 20, borderTop: "1px dashed var(--border)", fontSize: 14, color: "var(--muted)" }}>
                <span>© 2026 Alex Wangwe</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Made with
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-label="chai" role="img">
                    <path d="M4 10h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
                    <path d="M16 11h1.5a2 2 0 0 1 0 4H16" />
                    <path className="steam" d="M8 3.5c0 1.5 1.5 1.5 1.5 3" />
                    <path className="steam" style={delay(800)} d="M12 3.5c0 1.5 1.5 1.5 1.5 3" />
                  </svg>
                  in Nairobi · <span suppressHydrationWarning>{time}</span>
                </span>
                <a href="#top" className="top" style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 44, color: "var(--text)", textDecoration: "none" }}>
                  Back to top
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
