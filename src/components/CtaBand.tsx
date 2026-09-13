import { Link } from "react-router-dom";

interface CtaBandProps {
  title: string;
  sub?: string;
  to?: string;
  label?: string;
}

export const CtaBand = ({ title, sub, to = "/contact", label = "Start a Conversation" }: CtaBandProps) => (
  <div className="cta-band">
    <div className="wrap">
      <div className="cta-inner">
        <div>
          <h2>{title}</h2>
          {sub && <p className="cta-sub">{sub}</p>}
        </div>
        <Link to={to} className="btn-accent">
          {label}
        </Link>
      </div>
    </div>
  </div>
);