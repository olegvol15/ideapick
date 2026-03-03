import Reveal from './Reveal'

const STEPS = [
  {
    num: '01',
    time: '1 min',
    title: 'Tell Us',
    desc: 'Type topics you care about. Fitness. AI. Productivity. Pets. No ASO knowledge required — just your interests.',
    tags: ['Any topic', 'Plain English'],
  },
  {
    num: '02',
    time: '3 min',
    title: 'Generate',
    desc: 'AI creates 5–8 realistic, narrowly scoped app ideas. Each one MVP-friendly and actually buildable by one person.',
    tags: ['AI-powered', '5–8 ideas'],
  },
  {
    num: '03',
    time: '6 min',
    title: 'Validate',
    desc: 'Basic App Store scan gives each idea a competition level, demand indicator, and opportunity signal. Fast, practical, indie-grade.',
    tags: ['🟢 Low comp.', '🟡 Medium', '🔴 High'],
  },
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="section-label">How it works</div>
      <div className="steps" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={i * 100}>
            <div className="step">
              <div className="step-num">{step.num}</div>
              <div className="step-time">{step.time}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
              <div className="step-tags">
                {step.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
