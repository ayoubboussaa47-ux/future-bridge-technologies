import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Ticker } from "../components/Ticker";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { SERVICES } from "../data/services";

const CAPABILITIES = [
  "AI Agents",
  "Workflow Automation",
  "Data Intelligence",
  "Integrations",
  "Business Operations",
];

const PROJECTS = [
  { tag: "Future Bridge Product", name: "Albatross AI", desc: "An intelligent operating layer bringing AI agents, workflows, data and automation into one environment for modern businesses." },
  { tag: "Applied Environment", name: "Albatrix Funded", desc: "A separate project where Future Bridge technology has been applied in practice. Albatrix Funded operates independently as its own platform." },
  { tag: "[CONTENT REQUIRED]", name: "Next Project", desc: "Additional project information to be provided by Future Bridge Technologies.", placeholder: true },
];

const VALUES = [
  { name: "Built for operations", desc: "Every system is designed around how your business actually works — not how technology assumes it should work." },
  { name: "Intelligence by design", desc: "AI and automation are built into the architecture from the start, not added as an afterthought." },
  { name: "Long-term thinking", desc: "We build systems that grow with the business — engineered for scale, not just the immediate requirement." },
];

export const Home = () => {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Future Bridge Technologies</div>
          <h1>We build the systems behind what&apos;s next.</h1>
          <p className="hero-sub">
            Future Bridge Technologies designs and builds intelligent systems, automation
            infrastructure and custom technology that help modern businesses operate smarter
            and scale with confidence.
          </p>
          <div className="hero-ctas">
            <Link to="/technology" className="btn-solid">Explore Technology</Link>
            <Link to="/contact" className="btn-line">Start a Conversation</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="philosophy">
            <div className="philosophy-label">Core Philosophy</div>
            <div className="philosophy-words">
              <div className="philosophy-word">Build.</div>
              <div className="philosophy-word">Automate.</div>
              <div className="philosophy-word">Scale.</div>
            </div>
          </div>
          <div className="hero-note">
            Intelligent systems and automation infrastructure for modern businesses.
          </div>
        </div>
      </div>

      {/* TICKER */}
      <Ticker />

      {/* TECHNOLOGY PREVIEW */}
      <section className="section-light">
        <div className="wrap">
          <div className="section-header">
            <h2>Technology should work as one system.</h2>
            <p>Six capability areas, one operating principle.</p>
          </div>
          <div className="tech-list">
            {SERVICES.map((s) => (
              <Link to="/technology" className="tech-row" key={s.id}>
                <span className="sol-num">{s.num}</span>
                <div>
                  <span className="sol-name">{s.name}</span>
                  <p className="tech-row-desc">{s.short}</p>
                </div>
                <span className="sol-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="cta-inline">
            <Link to="/technology" className="btn-solid">Explore Technology</Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section>
        <div className="wrap">
          <div className="section-header">
            <h2>Technology built around real business needs.</h2>
            <p>Every engagement can combine different capabilities — applied according to the problem, not a fixed menu.</p>
          </div>
          <div className="chips">
            {SERVICES.map((s) => (
              <Link to="/solutions" className="chip" key={s.id}>{s.name}</Link>
            ))}
          </div>
          <div className="cta-inline">
            <Link to="/solutions" className="btn-line">Explore Solutions</Link>
          </div>
        </div>
      </section>

      {/* ALBATROSS PREVIEW */}
      <section className="albatross">
        <div className="wrap">
          <div className="albatross-inner">
            <div className="albatross-left">
              <div className="albatross-tag">Future Bridge Product</div>
              <h3>Albatross AI</h3>
              <p className="albatross-sub">An intelligent operating layer for modern businesses.</p>
              <p className="albatross-desc">
                Albatross AI brings AI agents, workflows, data and automation together into
                one intelligent environment — connecting the systems that run your business
                into a single, coherent layer.
              </p>
              <div className="hero-ctas">
                <Link to="/albatross-ai" className="btn-solid" style={{ background: "var(--accent)", color: "#fff" }}>
                  Explore Albatross AI
                </Link>
                <Link to="/projects" className="btn-line" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.25)" }}>
                  View Projects
                </Link>
              </div>
            </div>
            <div className="albatross-right">
              <div className="capabilities-label">Core Capabilities</div>
              <div className="capabilities-list">
                {CAPABILITIES.map((cap) => (
                  <div className="cap-item" key={cap}>
                    <div className="cap-dot"></div>
                    <div className="cap-name">{cap}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section>
        <div className="wrap">
          <div className="section-header">
            <h2>Technology in the field.</h2>
            <p>Verified projects Future Bridge has built and deployed.</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((proj) => (
              <Link
                to="/projects"
                className={`proj-item${proj.placeholder ? " placeholder" : ""}`}
                key={proj.name}
              >
                <div>
                  <div className="proj-tag">{proj.tag}</div>
                  <div className="proj-name">{proj.name}</div>
                  <div className="proj-desc">{proj.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about">
        <div className="wrap">
          <div className="section-header">
            <h2>We build technology with a long-term view.</h2>
            <p>Intelligent infrastructure for the next generation of businesses.</p>
          </div>
          <div className="about-grid">
            <div className="about-left">
              <p className="about-body">
                Future Bridge Technologies exists to build the intelligent technology layer
                behind modern businesses. We combine AI, automation, data and custom software
                to create systems that solve real operational problems and provide a foundation
                for long-term growth.
              </p>
              <div className="vision-block">
                <div className="vision-label">Vision</div>
                <div className="vision-text">
                  To build technology that enables the next generation of businesses.
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link to="/about" className="btn-line" style={{ color: "rgba(255,255,255,.8)", borderColor: "rgba(255,255,255,.25)" }}>
                  About Future Bridge
                </Link>
              </div>
            </div>
            <div className="about-right">
              <div className="about-values">
                {VALUES.map((value) => (
                  <div className="value-item" key={value.name}>
                    <div className="value-dot"></div>
                    <div className="value-content">
                      <div className="value-name">{value.name}</div>
                      <div className="value-desc">{value.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Let's build what's next." />

      <Footer />
    </>
  );
};