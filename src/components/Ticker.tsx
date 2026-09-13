const ITEMS = [
  "AI Systems",
  "Automation",
  "Business Intelligence",
  "Custom Technology",
  "System Integration",
  "AI Agents",
];

const TRACK = [...ITEMS, ...ITEMS];

export const Ticker = () => (
  <div className="ticker">
    <div className="ticker-track" aria-hidden="true">
      {TRACK.map((item, i) => (
        <div className="ticker-item" key={`${item}-${i}`}>
          <span className="ticker-dot"></span>
          {item}
        </div>
      ))}
    </div>
  </div>
);