import { useState, type FormEvent } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("name") || !fd.get("email") || !fd.get("message")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input type="text" id="contact-name" name="name" placeholder="Your name" autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="contact-company">Company</label>
          <input type="text" id="contact-company" name="company" placeholder="Company name" autoComplete="organization" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" placeholder="your@email.com" autoComplete="email" />
      </div>
      <div className="form-field">
        <label htmlFor="contact-project-type">Project Type</label>
        <select id="contact-project-type" name="project-type" defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          <option>AI Systems</option>
          <option>AI-Powered Websites & Platforms</option>
          <option>AI Automation</option>
          <option>Business Intelligence</option>
          <option>System Integration</option>
          <option>Custom Technology</option>
          <option>Albatross AI</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Tell us about what you're building or trying to solve…"></textarea>
      </div>
      {status === "error" && <p className="form-status error">Please fill in your name, email and message.</p>}
      {status === "success" && <p className="form-status">Thank you — we'll be in touch.</p>}
      <button type="submit" className="form-submit">
        {status === "submitting" ? "Sending…" : "Start a Conversation"}
      </button>
    </form>
  );
};