import { useEffect, useState } from 'react'

type Phase = 'typing' | 'loading' | 'results'

const TYPING_TEXT = 'fitness, AI, productivity'
const TYPING_SPEED = 72

const IDEAS = [
  { name: 'AI Fasting Timer',      comp: 'LOW',  dot: '#4ade80', score: 84 },
  { name: 'AI Study Assistant',    comp: 'LOW',  dot: '#4ade80', score: 79 },
  { name: 'Gym Progress Tracker',  comp: 'MED',  dot: '#fbbf24', score: 71 },
  { name: 'Focus Pomodoro AI',     comp: 'MED',  dot: '#fbbf24', score: 66 },
  { name: 'Habit Workout App',     comp: 'HIGH', dot: '#f87171', score: 52 },
]

function Chrome() {
  return (
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
        ideapick.app
      </div>
    </div>
  )
}

function TypingScreen({ text, done }: { text: string; done: boolean }) {
  const chips = text.split(',').map(s => s.trim()).filter(Boolean)
  return (
    <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, color: '#f5f0e8' }}>
          IDEA<span style={{ color: '#ff4d00' }}>PICK</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['01 INPUT','02 GENERATE','03 RESULTS'].map((s, i) => (
            <span key={s} style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 9,
              letterSpacing: 1.5,
              color: i === 0 ? '#ff4d00' : 'rgba(245,240,232,0.2)',
            }}>{s}</span>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 0.5, color: '#f5f0e8', marginBottom: 20 }}>
        What topics interest you?
      </div>

      {/* Input */}
      <div style={{
        border: `1px solid ${done ? '#ff4d00' : 'rgba(255,255,255,0.12)'}`,
        background: 'rgba(255,255,255,0.04)',
        borderRadius: 4,
        padding: '10px 14px',
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 13,
        color: text ? '#f5f0e8' : '#6b6660',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        transition: 'border-color 0.3s',
        minHeight: 40,
      }}>
        <span>{text || 'fitness, travel, finance...'}</span>
        {!done && (
          <span style={{ display: 'inline-block', width: 1.5, height: 13, marginLeft: 2, background: '#ff4d00', animation: 'blink 0.9s step-end infinite' }} />
        )}
      </div>

      {chips.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {chips.map((chip, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 9,
              letterSpacing: 1.5,
              color: '#ff4d00',
              border: '1px solid rgba(255,77,0,0.35)',
              padding: '3px 9px',
              background: 'rgba(255,77,0,0.07)',
            }}>{chip.toUpperCase()}</span>
          ))}
        </div>
      )}

      <div style={{ flex: 1 }} />

      <div style={{
        background: done ? '#ff4d00' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${done ? '#ff4d00' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 4,
        padding: '12px 0',
        textAlign: 'center',
        fontFamily: "'DM Mono',monospace",
        fontSize: 11,
        letterSpacing: 2.5,
        color: done ? '#0a0a0a' : '#6b6660',
        fontWeight: done ? 600 : 400,
        transition: 'all 0.4s ease',
        cursor: done ? 'pointer' : 'default',
      }}>
        GENERATE IDEAS →
      </div>
    </div>
  )
}

function LoadingScreen({ dot }: { dot: number }) {
  const steps = ['Fetching top 100 results…', 'Analyzing review velocity…', 'Scoring competition density…']
  return (
    <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 20 }}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, color: '#f5f0e8', marginBottom: 4 }}>
        IDEA<span style={{ color: '#ff4d00' }}>PICK</span>
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#ff4d00', letterSpacing: 2 }}>
        SCANNING APP STORE DATA
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: i === dot ? '#ff4d00' : 'rgba(255,77,0,0.15)', transition: 'background 0.15s' }} />
        ))}
      </div>
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 2, height: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: '#ff4d00', borderRadius: 2, animation: 'progress 2s ease forwards' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {steps.map((s, i) => (
          <div key={s} style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: i <= dot ? 'rgba(245,240,232,0.6)' : 'rgba(245,240,232,0.18)',
            letterSpacing: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ color: i <= dot ? '#ff4d00' : 'rgba(255,77,0,0.2)' }}>→</span>
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

function ResultsScreen({ ideas }: { ideas: typeof IDEAS }) {
  return (
    <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toolbar */}
      <div style={{
        padding: '0 28px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, color: '#f5f0e8' }}>
          IDEA<span style={{ color: '#ff4d00' }}>PICK</span>
        </div>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#ff4d00', letterSpacing: 2 }}>
          {ideas.length} IDEAS FOUND
        </div>
      </div>

      {/* Table header */}
      <div style={{
        padding: '10px 28px',
        display: 'grid',
        gridTemplateColumns: '1fr 60px 44px',
        gap: 8,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {['IDEA NAME','COMP','SCORE'].map(h => (
          <span key={h} style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: 'rgba(245,240,232,0.25)', letterSpacing: 2 }}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {ideas.map((idea, i) => (
          <div key={i} style={{
            padding: '11px 28px',
            display: 'grid',
            gridTemplateColumns: '1fr 60px 44px',
            gap: 8,
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            background: i === 0 ? 'rgba(255,77,0,0.05)' : 'transparent',
            animation: 'slideUp 0.3s ease forwards',
          }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: '#f5f0e8', fontWeight: 400 }}>
              {idea.name}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: idea.dot, flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#6b6660', letterSpacing: 1 }}>{idea.comp}</span>
            </span>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, color: idea.dot, letterSpacing: 1 }}>{idea.score}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BrowserDemo() {
  const [phase, setPhase] = useState<Phase>('typing')
  const [typedText, setTypedText] = useState('')
  const [visibleIdeas, setVisibleIdeas] = useState(0)
  const [loadDot, setLoadDot] = useState(0)

  useEffect(() => {
    if (phase !== 'typing') return
    if (typedText.length < TYPING_TEXT.length) {
      const t = setTimeout(() => setTypedText(TYPING_TEXT.slice(0, typedText.length + 1)), TYPING_SPEED)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setPhase('loading'), 900)
    return () => clearTimeout(t)
  }, [phase, typedText])

  useEffect(() => {
    if (phase !== 'loading') return
    const iv = setInterval(() => setLoadDot(d => (d + 1) % 3), 400)
    const t = setTimeout(() => { clearInterval(iv); setPhase('results') }, 2200)
    return () => { clearInterval(iv); clearTimeout(t) }
  }, [phase])

  useEffect(() => {
    if (phase !== 'results') return
    if (visibleIdeas < IDEAS.length) {
      const t = setTimeout(() => setVisibleIdeas(v => v + 1), 340)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => { setPhase('typing'); setTypedText(''); setVisibleIdeas(0) }, 3500)
    return () => clearTimeout(t)
  }, [phase, visibleIdeas])

  return (
    <div className="browser-demo-wrap">
      {/* Glow */}
      <div style={{
        position: 'absolute', width: 300, height: 200, borderRadius: '50%',
        background: 'rgba(255,77,0,0.12)', filter: 'blur(80px)',
        top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      <div className="browser-demo">
        <Chrome />
        <div className="browser-demo-body">
          {phase === 'typing'   && <TypingScreen text={typedText} done={typedText.length === TYPING_TEXT.length} />}
          {phase === 'loading'  && <LoadingScreen dot={loadDot} />}
          {phase === 'results'  && <ResultsScreen ideas={IDEAS.slice(0, visibleIdeas)} />}
        </div>
      </div>
    </div>
  )
}
