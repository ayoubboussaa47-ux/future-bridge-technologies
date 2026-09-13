import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import { SITE } from "../data/site";

const COMPANY_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Albatross AI", href: "/albatross-ai" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src="/logo_officiel.png" alt="Future Bridge Technologies" className="logo-mark" />
            <span className="brand-lockup">
              <span className="brand-name">FutureBridge</span>
              <span className="brand-sub">Technologies</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Building intelligent systems and technology for modern businesses.
          </p>
        </div>
        <div>
          <h5>Technology</h5>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/solutions#${s.id}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>[CONTENT REQUIRED]</p>
          <p>[CONTENT REQUIRED]</p>
          <p>[CONTENT REQUIRED]</p>
        </div>
      </div>
      <div className="footer-bar">
        <span>&copy; {SITE.copyrightYear} {SITE.company}. All rights reserved.</span>
        <div className="footer-socials">
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.x.com">X</a>
        </div>
      </div>
    </div>
  </footer>
);