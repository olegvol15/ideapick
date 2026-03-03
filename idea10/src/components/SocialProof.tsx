import Reveal from './Reveal'

const SIGNALS = [
  { num: '128+', label: 'indie devs on the waitlist' },
  { num: 'Beta', label: 'private beta, active development' },
  { num: '1', label: 'solo developer, built in public' },
]

export default function SocialProof() {
  return (
    <section className="social-proof-section">
      <div className="social-proof-inner">
        {SIGNALS.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="social-proof-item">
              <div className="social-proof-num">{s.num}</div>
              <div className="social-proof-label">{s.label}</div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={350}>
          <div className="social-proof-status">
            <span className="social-proof-dot" />
            Pre-launch · Shipping fast
          </div>
        </Reveal>
      </div>
    </section>
  )
}
