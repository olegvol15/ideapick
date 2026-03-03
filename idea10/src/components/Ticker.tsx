const ITEMS = [
  'TELL YOUR INTERESTS',
  'AI GENERATES IDEAS',
  'APP STORE CHECK',
  'COMPETITION SCORE',
  'DEMAND INDICATOR',
  'IDEA CARD',
  'OPPORTUNITY SIGNAL',
  'MONETIZATION HINT',
]

// Doubled for seamless loop
const ALL_ITEMS = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {ALL_ITEMS.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span>→</span>
          </span>
        ))}
      </div>
    </div>
  )
}
