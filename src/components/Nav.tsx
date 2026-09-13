import { useState, type KeyboardEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV } from "../data/site";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    }
  };

  const handleNavKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <nav onKeyDown={handleNavKeyDown}>
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Future Bridge Technologies — home">
          <img src="/logo_officiel.png" alt="Future Bridge Technologies" className="logo-mark" />
          <span className="logo">Future<em>Bridge</em></span>
        </Link>
        <div className={`nav-links ${open ? "open" : ""}`} id="navLinks">
          {NAV.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={close}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta" onClick={close}>
            Start a Conversation
            <span className="nav-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <div
          className="hamburger"
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={handleKeyDown}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};