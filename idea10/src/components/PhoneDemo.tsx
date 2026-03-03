import { useEffect, useState } from 'react'

type Phase = 'typing' | 'loading' | 'results'

interface Idea {
  name: string
  comp: string
  dot: string
}

const TYPING_TEXT = 'fitness, AI, productivity'
const TYPING_SPEED = 72

const IDEAS: Idea[] = [
  { name: 'AI Fasting Timer', comp: 'LOW', dot: '#4ade80' },
  { name: 'Gym Progress Tracker', comp: 'MED', dot: '#fbbf24' },
  { name: 'AI Study Assistant', comp: 'LOW', dot: '#4ade80' },
  { name: 'Focus Pomodoro AI', comp: 'MED', dot: '#fbbf24' },
  { name: 'Habit Workout App', comp: 'HIGH', dot: '#f87171' },
]

// ─── Sub-screens ────────────────────────────────────────────────────────────

function PhoneLogo() {
  return (
    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 3, color: '#f5f0e8' }}>
      IDEA<span style={{ color: '#ff4d00' }}>PICK</span>
    </div>
  )
}

function TypingScreen({ text, done }: { text: string; done: boolean }) {
  const chips = text.split(',').map(s => s.trim()).filter(s => s.length > 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: 20 }}>
        <PhoneLogo />
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#6b6660', letterSpacing: 2, marginTop: 2 }}>
          STEP 1 OF 3
        </div>
      </div>

      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, lineHeight: 1.1, letterSpacing: 1, color: '#f5f0e8', marginBottom: 18 }}>
        WHAT ARE YOU<br />INTERESTED IN?
      </div>

      {/* Input */}
      <div style={{
        border: `1px solid ${done ? '#ff4d00' : 'rgba(255,255,255,0.14)'}`,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 6,
        padding: '9px 12px',
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 12,
        color: text ? '#f5f0e8' : '#6b6660',
        marginBottom: 12,
        minHeight: 38,
        transition: 'border-color 0.3s',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span>{text || 'fitness, AI...'}</span>
        {!done && (
          <span style={{ display: 'inline-block', width: 1.5, height: 12, marginLeft: 1, background: '#ff4d00', animation: 'blink 0.9s step-end infinite' }} />
        )}
      </div>

      {/* Interest chips */}
      {chips.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {chips.map((chip, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 8,
              letterSpacing: 1,
              color: '#ff4d00',
              border: '1px solid rgba(255,77,0,0.3)',
              padding: '3px 7px',
              background: 'rgba(255,77,0,0.08)',
            }}>
              {chip}
            </span>
          ))}
        </div>
      )}

      <div style={{ flex: 1 }} />

      {/* CTA button */}
      <div style={{
        background: done ? '#ff4d00' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${done ? '#ff4d00' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 6,
        padding: 11,
        textAlign: 'center',
        fontFamily: "'DM Mono',monospace",
        fontSize: 10,
        letterSpacing: 2,
        color: done ? '#0a0a0a' : '#6b6660',
        transition: 'all 0.4s ease',
        fontWeight: done ? 500 : 400,
      }}>
        GENERATE IDEAS
      </div>
    </div>
  )
}

function LoadingScreen({ dot }: { dot: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
      <PhoneLogo />
      <div style={{ display: 'flex', gap: 7 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: i === dot ? '#ff4d00' : 'rgba(255,77,0,0.2)',
            transition: 'background 0.15s',
          }} />
        ))}
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#6b6660', letterSpacing: 2, textAlign: 'center' }}>
        GENERATING IDEAS...
      </div>
      <div style={{ width: 140, height: 2, background: 'rgba(255,255,255,0.07)', borderRadius: 1, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: '#ff4d00', borderRadius: 1, animation: 'progress 2s ease forwards' }} />
      </div>
    </div>
  )
}

