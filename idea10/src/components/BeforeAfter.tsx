import Reveal from './Reveal'

const BEFORE = [
  'Overthinking for weeks, shipping nothing',
  'Endless AI prompts with inconsistent answers',
  'Manual App Store research across 20 tabs',
  '10 vague options, zero commitment',
  'Launch day — silence',
]

const AFTER = [
  'One ranked idea, ready in 10 minutes',
  'Real App Store data, same evaluation every run',
  'Competition, demand & monetization in one card',
  'One direction — build it or skip it, you decide',
  'Launch knowing the gap is real',
]

export default function BeforeAfter() {
  return (
    <section className="section">
      <div className="section-label">The transformation</div>

      <div className="bafa-header">
        <Reveal>
          <h2 className="bafa-headline">
            PEOPLE DON'T<br />
            BUY TOOLS.<br />
            <span style={{ color: 'var(--accent)' }}>THEY BUY</span><br />
            CLARITY.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="bafa-side-text">
            <p className="bafa-sub">
              IdeaPick answers one question:
            </p>
            <p className="bafa-question">
              "Should I build this<br />or not?"
            </p>
            <p className="bafa-sub" style={{ marginTop: 16 }}>
              Everything on this page exists to get you to that one answer —
              backed by data, in under 10 minutes.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="bafa-table">
          <div className="bafa-col bafa-col--before">
            <div className="bafa-col-header">Before IdeaPick</div>
            {BEFORE.map((b, i) => (
              <div key={i} className="bafa-row bafa-row--before">
                <span className="bafa-icon">✗</span>{b}
              </div>
            ))}
          </div>

          <div className="bafa-divider">
            <div className="bafa-divider-line" />
            <div className="bafa-arrow">→</div>
            <div className="bafa-divider-line" />
          </div>

          <div className="bafa-col bafa-col--after">
            <div className="bafa-col-header">With IdeaPick</div>
            {AFTER.map((a, i) => (
              <div key={i} className="bafa-row bafa-row--after">
                <span className="bafa-icon">✓</span>{a}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
