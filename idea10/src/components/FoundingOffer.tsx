import { useState } from 'react'
import Reveal from './Reveal'

export default function FoundingOffer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [inputError, setInputError] = useState(false)

  const handleSubmit = () => {
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setInputError(true)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="offer-section" id="foundingOffer">
      <Reveal>
        <h2 className="offer-h2">
          LOCK $9/MONTH<br />
          <span>FOREVER.</span>
        </h2>
        <p className="offer-sub">Founding tier closes at launch.</p>

        {!submitted ? (
          <>
            <div className="offer-form">
              <input
                id="emailInput"
                type="email"
                placeholder="your@email.com"
                autoComplete="off"
                value={email}
                onChange={e => { setEmail(e.target.value); setInputError(false) }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className={`offer-input${inputError ? ' offer-input--error' : ''}`}
              />
              <button className="offer-cta" onClick={handleSubmit}>
                Lock My Rate →
              </button>
            </div>
            <p className="offer-note">No credit card. No commitment. Rate locked at sign-up.</p>
          </>
        ) : (
          <div className="offer-success">
            <span>✓</span> You're in. We'll reach out when it's ready.
          </div>
        )}
      </Reveal>
    </section>
  )
}
