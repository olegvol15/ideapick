import Reveal from './Reveal'

const COMPARISON = [
  {
    ai: 'Generates ideas from training patterns',
    pick: 'Searches real App Store listings live',
  },
  {
    ai: 'Output varies with every prompt',
    pick: 'Same evaluation model, every single run',
  },
  {
    ai: 'No marketplace validation',
    pick: 'Competition density + review volume checks',
  },
  {
    ai: 'Requires prompt engineering',
    pick: 'Guided 3-step flow — zero prompts needed',
  },
  {
    ai: '20 vague possibilities',
    pick: 'One ranked, decision-ready direction',
  },
]

const REASONS = [
  {
    num: '01',
    tag: 'Live market signals',
    title: 'Real App Store Data',
    body: 'IdeaPick searches the App Store, analyzes competition density, checks review volume, evaluates rating quality, and detects monetization signals. Not patterns — real marketplace data.',
  },
  {
    num: '02',
    tag: '5-point scoring',
    title: 'Structured Evaluation',
    body: 'Every idea gets a competition level, demand signal, opportunity score, monetization suggestion, and risk level. ChatGPT gives a list. IdeaPick gives decision-ready insights.',
  },
  {
    num: '03',
    tag: 'Same model, every run',
    title: 'Consistent Logic',
    body: 'When you ask AI repeatedly, answers vary. IdeaPick applies the same evaluation model every time — repeatable, comparable results across every idea you test.',
  },
  {
    num: '04',
    tag: 'Automated workflow',
    title: 'Zero Cognitive Load',
    body: 'No prompt engineering. No manual App Store checks. No competitor research. One guided flow replaces 10 prompts + 20 minutes of manual research.',
  },
  {
    num: '05',
    tag: 'Build vs skip',
    title: 'One Clear Decision',
    body: 'AI gives infinite possibilities. IdeaPick helps you answer one question: "Should I build this?" It narrows everything down to one strong direction. Clarity over creativity.',
  },
]

export default function VsAI() {
  return (
    <section className="section">
      <div className="section-label">Why not just use AI</div>

      {/* Pain → Solution callout */}
      <Reveal>
        <div className="vsai-pain">
          <div className="vsai-pain-side">
            <div className="vsai-pain-label">The problem</div>
            <div className="vsai-pain-big">
              ChatGPT gives you<br />20 ideas.
            </div>
            <p className="vsai-pain-desc">
              You still don't know which one will make money.
              You're back to guessing — just with more words.
            </p>
          </div>

          <div className="vsai-pain-arrow">→</div>

          <div className="vsai-pain-side vsai-pain-side--bright">
            <div className="vsai-pain-label vsai-pain-label--accent">The solution</div>
            <div className="vsai-pain-big vsai-pain-big--bright">
              IdeaPick gives you<br />one direction.
            </div>
            <p className="vsai-pain-desc vsai-pain-desc--bright">
              Decision-ready. Ranked by real App Store signals.
              Build it or skip it — you'll know in 10 minutes.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="vsai-header">
        <Reveal>
          <h2 className="vsai-headline">
            NOT ANOTHER<br />
            <span style={{ color: 'var(--accent)' }}>CHATBOT.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="vsai-sub">
            AI brainstorms. IdeaPick <strong>evaluates</strong>. There's a difference.
            Every idea IdeaPick surfaces is grounded in real App Store search data — competition
            density, review volume, monetization signals.
            <br /><br />
            Not patterns. Not vibes. <strong>Real marketplace data.</strong>
            <br /><br />
            <span className="vsai-tagline">AI suggests. IdeaPick validates.</span>
          </p>
        </Reveal>
      </div>

      {/* Side-by-side comparison */}
      <Reveal delay={100}>
        <div className="vsai-compare">
          <div className="vsai-col vsai-col--ai">
            <div className="vsai-col-header">AI Chatbot</div>
            {COMPARISON.map((r, i) => (
              <div key={i} className="vsai-row vsai-row--ai">
                <span className="vsai-icon">✗</span>
                {r.ai}
              </div>
            ))}
          </div>

          <div className="vsai-divider">
            <div className="vsai-divider-line" />
            <div className="vsai-vs-badge">VS</div>
            <div className="vsai-divider-line" />
          </div>

          <div className="vsai-col vsai-col--pick">
            <div className="vsai-col-header">IdeaPick</div>
            {COMPARISON.map((r, i) => (
              <div key={i} className="vsai-row vsai-row--pick">
                <span className="vsai-icon">✓</span>
                {r.pick}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Data provenance — credibility anchor */}
      <Reveal>
        <div className="vsai-data-sources">
          <div className="vsai-data-label">What we actually analyze — per keyword</div>
          <div className="vsai-data-grid">
            {[
              { metric: 'App Store search', detail: 'Live results, not cached estimates' },
              { metric: 'Top 100 listings', detail: 'Scanned per keyword, per run' },
              { metric: 'Review count & velocity', detail: 'Volume + recency signals' },
              { metric: 'Average rating quality', detail: '4.0+ vs below — context matters' },
              { metric: 'IAP / subscription detection', detail: 'Visible monetization in listings' },
              { metric: 'Competition density index', detail: 'Calculated from result spread' },
            ].map((d, i) => (
              <div key={i} className="vsai-data-item">
                <div className="vsai-data-metric">{d.metric}</div>
                <div className="vsai-data-detail">{d.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 5 differentiators */}
      <div className="vsai-reasons">
        {REASONS.map((r, i) => (
          <Reveal key={r.num} delay={i * 80} className="vsai-reason">
            <div className="vsai-reason-num">{r.num}</div>
            <div className="vsai-reason-tag">{r.tag}</div>
            <div className="vsai-reason-title">{r.title}</div>
            <p className="vsai-reason-body">{r.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
