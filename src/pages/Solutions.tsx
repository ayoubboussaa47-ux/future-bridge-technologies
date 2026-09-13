import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { SectionHead } from "../components/SectionHead";
import { FAQAccordion } from "../components/FAQAccordion";
import { CtaBand } from "../components/CtaBand";
import { SERVICES } from "../data/services";

export const Solutions = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="Solutions"
      title="Technology built around the way your business works."
      sub="Future Bridge does not force every company into the same solution. Each engagement can combine different technologies — depending on the problem, the existing environment, and the desired outcome."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="service-stack">
          {SERVICES.map((s) => (
            <div id={s.id} className="service-detail" key={s.id}>
              <div className="service-detail-head">
                <span className="service-detail-num">{s.num}</span>
                <h2 className="service-detail-name">{s.name}</h2>
              </div>
              <p className="service-what">{s.what}</p>
              {s.message && <p className="service-message">{s.message}</p>}
              <div className="service-cols">
                <div>
                  <h3 className="service-col-head">What we can build</h3>
                  <ul className="bullet-list">
                    {s.build.map((item) => (
                      <li key={item}>
                        <span className="bullet-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="service-col-head">Business problems it addresses</h3>
                  <ul className="bullet-list">
                    {s.problems.map((item) => (
                      <li key={item}>
                        <span className="bullet-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="service-connect">
                <span className="service-connect-label">How it connects with other services</span>
                {s.connects}
              </p>
              <p className="service-connect">
                <span className="service-connect-label">What the client gets</span>
                {s.get}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ECOSYSTEM DIAGRAM */}
    <section className="arch-section">
      <div className="wrap">
        <div className="section-header">
          <h2>One ecosystem, not six businesses.</h2>
          <p>A real project may combine several capabilities into one connected digital system.</p>
        </div>
        <figure
          className="diagram-figure"
          role="img"
          aria-label="Ecosystem diagram: Future Bridge branches into Software, AI and Data, which combine through Automation and Integration into Business Systems, then Scale."
        >
          <svg className="diagram-svg" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect className="hd-node-active" x="270" y="10" width="160" height="40" rx="3" />
            <text className="hd-label-inv" x="298" y="34">FUTURE BRIDGE</text>
            <line className="hd-line" x1="350" y1="50" x2="350" y2="72" />
            <line className="hd-line" x1="120" y1="72" x2="580" y2="72" />
            <line className="hd-line" x1="120" y1="72" x2="120" y2="96" />
            <line className="hd-line" x1="350" y1="72" x2="350" y2="96" />
            <line className="hd-line" x1="580" y1="72" x2="580" y2="96" />
            <rect className="hd-node" x="40" y="96" width="160" height="36" rx="3" />
            <circle className="hd-node-dot hd-pulse" cx="58" cy="114" r="2.6" />
            <text className="hd-label" x="70" y="118">SOFTWARE</text>
            <rect className="hd-node" x="270" y="96" width="160" height="36" rx="3" />
            <circle className="hd-node-dot hd-pulse d1" cx="288" cy="114" r="2.6" />
            <text className="hd-label" x="300" y="118">AI</text>
            <rect className="hd-node" x="500" y="96" width="160" height="36" rx="3" />
            <circle className="hd-node-dot hd-pulse d2" cx="518" cy="114" r="2.6" />
            <text className="hd-label" x="530" y="118">DATA</text>
            <line className="hd-line" x1="120" y1="132" x2="120" y2="154" />
            <line className="hd-line" x1="350" y1="132" x2="350" y2="154" />
            <line className="hd-line" x1="580" y1="132" x2="580" y2="154" />
            <line className="hd-line" x1="120" y1="154" x2="580" y2="154" />
            <line className="hd-line" x1="350" y1="154" x2="350" y2="176" />
            <line className="hd-line-active hd-flow" x1="350" y1="50" x2="350" y2="176" />
            <rect className="hd-node" x="230" y="176" width="240" height="36" rx="3" />
            <text className="hd-label" x="270" y="198">AUTOMATION</text>
            <line className="hd-line" x1="350" y1="212" x2="350" y2="230" />
            <rect className="hd-node" x="230" y="230" width="240" height="36" rx="3" />
            <text className="hd-label" x="270" y="252">INTEGRATION</text>
            <line className="hd-line" x1="350" y1="266" x2="350" y2="284" />
            <text className="hd-label-accent" x="253" y="296">BUSINESS SYSTEMS {`\u2192`} SCALE</text>
          </svg>
        </figure>
        <p className="section-body-text">
          Example: a client may need a Custom Platform combined with an AI System, Automation,
          Business Intelligence and System Integration. These become one connected digital
          system rather than five separate projects — this ability to combine capabilities is
          a core differentiator.
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-light">
      <div className="wrap">
        <SectionHead title="Frequently asked questions" p="Real questions from potential clients, answered directly." />
        <FAQAccordion />
      </div>
    </section>

    <CtaBand
      title="Have a problem that doesn't fit into a category?"
      sub="Not every business problem fits into a predefined service. Tell us what you're trying to build, automate, connect, or improve."
    />

    <Footer />
  </>
);