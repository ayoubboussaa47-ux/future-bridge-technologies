import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/CtaBand";
import { SERVICES } from "../data/services";

const ARCHITECTURE = [
  "AI provides the intelligence layer.",
  "Software gives it a usable surface.",
  "Data feeds decisions and automation.",
  "Automation carries it into daily work.",
  "Integration connects it to what exists.",
];

export const Technology = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="Technology"
      title="Technology should work as one system."
      sub="Future Bridge combines software, AI, automation, data, and integrations to create connected technology ecosystems — not isolated tools."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="service-stack">
          {SERVICES.map((s) => (
            <div id={s.id} className="service-block" key={s.id}>
              <div className="service-num">{s.num}</div>
              <div className="service-main">
                <h2 className="service-name">{s.name}</h2>
                <p className="service-what">{s.what}</p>
                {s.message && <p className="service-message">{s.message}</p>}
              </div>
              <div className="service-side">
                <h3 className="service-col-head">What we build</h3>
                <ul className="bullet-list">
                  {s.build.map((item) => (
                    <li key={item}>
                      <span className="bullet-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SYSTEM ARCHITECTURE */}
    <section className="arch-section">
      <div className="wrap">
        <div className="arch-inner">
          <div className="arch-copy">
            <span className="hero-kicker">System Architecture</span>
            <h2 className="subhead">How the pieces work together.</h2>
            <p>
              None of these capabilities operates alone. A real project typically combines
              several of them into one connected business system built around a specific
              operational need.
            </p>
            <div className="arch-copy-list">
              {ARCHITECTURE.map((item) => (
                <div className="arch-copy-item" key={item}>
                  <span className="dot"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <figure
            className="diagram-figure"
            role="img"
            aria-label="Diagram showing AI, Software, Data, Automation and Integration converging into one connected business system, which then scales."
          >
            <svg className="diagram-svg" viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect className="hd-node" x="10" y="10" width="130" height="34" rx="3" />
              <circle className="hd-node-dot hd-pulse" cx="26" cy="27" r="2.6" />
              <text className="hd-label" x="38" y="31">AI</text>
              <rect className="hd-node" x="170" y="10" width="130" height="34" rx="3" />
              <circle className="hd-node-dot hd-pulse d1" cx="186" cy="27" r="2.6" />
              <text className="hd-label" x="198" y="31">SOFTWARE</text>
              <rect className="hd-node" x="330" y="10" width="140" height="34" rx="3" />
              <circle className="hd-node-dot hd-pulse d2" cx="346" cy="27" r="2.6" />
              <text className="hd-label" x="358" y="31">DATA</text>
              <rect className="hd-node" x="90" y="90" width="140" height="34" rx="3" />
              <circle className="hd-node-dot hd-pulse d3" cx="106" cy="107" r="2.6" />
              <text className="hd-label" x="118" y="111">AUTOMATION</text>
              <rect className="hd-node" x="250" y="90" width="140" height="34" rx="3" />
              <circle className="hd-node-dot hd-pulse d4" cx="266" cy="107" r="2.6" />
              <text className="hd-label" x="278" y="111">INTEGRATION</text>
              <line className="hd-line" x1="75" y1="44" x2="75" y2="70" />
              <line className="hd-line" x1="235" y1="44" x2="235" y2="70" />
              <line className="hd-line" x1="400" y1="44" x2="400" y2="70" />
              <line className="hd-line" x1="75" y1="70" x2="400" y2="70" />
              <line className="hd-line" x1="160" y1="70" x2="160" y2="90" />
              <line className="hd-line" x1="320" y1="70" x2="320" y2="90" />
              <line className="hd-line" x1="160" y1="124" x2="160" y2="150" />
              <line className="hd-line" x1="320" y1="124" x2="320" y2="150" />
              <line className="hd-line" x1="160" y1="150" x2="320" y2="150" />
              <line className="hd-line" x1="240" y1="150" x2="240" y2="176" />
              <line className="hd-line-active hd-flow" x1="240" y1="44" x2="240" y2="176" />
              <rect className="hd-node-active" x="90" y="176" width="300" height="48" rx="3" />
              <text className="hd-label-inv" x="115" y="204">CONNECTED BUSINESS SYSTEM</text>
              <line className="hd-line" x1="240" y1="224" x2="240" y2="250" />
              <rect className="hd-node-accent" x="150" y="250" width="180" height="40" rx="3" />
              <text className="hd-label-accent" x="205" y="274">SCALE</text>
            </svg>
          </figure>
        </div>
        <div className="section-cta">
          <Link to="/solutions" className="btn-solid">Explore Solutions</Link>
        </div>
      </div>
    </section>

    <CtaBand
      title="Not sure what you need yet?"
      sub="That's exactly what the first conversation is for."
    />

    <Footer />
  </>
);