import Reveal from './Reveal'

const SIGNALS = [
  'Top 100 search results',
  'Review count & velocity',
  'Rating quality',
  'IAP / subscription detection',
  'Competition density',
]

export default function DataBlock() {
  return (
    <section className="data-section">
      <Reveal>
        <div className="data-label">What We Actually Analyze</div>
        <ul className="data-list">
          {SIGNALS.map(s => <li key={s}>{s}</li>)}
        </ul>
        <p className="data-tagline">No vibes. Real marketplace data.</p>
      </Reveal>
    </section>
  )
}
