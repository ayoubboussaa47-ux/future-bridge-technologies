import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/CtaBand";

const CAPABILITIES = [
  "AI Agents",
  "Workflow Automation",
  "Data Intelligence",
  "Integrations",
  "Business Operations",
];

export const AlbatrossAI = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="Future Bridge Product"
      title="An intelligent operating layer for modern businesses."
      sub="Albatross AI is a product built by Future Bridge. It is designed to bring AI agents, workflow automation, data intelligence, integrations, and business operations into one intelligent environment."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="split-grid">
          <div>
            <h2 className="service-detail-name">The layer your systems run through.</h2>
            <p className="service-what" style={{ marginTop: 16 }}>
              Many businesses operate across disconnected tools and workflows. Albatross AI is
              designed as the coordinating layer between AI agents, automated workflows, and
              business data — so the systems you already rely on work as one system.
            </p>
            <p className="service-what">
              It represents Future Bridge&apos;s approach to connected technology: intelligence
              is not added on top of a process. It is designed into the architecture from the
              start.
            </p>
            <p className="note-line">
              Albatross AI is a product — not a service. To see the six service categories
              Future Bridge offers,&nbsp;
              <Link to="/solutions">visit Solutions</Link>.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn-solid">Start a Conversation</Link>
              <Link to="/projects" className="btn-line">View Projects</Link>
            </div>
          </div>
          <div>
            <div className="cap-panel">
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
      </div>
    </section>

    <CtaBand
      title="Want Albatross-style systems for your own operations?"
      sub="The same capabilities can be designed around a specific business."
      to="/solutions"
      label="Explore Solutions"
    />

    <Footer />
  </>
);