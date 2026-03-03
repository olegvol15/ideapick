import { useEffect, useRef, useState } from 'react'

const ROWS = [
  { label: 'User Intent', value: 'Track fasting with AI guidance, not just a countdown' },
  { label: 'Core Feature', value: 'Smart timer with AI mood & energy check-ins' },
  { label: 'Monetization', value: 'Free → $3.99/mo for AI coaching + streak insights' },
]

export default function IdeaCardPhone() {
  const [visible, setVisible] = useState(false)
  const [tilted, setTilted] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        width: 260, height: 260,
        borderRadius: '50%',
        background: 'rgba(255,77,0,0.13)',
        filter: 'blur(80px)',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      {/* 3D tilt wrapper */}
      <div
        style={{
          transform: tilted
            ? 'perspective(1000px) rotateY(-6deg) rotateX(2deg)'
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.6s ease',
        }}
        onMouseEnter={() => setTilted(false)}
        onMouseLeave={() => setTilted(true)}
      >
        {/* Phone frame */}
        <div style={{
          width: 300,
          height: 620,
          borderRadius: 44,
          border: '10px solid #1c1c1e',
          background: '#090910',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06), 6px 6px 0 rgba(255,77,0,0.1)',
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: 'absolute', top: 10, left: '50%',
            transform: 'translateX(-50%)',
            width: 88, height: 26, borderRadius: 13, background: '#000', zIndex: 10,
          }} />

          {/* Status bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 48,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            padding: '0 20px 6px', zIndex: 5,
          }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.4)', letterSpacing: 1 }}>9:41</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.4)' }}>●●● ▮▮</span>
          </div>

          {/* Screen content */}
          <div style={{
            position: 'absolute', top: 48, left: 0, right: 0, bottom: 20,
            padding: '14px 20px 18px',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            {/* Top nav */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.3)', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
                ← BACK
              </div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, color: '#f5f0e8' }}>
                IDEA<span style={{ color: '#ff4d00' }}>PICK</span>
              </div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(74,222,128,0.8)', letterSpacing: 1 }}>
                ✓ DONE
              </div>
            </div>

            {/* Keyword tag */}
            <div style={{
              fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#ff4d00',
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 5,
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.05s',
            }}>
              FITNESS + AI
            </div>

            {/* Idea name */}
            <div style={{
              fontFamily: "'Bebas Neue',sans-serif", fontSize: 32,
              letterSpacing: 1, color: '#f5f0e8', lineHeight: 1,
              paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: 12,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
            }}>
              AI FASTING TIMER
            </div>

            {/* Score badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)',
              borderRadius: 3, padding: '5px 10px', marginBottom: 8, alignSelf: 'flex-start',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.18s',
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#4ade80', letterSpacing: 1 }}>
                HIGH CONFIDENCE · 82
              </span>
            </div>

            {/* Analyzed data snapshot */}
            <div style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 8,
              color: 'rgba(107,102,96,0.8)',
              letterSpacing: 1,
              marginBottom: 12,
              paddingBottom: 12,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.22s',
            }}>
              ANALYZED: 8 apps · 4,200+ reviews · avg 4.3 ★
            </div>

            {/* Data rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, overflow: 'hidden' }}>
              {ROWS.map((row, i) => (
                <div key={i} style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.35s ease ${0.26 + i * 0.09}s, transform 0.35s ease ${0.26 + i * 0.09}s`,
                }}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#6b6660', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 3 }}>
                    {row.label}
                  </div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.5, color: '#f5f0e8', lineHeight: 1.45, fontWeight: 400 }}>
                    {row.value}
                  </div>
                </div>
              ))}

              {/* Competition bar */}
              <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.35s ease 0.53s, transform 0.35s ease 0.53s',
              }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#6b6660', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                  Competition
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: visible ? '48%' : '0%',
                      background: 'linear-gradient(90deg, #4ade80 0%, #fbbf24 100%)',
                      borderRadius: 2,
                      transition: 'width 0.9s ease 0.6s',
                    }} />
                  </div>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#fbbf24', letterSpacing: 1, flexShrink: 0 }}>MEDIUM</span>
                </div>
              </div>

              {/* Why quote */}
              <div style={{
                borderLeft: '2px solid #ff4d00',
                paddingLeft: 10,
                background: 'rgba(255,77,0,0.05)',
                padding: '8px 8px 8px 10px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.35s ease 0.62s, transform 0.35s ease 0.62s',
              }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 7.5, color: '#6b6660', letterSpacing: 1.5, marginBottom: 3, textTransform: 'uppercase' }}>
                  Why it might work
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10.5, color: 'rgba(245,240,232,0.7)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "Growing keyword + simple MVP scope + competitors feel robotic."
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{
              background: '#ff4d00',
              borderRadius: 6,
              padding: '12px',
              textAlign: 'center',
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              letterSpacing: 2,
              color: '#0a0a0a',
              fontWeight: 500,
              marginTop: 12,
              cursor: 'pointer',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.35s ease 0.72s, transform 0.35s ease 0.72s',
            }}>
              BUILD THIS →
            </div>
          </div>

          {/* Home indicator */}
          <div style={{
            position: 'absolute', bottom: 6, left: '50%',
            transform: 'translateX(-50%)',
            width: 90, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.22)',
          }} />
        </div>
      </div>
    </div>
  )
}
