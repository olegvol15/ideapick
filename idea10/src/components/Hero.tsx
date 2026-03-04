import { useState } from 'react'
import BrowserDemo from './BrowserDemo'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleSubmit = async () => {
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setInputError(true)
      return
    }
    setLoading(true)
    setServerError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setServerError(true)
      }
    } catch {
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="hero">
      <div className="hero-bg-number">10</div>

      {/* Left column */}
      <div className="hero-content">
        <div className="hero-eyebrow">Stop wasting weeks on the wrong idea</div>
        <h1>
          STOP<br />
          GUESSING.<br />
          <span className="outline">JUST</span><br />
          <span className="accent">PICK.</span>
        </h1>
        <p className="hero-sub">
          Find a <strong>profitable app idea</strong> — validated with real App Store
          data — in 10 minutes.<br />Stop wasting weeks building something nobody wants.
        </p>
        <p className="hero-micro">
          We scan live App Store listings, analyze competition density, review velocity,
          and monetization signals — then rank your ideas by real opportunity.
        </p>

        {!submitted ? (
          <>
            <div className="waitlist">
              <input
                id="emailInput"
                type="email"
                placeholder="your@email.com"
                autoComplete="off"
                value={email}
                onChange={e => { setEmail(e.target.value); setInputError(false); setServerError(false) }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                style={inputError ? { borderColor: 'var(--accent)' } : {}}
                disabled={loading}
              />
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? '...' : 'GET EARLY ACCESS'}
              </button>
            </div>
            {serverError && (
              <p className="waitlist-note" style={{ color: 'var(--accent)' }}>
                Something went wrong. Try again or email us directly.
              </p>
            )}
            {!serverError && (
              <p className="waitlist-note">
                Founding Member · Lock <span>$9/month</span> for life · After launch, price increases
              </p>
            )}
          </>
        ) : (
          <div className="success-msg">
            <span className="check">✓</span> You're on the list. We'll reach out when it's ready.
          </div>
        )}

        <div className="stats">
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Simple steps</div>
          </div>
          <div className="stat">
            <div className="stat-num">5<span>–8</span></div>
            <div className="stat-label">AI-generated ideas</div>
          </div>
          <div className="stat">
            <div className="stat-num">10<span>min</span></div>
            <div className="stat-label">To clarity</div>
          </div>
        </div>
      </div>

      {/* Right column — animated phone */}
      <div className="hero-browser">
        <BrowserDemo />
      </div>
    </section>
  )
}
