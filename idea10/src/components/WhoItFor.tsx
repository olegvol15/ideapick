import Reveal from './Reveal'

const USERS = [
  {
    tag: 'BEGINNER',
    title: 'Building your first app',
    desc: 'No idea where to start. Every keyword feels like noise. IdeaPick cuts through it and tells you exactly where the gap is.',
  },
  {
    tag: 'STUCK',
    title: 'Paralyzed by too many ideas',
    desc: 'You have 10 ideas and can\'t commit to one. Stop debating. Let the App Store data make the call for you.',
  },
  {
    tag: 'BUILDER',
    title: 'Shipping in public',
    desc: 'You need a validated idea to share with your audience. Show your work from day one, backed by real market data.',
  },
]

export default function WhoItFor() {
  return (
    <section className="section">
      <div className="section-label">Built for</div>

      <div className="who-layout">
        <Reveal className="who-headline-col">
          <h2 className="who-headline">
            SOLO DEVS<br />
            <span style={{ color: 'var(--accent)' }}>WHO</span><br />
            SHIP.
          </h2>
          <p className="who-sub">
            Not for agencies. Not for growth teams.<br />
            Built for developers who move fast and need one clear direction —
            not a 60-slide market research deck.
          </p>
        </Reveal>

        <div className="who-cards">
          {USERS.map((u, i) => (
            <Reveal key={u.tag} delay={i * 90}>
              <div className="who-card">
                <div className="who-card-tag">{u.tag}</div>
                <div className="who-card-title">{u.title}</div>
                <p className="who-card-desc">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="who-notfor">
          <span className="who-notfor-label">Not for you if</span>
          You need 6 months of market research before writing a single line of code.
          This tool is for builders who'd rather ship and learn than plan and stall.
        </div>
      </Reveal>
    </section>
  )
}
