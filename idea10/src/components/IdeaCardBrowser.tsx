import { useEffect, useRef, useState } from 'react'

export default function IdeaCardBrowser() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el) }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="browser-card-wrap">
      <div className="browser-card">
        {/* Chrome */}
        <div style={{
          background: '#1c1c1e',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 5,
            padding: '4px 12px',
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: 'rgba(245,240,232,0.35)',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
            ideapick.app/idea/ai-fasting-timer
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px', overflow: 'hidden' }}>
          {/* Breadcrumb */}
          <div style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 9,
            color: 'rgba(245,240,232,0.25)',
            letterSpacing: 2,
            marginBottom: 20,
          }}>
            ← BACK TO RESULTS
          </div>

          {/* Keyword tags */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            {['FITNESS','AI'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 9,
                letterSpacing: 2,
                color: '#ff4d00',
                border: '1px solid rgba(255,77,0,0.35)',
                padding: '3px 9px',
                background: 'rgba(255,77,0,0.07)',
              }}>{tag}</span>
            ))}
          </div>

          {/* Idea name + score badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <div style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 28,
              letterSpacing: 1,
              color: '#f5f0e8',
              lineHeight: 1,
            }}>
              AI FASTING<br />TIMER
            </div>
            <div style={{
              background: 'rgba(74,222,128,0.12)',
              border: '1px solid rgba(74,222,128,0.3)',
              padding: '6px 12px',
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: '#4ade80',
              letterSpacing: 1.5,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              HIGH CONFIDENCE · 84
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Competition', value: 42, color: '#fbbf24', text: 'MEDIUM' },
              { label: 'Demand Signal', value: 78, color: '#4ade80', text: 'HIGH' },
            ].map(({ label, value, color, text }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.4)', letterSpacing: 2 }}>
                    {label.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color, letterSpacing: 2 }}>
                    {text}
                  </span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: color,
                    borderRadius: 2,
                    width: visible ? `${value}%` : '0%',
                    transition: 'width 1s ease 0.3s',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Data snapshot */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 14,
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.3)', letterSpacing: 1 }}>
              8 apps · 4,200+ reviews · avg 4.3★
            </span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#ff4d00', letterSpacing: 1 }}>
              IAP + SUBSCRIPTION
            </span>
          </div>

          {/* Quote */}
          <div style={{
            marginTop: 14,
            padding: '12px 14px',
            borderLeft: '2px solid rgba(255,77,0,0.4)',
            background: 'rgba(255,77,0,0.05)',
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 12,
            color: 'rgba(245,240,232,0.6)',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}>
            "Strong demand, manageable competition window. Build it."
          </div>
        </div>
      </div>
    </div>
  )
}
