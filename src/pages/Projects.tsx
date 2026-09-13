import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/CtaBand";

const PROJECTS = [
  {
    tag: "Future Bridge Product",
    name: "Albatross AI",
    desc: "An intelligent operating layer bringing AI agents, workflows, data and automation into one environment for modern businesses.",
  },
  {
    tag: "Applied Environment",
    name: "Albatrix Funded",
    desc: "A separate project where Future Bridge technology has been applied in practice. Albatrix Funded operates independently as its own platform.",
  },
];

export const Projects = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="Projects"
      title="Technology in the field."
      sub="Only projects Future Bridge has actually built and applied are shown here. Additional projects will be added as they reach production."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="projects-grid">
          {PROJECTS.map((proj) => (
            <div className="proj-item" key={proj.name}>
              <div>
                <div className="proj-tag">{proj.tag}</div>
                <div className="proj-name">{proj.name}</div>
                <div className="proj-desc">{proj.desc}</div>
              </div>
            </div>
          ))}
          <div className="proj-item placeholder">
            <div>
              <div className="proj-tag">[CONTENT REQUIRED]</div>
              <div className="proj-name">Next Project</div>
              <div className="proj-desc">Additional project information to be provided by Future Bridge Technologies.</div>
            </div>
          </div>
        </div>

        <div className="note-line" style={{ maxWidth: 720 }}>
          Albatross AI is a Future Bridge product. Albatrix Funded is a separate project and
          applied environment — it operates independently and is not a Future Bridge product.
          The two are not the same entity.
        </div>
      </div>
    </section>

    <CtaBand
      title="Have a project in mind?"
      sub="Tell us what you're building — we'll tell you how we can help."
    />

    <Footer />
  </>
);