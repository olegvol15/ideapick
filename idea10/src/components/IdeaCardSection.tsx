import Reveal from './Reveal'
import IdeaCardBrowser from './IdeaCardBrowser'

export default function IdeaCardSection() {
  return (
    <section className="card-section">
      <Reveal className="card-section-text">
        <div className="section-label" style={{ marginBottom: 32 }}>What you get</div>
        <h2>
          ONE CARD.<br />
          <span style={{ color: 'var(--accent)' }}>FULL</span><br />
          CLARITY.
        </h2>
        <p>
          Not a spreadsheet. Not a dashboard full of metrics you don't understand.
          One actionable brief — idea, feature, monetization, and why it might win.
        </p>
      </Reveal>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IdeaCardBrowser />
      </div>
    </section>
  )
}
