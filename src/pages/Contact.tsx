import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { SITE } from "../data/site";

const INFO = [
  { label: "Email", value: SITE.email },
  { label: "Phone", value: SITE.phone },
  { label: "Location", value: SITE.address },
];

export const Contact = () => (
  <>
    <Nav />
    <PageHero
      eyebrow="Contact"
      title="Let's build what's next."
      sub="Tell us what you're building, what problem you're trying to solve, or where you want to take your business."
    />

    <section className="pb-band">
      <div className="wrap">
        <div className="contact-inner">
          <div className="contact-left">
            <p>
              Your initial message can be simple. The technology approach is defined later —
              after we understand the business, the problem, and the desired outcome.
            </p>
            <div className="space-y-6 contact-info">
              {INFO.map((item) => (
                <div key={item.label}>
                  <p className="contact-info-label">{item.label}</p>
                  <p className="contact-info-value">{item.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <p className="contact-info-label">Follow Us</p>
              <div className="footer-socials">
                <a href="https://www.linkedin.com">LinkedIn</a>
                <a href="https://www.x.com">X</a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>

    <Footer />
  </>
);