function ResultsScreen({ ideas }: { ideas: Idea[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: 12 }}>
        <PhoneLogo />
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#6b6660', letterSpacing: 2, marginTop: 2 }}>
          STEP 3 · PICK YOUR IDEA
        </div>
      </div>

      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#ff4d00', letterSpacing: 2, marginBottom: 10 }}>
        5 IDEAS FOUND
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1, overflow: 'hidden' }}>
        {ideas.map((idea, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 6,
            padding: '9px 11px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            animation: 'slideUp 0.3s ease forwards',
          }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: '#f5f0e8', fontWeight: 500 }}>
              {idea.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: idea.dot }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: '#6b6660', letterSpacing: 1 }}>
                {idea.comp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function PhoneDemo() {
  const [phase, setPhase] = useState<Phase>('typing')
  const [typedText, setTypedText] = useState('')
  const [visibleIdeas, setVisibleIdeas] = useState(0)
  const [loadDot, setLoadDot] = useState(0)
  const [tilted, setTilted] = useState(true)

  // Typing phase
  useEffect(() => {
    if (phase !== 'typing') return
    if (typedText.length < TYPING_TEXT.length) {
      const t = window.setTimeout(
        () => setTypedText(TYPING_TEXT.slice(0, typedText.length + 1)),
        TYPING_SPEED,
      )
      return () => clearTimeout(t)
    }
    const t = window.setTimeout(() => setPhase('loading'), 900)
    return () => clearTimeout(t)
  }, [phase, typedText])

  // Loading dots + advance
  useEffect(() => {
    if (phase !== 'loading') return
    const iv = window.setInterval(() => setLoadDot(d => (d + 1) % 3), 350)
    const t = window.setTimeout(() => { clearInterval(iv); setPhase('results') }, 2000)
    return () => { clearInterval(iv); clearTimeout(t) }
  }, [phase])

  // Stagger results
  useEffect(() => {
    if (phase !== 'results') return
    if (visibleIdeas < IDEAS.length) {
      const t = window.setTimeout(() => setVisibleIdeas(v => v + 1), 380)
      return () => clearTimeout(t)
    }
    const t = window.setTimeout(() => {
      setPhase('typing')
      setTypedText('')
      setVisibleIdeas(0)
      setLoadDot(0)
    }, 3500)
    return () => clearTimeout(t)
  }, [phase, visibleIdeas])

  return (
    <div style={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}>
      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        width: 240,
        height: 240,
        borderRadius: '50%',
        background: 'rgba(255,77,0,0.14)',
        filter: 'blur(80px)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      {/* 3D tilt wrapper */}
      <div
        style={{
          transform: tilted ? 'perspective(1000px) rotateY(-8deg) rotateX(2deg)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
          transition: 'transform 0.6s ease',
        }}
        onMouseEnter={() => setTilted(false)}
        onMouseLeave={() => setTilted(true)}
      >
        {/* Phone frame */}
        <div style={{
          width: 280,
          height: 560,
          borderRadius: 44,
          border: '10px solid #1c1c1e',
          background: '#090910',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.06), 4px 4px 0 rgba(255,77,0,0.12)',
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 88,
            height: 26,
            borderRadius: 13,
            background: '#000',
            zIndex: 10,
          }} />

          {/* Status bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 48,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0 20px 6px',
            zIndex: 5,
          }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.4)', letterSpacing: 1 }}>9:41</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.4)' }}>●●● ▮▮</span>
          </div>

          {/* Screen content */}
          <div style={{
            position: 'absolute',
            top: 48,
            left: 0,
            right: 0,
            bottom: 20,
            padding: '16px 18px 20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            {phase === 'typing' && <TypingScreen text={typedText} done={typedText.length === TYPING_TEXT.length} />}
            {phase === 'loading' && <LoadingScreen dot={loadDot} />}
            {phase === 'results' && <ResultsScreen ideas={IDEAS.slice(0, visibleIdeas)} />}
          </div>

          {/* Home indicator */}
          <div style={{
            position: 'absolute',
            bottom: 6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 90,
            height: 3,
            borderRadius: 2,
            background: 'rgba(255,255,255,0.22)',
          }} />
        </div>
      </div>
    </div>
  )
}
