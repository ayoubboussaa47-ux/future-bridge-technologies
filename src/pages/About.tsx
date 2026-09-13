import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/CtaBand";

const VALUES = [
  { name: "Built for operations", desc: "Every system is designed around how your business actually works — not how technology assumes it should work." },
  { name: "Intelligence by design", desc: "AI and automation are built into the architecture from the start, not added as an afterthought." },
  { name: "Long-term thinking", desc: "We build systems that grow with the business — engineered for scale, not just the immediate requirement." },
];

export const About = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="About"
      title="We build technology with a long-term view."
      sub="Future Bridge Technologies builds intelligent systems, automation, business intelligence and custom technology for modern businesses."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="split-grid">
          <div>
            <h2 className="service-detail-name">The company behind the systems.</h2>
            <p className="service-what" style={{ marginTop: 16 }}>
              Future Bridge Technologies is a technology company. We build digital products,
              intelligent systems, AI-powered platforms, automation infrastructure, business
              intelligence solutions, integrations, and custom technology for modern businesses.
            </p>
            <p className="service-what">
              This is not a web agency positioning. Websites and platforms are one part of what
              we can build — not the whole story. The focus is on the engineering that lets a
              business operate at a higher level.
            </p>
            <p className="service-what">
              We take on a small number of serious engagements at a time, because the systems we
              build require a deep understanding of the business they run inside.
            </p>
            <div className="vision-block">
              <div className="vision-label">Vision</div>
              <div className="vision-text-light">
                To build technology that enables the next generation of businesses.
              </div>
            </div>
          </div>
          <div>
            <div className="about-panel">
              <p className="capabilities-label">How we work</p>
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
      </div>
    </section>

    <CtaBand
      title="Interested in building with us?"
      sub="Serious technology engagements, not vague promises."
    />

    <Footer />
  </>
);