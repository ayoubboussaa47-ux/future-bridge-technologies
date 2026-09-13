interface SectionHeadProps {
  title: string;
  p?: string;
}

export const SectionHead = ({ title, p }: SectionHeadProps) => (
  <div className="section-header">
    <h2>{title}</h2>
    {p && <p>{p}</p>}
  </div>
);