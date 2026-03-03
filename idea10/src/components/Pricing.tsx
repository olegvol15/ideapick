import Reveal from './Reveal'

const FOUNDING_BENEFITS = [
  'Lock $9/month — forever, no matter what pricing becomes',
  'Priority access before the public launch',
  'Help shape the product roadmap directly',
]

const FREE_FEATURES = [
  '1 idea generation per day',
  'App Store result count only',
  'Idea name + intent preview only',
  'No competition breakdown',
  'No monetization suggestion',
]

const PRO_FEATURES = [
  'Unlimited idea generations',
  'Full Idea Cards with all sections',
  'Save & compare ideas',
  'AI "Refine this idea" feature',
  'Full validation report',
  'Export idea cards',
]

export default function Pricing() {
  const scrollToEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    const input = document.getElementById('emailInput') as HTMLInputElement | null
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => input.focus(), 400)
    }
  }

  return (
    <section className="pricing-section">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: 24 }}>
        Founding Members
      </div>
      <h2>
        LOCK $9<br />
        <span>FOREVER.</span>
      </h2>
      <p className="pricing-sub">
        This is not a discount. It's founding member status.<br />
        After launch, pricing increases. This rate is locked for life.
      </p>

      {/* Founding Member Card */}
      <Reveal>
        <div className="founding-card">
          <div className="founding-header">
            <div>
              <div className="founding-badge">🚀 Founding Member Offer</div>
              <div className="founding-title">Join before public launch</div>
            </div>
            <div className="founding-spots">
              <div className="founding-spots-num">47</div>
              <div className="founding-spots-label">founding spots<br />remaining</div>
              <div className="founding-spots-caveat">Tier closes at launch.<br />Will never reopen.</div>
            </div>
          </div>

          <div className="founding-benefits">
            {FOUNDING_BENEFITS.map((b, i) => (
              <div key={i} className="founding-benefit">
                <span className="founding-check">✓</span>
                {b}
              </div>
            ))}
          </div>

          <div className="founding-footer">
            <a href="#" className="founding-cta" onClick={scrollToEmail}>
              JOIN AS FOUNDING MEMBER →
            </a>
            <div className="founding-price-note">
              <span className="founding-price">$9<span>/mo</span></span>
              <span className="founding-price-desc">locked forever</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ROI line */}
      <p className="founding-roi">
        Build one successful app and this pays for itself 100×.
      </p>

      {/* Identity trigger */}
      <div className="pricing-identity">
        If you're serious about building profitable apps,<br />
        lock your rate now.
      </div>

      {/* Feature comparison — secondary reference */}
      <div className="pricing-grid" style={{ marginTop: 64 }}>
        <Reveal>
          <div className="price-box price-box--free">
            <div className="price-tag">Free forever</div>
            <div className="price-amount">$0</div>
            <div className="price-period">no credit card needed</div>
            <ul className="price-features">
              {FREE_FEATURES.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="#" className="price-cta price-cta--ghost" onClick={scrollToEmail}>
              GET STARTED FREE
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="price-box price-box--pro">
            <div className="price-corner">FOUNDING MEMBER</div>
            <div className="price-tag">Pro — locked forever</div>
            <div className="price-amount">$9</div>
            <div className="price-period">/month · your rate, for life</div>
            <ul className="price-features">
              {PRO_FEATURES.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="#" className="price-cta" onClick={scrollToEmail}>
              LOCK MY RATE →
            </a>
          </div>
        </Reveal>
      </div>

      <p style={{
        marginTop: 24,
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: 1,
      }}>
        Only promise what you honor. This rate is locked for founding members, forever.
      </p>
    </section>
  )
}
