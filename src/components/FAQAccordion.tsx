import { useState } from "react";
import { FAQ } from "../data/faq";

export const FAQAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq" role="region" aria-label="Frequently asked questions">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              className="faq-btn"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-q">{item.q}</span>
              <span className="faq-icon" aria-hidden="true">+</span>
            </button>
            <div className="faq-a" id={`faq-a-${i}`} role="region">
              <div className="faq-a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};