import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}

export const PageHero = ({ eyebrow, title, sub }: PageHeroProps) => (
  <div className="page-hero">
    <div className="wrap">
      <span className="hero-kicker">{eyebrow}</span>
      <h1>{title}</h1>
      {sub && <p className="page-hero-sub">{sub}</p>}
    </div>
  </div>
);