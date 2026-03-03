import Reveal from './Reveal'

const COSTS = [
  { num: '200+', unit: 'hrs', desc: 'of dev time poured into an app nobody searched for' },
  { num: '3', unit: 'mo', desc: 'of evenings and weekends — gone forever' },
  { num: '$0', unit: 'return', desc: 'on every marketing push at launch day' },
  { num: '1', unit: 'lesson', desc: 'you could have learned in 10 minutes before writing a line' },
]

export default function WrongIdea() {
  return (
    <section className="section wrong-section">
      <div className="section-label">The real cost</div>

      <div className="wrong-layout">
        <Reveal className="wrong-left">
          <h2 className="wrong-headline">
            THE WRONG<br />
            IDEA<br />
            <span style={{ color: 'var(--accent)' }}>COSTS.</span>
          </h2>
          <p className="wrong-sub">
            You're not selling features.<br />
            You're selling risk reduction.<br />
            Make the loss visible.
          </p>
        </Reveal>

        <div className="wrong-right">
          <div className="wrong-costs">
            {COSTS.map((c, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="wrong-cost">
                  <div className="wrong-cost-num">
                    {c.num}<span className="wrong-cost-unit">{c.unit}</span>
                  </div>
                  <div className="wrong-cost-desc">{c.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="wrong-quote">
              Most indie apps don't fail because of bad code.<br />
              They fail because <strong>the idea was weak.</strong>
              <div className="wrong-quote-attr">— Every failed solo developer, in hindsight</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
